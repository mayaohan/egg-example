const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
        interval: '1m', // 1 分钟间隔
        /**
         * @param{worker} 每台只有一个worker执行，all
         * @param{all} 每台机器每个worker都执行
         */
        type: 'all',
        // 值得顺序： week month day hour minute second=>周几 几月 几日 小时 分钟 秒
        // 每三小时准点执行一次
        // cron: '0 0 */3 * * *',
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    try{
        const res = await this.ctx.curl('http://www.api.com/cache', {
            dataType: 'json',
        });
        console.log(res)
        this.ctx.app.cache = res.data;
    }catch(e){
        this.logger.error(new Error('测试定时任务'))
    }
    
  }
}

module.exports = UpdateCache;