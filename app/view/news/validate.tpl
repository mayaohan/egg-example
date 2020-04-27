<html>
  <head>
    <title>Hacker News</title>
    {# <link rel="stylesheet" href="/public/css/news.css" /> #}
  </head>
  <body>
    <form class="bx" method="POST" action="/upload?_csrf={{ ctx.csrf | safe }}" enctype="multipart/form-data">
        title: <input name="title" placeholder="title"/>
        content: <input name="content" placeholder="content"/>
        <button type="submit">Upload</button>
    </form>
    <script src="/public/jquery.min.js"></script>
    <script>
        $('.bx').submit(function(e) {
            e.preventDefault();
            var formData = new FormData();
            formData.append('title', $('input[name=title]').val());
            formData.append('content', $('input[name=content]').val());
            var param = {
                title:$('input[name=title]').val(),
                content:$('input[name=content]').val()
            }
            $.ajax({
                url: '/validate?_csrf=' + getCsrf(),
                data: param,
                method: 'POST',
                dataType: 'json',
                //contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
                //processData: false, // NEEDED, DON'T OMIT THIS
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
    </script>
  </body>
</html>