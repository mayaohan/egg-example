
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
    config.cluster = {
        listen: {
          path: '',
          port: 8000,
          hostname: '0.0.0.0',
        }
    };

    
    config.redis = {
        client: {
            port: 6379,
            host: 'rd',
            password: '', 
            db: 0
        }, 
    }  
    // config.sequelize = {
    //     dialect: 'mysql',
    //     host: '127.0.0.1',
    //     port: 3306,
    //     database: 'test',
    // };
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
          port: '3307',
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

    config.httpclient = {
        // 是否开启本地 DNS 缓存，默认关闭，开启后有两个特性
        // 1. 所有的 DNS 查询都会默认优先使用缓存的，即使 DNS 查询错误也不影响应用
        // 2. 对同一个域名，在 dnsCacheLookupInterval 的间隔内（默认 10s）只会查询一次
        enableDNSCache: false,
        // 对同一个域名进行 DNS 查询的最小间隔时间
        dnsCacheLookupInterval: 10000,
        // DNS 同时缓存的最大域名数量，默认 1000
        dnsCacheMaxLength: 1000,
      
        request: {
          // 默认 request 超时时间
          timeout: 3000,
        },
      
        httpAgent: {
          // 默认开启 http KeepAlive 功能
          keepAlive: true,
          // 空闲的 KeepAlive socket 最长可以存活 4 秒
          freeSocketTimeout: 4000,
          // 当 socket 超过 30 秒都没有任何活动，就会被当作超时处理掉
          timeout: 30000,
          // 允许创建的最大 socket 数
          maxSockets: Number.MAX_SAFE_INTEGER,
          // 最大空闲 socket 数
          maxFreeSockets: 256,
        },
      
        httpsAgent: {
          // 默认开启 https KeepAlive 功能
          keepAlive: true,
          // 空闲的 KeepAlive socket 最长可以存活 4 秒
          freeSocketTimeout: 4000,
          // 当 socket 超过 30 秒都没有任何活动，就会被当作超时处理掉
          timeout: 30000,
          // 允许创建的最大 socket 数
          maxSockets: Number.MAX_SAFE_INTEGER,
          // 最大空闲 socket 数
          maxFreeSockets: 256,
        },
      };

    return config
}