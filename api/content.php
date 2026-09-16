<?php
declare(strict_types=1);

header('Content-Type: application/json');

function loadEnvFile(string $path): void
{
    if (!is_readable($path)) {
        return;
    }

    foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if ($line === '' || substr($line, 0, 1) === '#' || strpos($line, '=') === false) {
            continue;
        }

        [$name, $value] = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);
        if ($name !== '' && getenv($name) === false) {
            putenv("{$name}={$value}");
        }
    }
}

// On cPanel, keep .env one directory above public_html so it cannot be downloaded.
loadEnvFile(dirname(__DIR__, 2) . '/.env');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$expectedToken = getenv('AMETRINE_ADMIN_TOKEN') ?: '';
$providedToken = preg_replace('/^Bearer\s+/i', '', $_SERVER['HTTP_AUTHORIZATION'] ?? '');
if ($expectedToken === '' || !hash_equals($expectedToken, $providedToken)) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

$payload = json_decode(file_get_contents('php://input'), true);
$images = $payload['images'] ?? null;
$allowed = ['hero', 'about', 'impact'];
if (!is_array($images)) {
    http_response_code(400);
    echo json_encode(['error' => 'Images payload is required']);
    exit;
}

$contentPath = dirname(__DIR__) . '/content.json';
$content = json_decode(file_get_contents($contentPath), true);
if (!is_array($content)) {
    http_response_code(500);
    echo json_encode(['error' => 'Content feed is invalid']);
    exit;
}

$current = is_array($content['images'] ?? null) ? $content['images'] : [];
foreach ($allowed as $slot) {
    if (array_key_exists($slot, $images)) {
        $url = filter_var($images[$slot], FILTER_VALIDATE_URL);
        if ($url === false || !preg_match('/^https:\/\/res\.cloudinary\.com\//', $url)) {
            http_response_code(400);
            echo json_encode(['error' => "Invalid Cloudinary URL for {$slot}"]);
            exit;
        }
        $current[$slot] = $url;
    }
}

$content['images'] = $current;
$encoded = json_encode($content, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . PHP_EOL;
$temporaryPath = $contentPath . '.tmp';
if (file_put_contents($temporaryPath, $encoded, LOCK_EX) === false || !rename($temporaryPath, $contentPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Unable to publish content feed']);
    exit;
}

echo json_encode(['ok' => true, 'images' => $current]);
