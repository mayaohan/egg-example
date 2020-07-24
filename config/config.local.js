module.exports = {
    sequelize: {
        // 数据库类型
        dialect: 'mysql',
        // 数据库名
        database: 'development',
        // 数据库IP和端口
        host: '127.0.0.1',
        port: '3306',
        // 数据库连接的用户和密码
        username: 'root',
        password: '123456',
        // 是否自动进行下划线转换（这里是因为DB默认的命名规则是下划线方式，而我们使用的大多数是驼峰方式）
        underscored: true,
        // 时区，sequelize有很多自动时间的方法，都是和时区相关的，记得设置成东8区（+08:00）
        timezone: '+08:00',
        define: {
            freezeTableName: true, // 强制表名称等于模型名称
            timestamps: false,//禁用时间戳
            underscored: true,
            charset:'utf8mb4',
            dialectOptions: {
                // charset: "utf8mb4",
                collate: "utf8_general_ci",//"utf8mb4_unicode_ci",
                // supportBigNumbers: true,
                // bigNumberStrings: true
            },
        },
        
    },
}