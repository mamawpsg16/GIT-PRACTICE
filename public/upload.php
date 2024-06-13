<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $image = $_FILES['image'];

    // Handle file upload
    $targetDirectory = 'uploads/';

    // Check if the directory exists
    if (!is_dir($targetDirectory)) {
        // Attempt to create the directory
        if (!mkdir($targetDirectory, 0755, true)) {
            echo "Error creating directory: " . $targetDirectory;
            exit;
        }
    }

    // Use the original filename or generate a unique name
    $targetFile = $targetDirectory . basename($image['name']);

    // Check if file already exists and generate a unique name if necessary
    $fileInfo = pathinfo($targetFile);
    $baseName = $fileInfo['filename'];
    $extension = isset($fileInfo['extension']) ? '.' . $fileInfo['extension'] : '';
    $counter = 1;
    while (file_exists($targetFile)) {
        $targetFile = $targetDirectory . $baseName . '_' . $counter . $extension;
        $counter++;
    }

    if (move_uploaded_file($image['tmp_name'], $targetFile)) {
        echo "File uploaded successfully.";
    } else {
        echo "Error uploading file.";
    }

    // Process extra data if any
    // echo "Extra data: " . htmlspecialchars($extraData);
}