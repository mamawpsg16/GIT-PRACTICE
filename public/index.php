<?php
    // Your PHP code here
    // $currentScript = $_SERVER['PHP_SELF'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php echo 'BITCH' ;?>
    <label for="File">File</label>
    <input type="file" name="file" id="abc">
    <button id="btnSubmit">Upload</button>
    <?= __DIR__ ?>
    <?= dirname(__FILE__) ?>
    <!-- <?= addslashes(__DIR__) ?> -->
    <script>

        document.addEventListener('DOMContentLoaded', function() {
            console.log('<?php echo dirname(__FILE__); ?>')
            const btn = document.getElementById('btnSubmit');
            const fileUpload = document.querySelector('input[name="file"]');
            let file;

            fileUpload.addEventListener('change', function(e){
                file = e.target.files[0];
            });

            const upload = function(api, data){
                console.log(api,'api');
                fetch(api, {
                    method: 'POST',
                    body: data
                }).then(response => response.text())
                .catch(error => console.error('Error:', error));
            }

            btn.addEventListener('click', function(e){
                // const currentDir = '<?php addslashes(__DIR__); ?>';
                // const uploadUrl = `${currentDir}/upload.php`;
                e.preventDefault();
                const formData = new FormData();
                formData.append('image', file);
                upload('/upload.php', formData)
            })
            
          
            console.log('HTML is loaded and parsed.');
        });
    </script>
</body>
</html>