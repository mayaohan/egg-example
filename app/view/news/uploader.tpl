<html>
  <head>
    <title>Hacker News</title>
    {# <link rel="stylesheet" href="/public/css/news.css" /> #}
  </head>
  <body>
    <form method="POST" action="/upload?_csrf={{ ctx.csrf | safe }}" enctype="multipart/form-data">
        title: <input name="title" />
        file: <input name="file" type="file" />
        <button type="submit">Upload</button>
    </form>
  </body>
</html>