# 初始化表
# npx sequelize migration:generate --name=init-users

# 升级数据库
# npx sequelize db:migrate
# 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
# npx sequelize db:migrate:undo
# 可以通过 `db:migrate:undo:all` 回退到初始状态
# npx sequelize db:migrate:undo:all
# 数据库映射到model 
# npm run dbload
# 初始化配置文件
# npx sequelize init