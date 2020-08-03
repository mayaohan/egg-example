# 项目包含
 egg初始简单（不含自定义框架）工程
 
 mysql基于sequelize的简单增删改查
 
 redis简单(不合理，只是演示)数据缓存
 
 简单上传文件功能
 
# 项目部署
项目基于Docker部署，请确保你的电脑上已经安装了docker切能够正常运行
部署命令：npm run docker-build ,部署成功后，就可以在8080端口上查看项目了，如果有特殊需求，请自主修改docker-compose.yml配置文件以达到目的


# 常用命令走一波

 初始化表 init-users为参数，初始化后编辑./database/migrations/时间戳-init-users.js,然后可以通过以下命令把它创建到DB里
 npx sequelize migration:generate --name=init-users
 升级数据库 已经有成型的./database/migrations/时间戳-xxx.js，可以通过此命令初始化数据库
 npx sequelize db:migrate
 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
 npx sequelize db:migrate:undo
 可以通过 `db:migrate:undo:all` 回退到初始状态
 npx sequelize db:migrate:undo:all
 数据库映射到model egg-sequelize-auto自带功能，把数据库表映射到./app/model
 npm run dbload
 初始化配置文件 工程初始化建设，详见egg-sequelize文档
 npx sequelize init

# Docker基础命令
docker images        //查看本地镜像

docker ps -a         //查看所有容器

docker ps            //查看当前有哪些容器正在运行

docker rmi 镜像名称/镜像ID    删除镜像

docker rm 容器名称/容器ID     删除容器（删除前必须先停止容器的运行）

docker start 容器名称/容器ID      启动一个容器

docker restart 容器名称/容器ID     重启一个容器

docker stop 容器名称/容器ID     停止一个在运行的容器

docker run -d -p 8081:8080 --name tomcat01 tomcat 利用镜像创建一个容器

-d: 在后台运行

-p:映射端口号 这里将tomcat01的端口8080映射到宿主机的8081端口

--name: 为容器取名字

tomcat: 本地镜像仓库的镜像 

ctrl+d 退出容器且关闭,

ctrl+p+q 退出容器但不关闭,

docker exec -it 容器名称/容器ID /bin/bash：进入容器

docker的阿里加速器 https://gn2chbms.mirror.aliyuncs.com

docker实时debugger https://zhuanlan.zhihu.com/p/33365859


portainer安装
docker run -d -p 9000:9000
--restart=always
-v /var/run/docker.sock:/var/run/docker.sock
--name prtainer-test
docker.io/portainer/portainer
