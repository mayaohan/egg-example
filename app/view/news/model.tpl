<html>
  <head>
    <title>Hacker News</title>
    {# <link rel="stylesheet" href="/public/css/news.css" /> #}
  </head>
  <body>
    <form>
        name: <input class="name" name="title" />
        age: <input class="age" name="text" />
        <button type="button" class="ax">Upload</button>
    </form>
    <ul class="news-view view">
        {# <li class="item"></li> #}
    </ul>

    <script src="/public/jquery.min.js"></script>
    <script>
            $(function(){
                selectAll()
            })
            function getCsrf() {
                var keyValue = document.cookie.match('(^|;) ?csrfToken=([^;]*)(;|$)');
                return keyValue ? keyValue[2] : null;
            }
            function deletes(e){
                console.log(e)
                $.ajax({
                    url: '/delMenu?_csrf=' + getCsrf(),
                    method: 'POST',
                    data:{id:e},
                    'Content-Type': 'application/json; charset=UTF-8',
                    success: function(result) {
                        console.log(result);
                        selectAll()
                    },
                    error: function(responseStr) {
                        alert("error", responseStr);
                    }
                });
            }
            function edit(obj){
                console.log(obj)
                let param = {
                    id:obj.id,
                    body:{
                        age:25,
                        name:obj.name+'简易更新',
                    }
                }
                $.ajax({
                    url: '/updateMenu?_csrf=' + getCsrf(),
                    method: 'POST',
                    data:param,
                    'Content-Type': 'application/json; charset=UTF-8',
                    success: function(result) {
                        console.log(result);
                        selectAll()
                    },
                    error: function(responseStr) {
                        alert("error", responseStr);
                    }
                });
            }
            function selectAll(){
                $.ajax({
                    url: '/getList?_csrf=' + getCsrf(),
                    method: 'POST',
                    data:{offset:0,limit:10,order_by:'created_at',order:'ASC'},
                    'Content-Type': 'application/json; charset=UTF-8',
                    success: function(result) {
                        console.log(result);
                        $('.news-view').html('')
                        result.data.rows.map(function(obj,idx){
                            $('.news-view').append(
                                `<li class="item">
                                    <span>${obj.id}--------${obj.name}--------${obj.age}------------${obj.updated_at}----</span>
                                    <a onClick="deletes(${obj.id})">删除</a>-----
                                    <a onClick='edit(${JSON.stringify(obj)})'>简易更新</a>
                                </li>`
                            )
                        })
                        

                    },
                    error: function(responseStr) {
                        alert("error", responseStr);
                    }
                });
            }
            $('.ax').click(function(e) {
                e.preventDefault();
                var param = {
                    name:$('.name').val(),
                    age:$('.age').val(),
                    created_at:new Date(),
                    updated_at:new Date()
                }
                $.ajax({
                    url: '/addMenu?_csrf=' + getCsrf(),
                    data: param,
                    method: 'POST',
                    'Content-Type': 'application/json; charset=UTF-8',
                    success: function(result) {
                        if(result.code==0){
                            selectAll()
                        }

                    },
                    error: function(responseStr) {
                        alert("error", responseStr);
                    }
                });
                // 通过 cookie 获取 csrf token
                
            });
    </script>
  </body>
</html>