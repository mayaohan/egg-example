
const path = require('path');

module.exports = appInfo =>{
    const config = {}
    config.keys = 'abcde'
    config.key='EGG_SESS', // 承载 Session 的 Cookie 键值对名字
    config.maxAge=86400000, // Session 的最大有效时间
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
          '.tpl': 'nunjucks',
        },
    };
    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };

    config.multipart = {
        fileExtensions: [ '.apk','xls' ] // 增加对 apk 扩展名的文件支持
    }
    // cookie安全级别
    config.cookies = {
        sameSite: 'lax',
    }

    config.jsonp = {
        csrf: true,
        callback: 'callback', // 识别 query 中的 `callback` 参数
        limit: 100, // 函数名最长为 100 个字符
        whiteList: /^https?:\/\/test.com\//,//数组字符串或者字符串或者正则
    }

    config.security = {//用户如果使用ctx.redirect方法，需要在应用的配置文件中做如下配置：
        domainWhiteList:['.domain.com'],  // 安全白名单，以 . 开头
    };

    config.uuint = {
        id: 0, // 0-511
        seed: 156015570 // a time
    };

    config.mysql = {
        client: {
          host: '127.0.0.1',
          port: '3306',
          user: 'root',
          password: '123456',
          database: 'test',
        },
    };


    config.robot = {
        ua:[
            /Baiduspider/i,
        ]
    }
    config.compress = {
        threshold: 2048,
    }
    config.middleware = [
        'robot',
        'compress',
        'bodyparser'
    ]

    return config
}
