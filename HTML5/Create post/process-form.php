<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $title = $_POST['title'];
    $content = $_POST['content'];
    
    // Create array with form data
    $post = array(
        'title' => $title,
        'content' => $content
    );
    
    // Convert array to JSON string
    $json = json_encode($post);
    
    // Open or create JSON file
    $file = fopen('posts.json', 'a');
    
    // Add JSON string to file
    fwrite($file, $json . "\n");
    
    // Close file
    fclose($file);
}
?>
