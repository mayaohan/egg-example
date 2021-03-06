const Controller = require('./base').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    this.logger.warn(`环境变量：${this.app.config.env}`)
    const newsList = await ctx.service.new.list(page);
    await ctx.render('news/list.tpl', { list: newsList });
  }
  async get() {
    const { uuid } = this.ctx.session;

    if (!uuid) {
        ctx.body = {
            code: 401,
            message: 'unauthorized',
        };
        return;
    }

    const userInfo = await this.ctx.service.user.getUserById({ id: uuid });

    if (userInfo) {
        ctx.body = {
            code: 200,
            message: 'success',
            data: userInfo
        }
    } else {
        ctx.body = {
            code: 500,
            message: 'error',
        }
    }
  }

  async demo() {
    const ctx = this.ctx;
    await ctx.render('news/model.tpl');
  }
  async add(){
    await this.service.redis.destroy('goodsList');
    const body = this.ctx.request.body
    const res = await this.ctx.service.demo.addMenu(body)
    this.ctx.body = res
    return;
  }
  
  async getDemo(){
    const body = this.ctx.request.body
    console.time() // 开始计时
    let goodsList = await this.service.redis.get('goodsList');
    if (!goodsList) {
      console.log('没有redis缓存')
      goodsList  = await this.ctx.service.demo.getMenuList(body)
      this.service.redis.set('goodsList', goodsList);
      this.ctx.body = goodsList
    }
    this.ctx.body = goodsList;
    console.timeEnd() // 打印时长
    return;
  }

  async delMenu(){
    await this.service.redis.destroy('goodsList');
    const body = this.ctx.request.body
    const res = await this.ctx.service.demo.deletes(body.id)
    this.ctx.body = res
    return;
  }
  async updateMenu(){
    await this.service.redis.destroy('goodsList');
    const body = this.ctx.request.body
    this.logger.warn(body)
    const res = await this.ctx.service.demo.updateMenu(body)
    this.ctx.body = res
    return;
  }
}

module.exports = NewsController;