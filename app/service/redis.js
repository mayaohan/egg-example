const Service = require('egg').Service;
class RedisService extends Service {
  // 设置
    async set(key, value, seconds) {
        let { redis } = this.app;
        value = JSON.stringify(value);
        if(!seconds){
            await redis.set(key, value);
        }else{
            // 设置有效时间
            await redis.set(key, value, 'EX', seconds);
        }
    }
    // 获取
    async get(key) {
        let { redis } = this.app;
        let data = await redis.get(key);
        if (!data) return;
        data = JSON.parse(data);
        return data;
    }
    // 清空redis
    async flushall() {
        let { redis } = this.app;
        redis.flushall();
        return;
    }
    // 删除
    async destroy(key) {
        let res = await this.get(key)
        if(res){
            let del = await redis.del(key)
            return del
        }
    }
}
module.exports = RedisService;