<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $code, bool $success, string $message): void
{
    http_response_code($code);
    echo json_encode([
        'success' => $success,
        'message' => $message
    ]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'Method not allowed.');
}

// Private Cloudflare configuration, outside public_html.
$configFile = '/home/capital/kp-turnstile-config.php';

if (!is_readable($configFile)) {
    error_log('KP Contact: Turnstile configuration missing.');
    respond(503, false, 'Contact form temporarily unavailable.');
}

$config = require $configFile;
$secret = is_array($config)
    ? ($config['turnstile_secret'] ?? '')
    : '';

if (!is_string($secret) || trim($secret) === '') {
    error_log('KP Contact: Turnstile secret missing.');
    respond(503, false, 'Contact form temporarily unavailable.');
}

function getField(string $name, int $maxLength): string
{
    $value = $_POST[$name] ?? '';

    if (!is_string($value) || strlen($value) > $maxLength) {
        respond(422, false, 'Please check your entries and try again.');
    }

    return trim(strip_tags($value));
}

// Honeypot protection.
if (getField('website', 300) !== '') {
    respond(200, true, 'Thank you. Your request has been submitted.');
}

// Require Cloudflare Turnstile token.
$token = getField('cf-turnstile-response', 2048);

if ($token === '') {
    respond(403, false, 'Please complete the security verification.');
}

if (!function_exists('curl_init')) {
    error_log('KP Contact: PHP cURL extension unavailable.');
    respond(503, false, 'Security verification is unavailable.');
}

// Verify token with Cloudflare.
$payload = http_build_query([
    'secret' => $secret,
    'response' => $token,
    'remoteip' => $_SERVER['REMOTE_ADDR'] ?? ''
]);

$ch = curl_init(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify'
);

if ($ch === false) {
    respond(503, false, 'Security verification is unavailable.');
}

curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT => 10,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/x-www-form-urlencoded'
    ]
]);

$result = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($result === false || $httpCode !== 200) {
    error_log('KP Contact: Cloudflare verification request failed.');
    respond(
        503,
        false,
        'Security verification is unavailable. Please try again.'
    );
}

$verification = json_decode($result, true);

if (!is_array($verification) ||
    ($verification['success'] ?? false) !== true ||
    ($verification['hostname'] ?? '') !== 'kpcapitalsolutions.com') {
    respond(
        403,
        false,
        'Security verification failed. Please try again.'
    );
}

// Rate limiting: maximum 3 attempts per hour per IP.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

$rateFile = sys_get_temp_dir()
    . '/kp-contact-'
    . hash('sha256', $ip)
    . '.json';

$now = time();

$handle = @fopen($rateFile, 'c+');

if ($handle === false) {
    error_log('KP Contact: Rate-limit storage unavailable.');
    respond(503, false, 'Please try again later.');
}

if (!flock($handle, LOCK_EX)) {
    fclose($handle);
    respond(503, false, 'Please try again later.');
}

rewind($handle);

$contents = stream_get_contents($handle);
$attempts = json_decode($contents ?: '[]', true);

if (!is_array($attempts)) {
    $attempts = [];
}

$attempts = array_values(array_filter(
    $attempts,
    static fn($time) =>
        is_int($time) && $time > $now - 3600
));

if (count($attempts) >= 3) {
    flock($handle, LOCK_UN);
    fclose($handle);

    respond(
        429,
        false,
        'Too many requests. Please try again later.'
    );
}

$attempts[] = $now;

rewind($handle);
ftruncate($handle, 0);
fwrite($handle, json_encode($attempts));
fflush($handle);

flock($handle, LOCK_UN);
fclose($handle);

// Read contact form fields.
$name = getField('name', 100);
$email = getField('email', 200);
$phone = getField('phone', 40);
$company = getField('company', 150);
$assistance = getField('assistance', 100);
$message = getField('message', 3000);

$allowedAssistance = [
    'real-estate-financing',
    'business-financing',
    'business-line-of-credit',
    'financial-profile-improvement',
    'capital-strategy',
    'other'
];

// Validate required fields.
if (
    $name === '' ||
    $email === '' ||
    $assistance === '' ||
    $message === '' ||
    !in_array($assistance, $allowedAssistance, true)
) {
    respond(
        422,
        false,
        'Please complete all required fields.'
    );
}

// Validate email.
if (
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    preg_match('/[\r\n]/', $email)
) {
    respond(
        422,
        false,
        'Please enter a valid email address.'
    );
}

// Validate message and block obvious spam.
if (
    strlen($message) < 15 ||
    preg_match('/^[0-9\s]+$/', $message) ||
    preg_match('/(.)\1{9,}/', $message)
) {
    respond(
        422,
        false,
        'Please describe your financing request in more detail.'
    );
}

// Validate optional phone.
if (
    $phone !== '' &&
    !preg_match('/^[+0-9().\s-]{7,40}$/', $phone)
) {
    respond(
        422,
        false,
        'Please enter a valid phone number.'
    );
}

// Prevent email header injection.
$safeName = preg_replace('/[\r\n]+/', ' ', $name);

$to = 'info@kpcapitalsolutions.com';
$subject = 'New Website Inquiry - ' . $safeName;

// Build email notification.
$body = "New inquiry from kpcapitalsolutions.com\n\n";
$body .= "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Phone: {$phone}\n";
$body .= "Company: {$company}\n";
$body .= "Inquiry Type: {$assistance}\n\n";
$body .= "Message:\n{$message}\n";

// Email headers.
$headers = [
    'From' => 'KP Capital Solutions Website <info@kpcapitalsolutions.com>',
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=UTF-8'
];

// Send notification.
$sent = mail($to, $subject, $body, $headers);

if (!$sent) {
    error_log('KP Contact: PHP mail() failed.');

    respond(
        500,
        false,
        'We could not submit your request. Please try again.'
    );
}

respond(
    200,
    true,
    'Thank you. Your request has been submitted.'
);
