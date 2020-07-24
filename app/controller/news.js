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
    const body = this.ctx.request.body
    const res = await this.ctx.service.demo.addMenu(body)
    this.ctx.body = res
    return;
  }
  
  async getDemo(){
    const body = this.ctx.request.body
    const res = await this.ctx.service.demo.getMenuList(body)
    this.ctx.body = res
    return;
  }

  async delMenu(){
    const body = this.ctx.request.body
    const res = await this.ctx.service.demo.deletes(body.id)
    this.ctx.body = res
    return;
  }
  async updateMenu(){
    const body = this.ctx.request.body
    this.logger.warn(body)
    const res = await this.ctx.service.demo.updateMenu(body)
    this.ctx.body = res
    return;
  }
}

module.exports = NewsController;