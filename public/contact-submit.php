<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

function clean($value) {
    return trim(strip_tags($value ?? ''));
}

$name       = clean($_POST['name'] ?? '');
$email      = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone      = clean($_POST['phone'] ?? '');
$company    = clean($_POST['company'] ?? '');
$assistance = clean($_POST['assistance'] ?? '');
$message    = clean($_POST['message'] ?? '');

if ($name === '' || $email === '' || $assistance === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please complete all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

$to = 'info@kpcapitalsolutions.com';
$subject = 'New Website Inquiry - ' . $name;

$body  = "New inquiry from kpcapitalsolutions.com\n\n";
$body .= "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Phone: {$phone}\n";
$body .= "Company: {$company}\n";
$body .= "Inquiry Type: {$assistance}\n\n";
$body .= "Message:\n{$message}\n";

$headers  = "From: KP Capital Solutions Website <info@kpcapitalsolutions.com>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Thank you. Your request has been submitted.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'We could not submit your request. Please try again.']);
}