const Controller = require('./base').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.new.list(page);
    this.logger.warn('asdfasfd')
    await ctx.render('news/list.tpl', { list: newsList });
  }
}

module.exports = NewsController;