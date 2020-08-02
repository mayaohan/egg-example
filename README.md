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