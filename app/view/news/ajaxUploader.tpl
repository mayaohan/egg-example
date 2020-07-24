<html>
  <head>
    <title>Hacker News</title>
    {# <link rel="stylesheet" href="/public/css/news.css" /> #}
  </head>
  <body>
    <form class="ax" method="POST" action="/upload?_csrf={{ ctx.csrf | safe }}" enctype="multipart/form-data">
        title: <input name="title" />
        file: <input name="file" type="file" onChange="showPreview(this)"/>
        <button type="submit">Upload</button>
    </form>

    <form class="bx" method="POST" action="/upload?_csrf={{ ctx.csrf | safe }}" enctype="multipart/form-data">
        title: <input name="title1" />
        file: <input multiple name="file1" type="file" id="file"/>
        <button type="submit">Upload</button>
    </form>
    <script src="/public/jquery.min.js"></script>
    <script>
        {# $('.btn').click(function(){ #}
        {# function fileChange(res){
            console.log(res.value)
            var files = res.raw
            
        } #}
        var newfile = null,copyfile = null
        function showPreview(source) {  
            var file = source.files[0];  
            console.log(file)
            //文件改名方法1
            copyfile = new File([file],'sdfssfd.PNG')
            console.log(copyfile)
            //文件改名方法2
            if(window.FileReader) {  
                var fr = new FileReader();  
                fr.onloadend = function(e) {  
                    console.log(e)
                    var arr = e.target.result.split(','), mime = arr[0].match(/:(.*?);/)[1],
                        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                    while(n--){
                        u8arr[n] = bstr.charCodeAt(n);
                    }
                    newfile = new File([u8arr], 'safd.PNG', {type:mime})
                    console.log(newfile)
                    return ;
                };  
                fr.readAsDataURL(file);  //也是利用将图片作为url读出
            }  
        } 
            $('.ax').submit(function(e) {
                e.preventDefault();
                var formData = new FormData();
                formData.append('name', $('input[type=text]').val());
                var file = $('input[type=file]')[0].files[0]
                console.log(file)
                formData.append('image', copyfile);
                console.log(formData);
                console.log(file)
                $.ajax({
                    url: '/ajaxUploader?_csrf=' + getCsrf(),
                    data: formData,
                    method: 'POST',
                    contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
                    processData: false, // NEEDED, DON'T OMIT THIS
                    success: function(result) {
                        console.log(result);
                        var im = document.createElement('img')
                        im.src = result.url
                        document.body.appendChild(im)

                    },
                    error: function(responseStr) {
                        alert("error", responseStr);
                    }
                });
                // 通过 cookie 获取 csrf token
                function getCsrf() {
                    var keyValue = document.cookie.match('(^|;) ?csrfToken=([^;]*)(;|$)');
                    return keyValue ? keyValue[2] : null;
                }
            });

            $('.bx').submit(function(e) {
                e.preventDefault();
                var formData = new FormData();
                formData.append('name', $('input[type=text]').val());
                console.log($('#file')[0].files)
                for(var i=0; i<$('#file')[0].files.length;i++){
                   formData.append('file', $('#file')[0].files[i]);
                }
                /*
                for (var value of formData.values()) {
                    console.log(value); 
                }
                for (var key of formData.keys()) {
                    console.log(key); 
                }
                */
                /*
                var xhr = new XMLHttpRequest();
                xhr.open('POST', '/ajaxUploader_more?_csrf=' + getCsrf());
                // 上传完成后的回调函数
                xhr.onload = function (e) {
                    if (xhr.status === 200) {
                    　　console.log('上传成功',e);
                    } else {
                    　console.log('上传出错');
                    }
                };
                
                // 获取上传进度
                xhr.upload.onprogress = function (event) {
                    if (event.lengthComputable) {
                        var percent = Math.floor(event.loaded / event.total * 100) ;
                        // 设置进度显示
                        console.log(event.loaded,event.total)
                        console.log(percent)
                    }
                };
                xhr.send(formData);
                */
                $.ajax({
                    url: '/ajaxUploader_more?_csrf=' + getCsrf(),
                    data: formData,
                    method: 'POST',
                    contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
                    processData: false, // NEEDED, DON'T OMIT THIS
                    success: function(result) {
                        console.log(result);
                    },
                    error: function(responseStr) {
                        alert("error", responseStr);
                    }
                });
                // 通过 cookie 获取 csrf token
                function getCsrf() {
                    var keyValue = document.cookie.match('(^|;) ?csrfToken=([^;]*)(;|$)');
                    return keyValue ? keyValue[2] : null;
                }
            });


            
        {# }) #}
    </script>
  </body>
</html>