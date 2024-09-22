<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Manager</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #333;
            color: white;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }

        .file-manager {
            background-color: #444;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            width: 400px;
        }

        a {
            color: #4CAF50;
            text-decoration: none;
            margin: 5px 0;
            display: block;
        }

        a:hover {
            text-decoration: underline;
        }

        h2 {
            margin-bottom: 20px;
        }

        button {
            padding: 10px;
            margin: 10px;
            font-size: 16px;
            border-radius: 4px;
            background-color: #4CAF50;
            color: white;
            border: none;
        }

        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="file-manager">
        <h2>Uploaded Files</h2>
        <div class="file-list">
            <?php
            $dir = "uploads/";

            // Open directory and read files
            if (is_dir($dir)){
                if ($dh = opendir($dir)){
                    while (($file = readdir($dh)) !== false){
                        if ($file != "." && $file != "..") {
                            echo "<a href='uploads/$file' download='$file'>$file</a>";
                        }
                    }
                    closedir($dh);
                }
            } else {
                echo "<p>No files uploaded yet.</p>";
            }
            ?>
        </div>
        <a href="upload.html"><button>Upload New File</button></a>
    </div>
</body>
</html>
