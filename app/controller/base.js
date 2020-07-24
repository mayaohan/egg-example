const Controller = require('egg').Controller;

class BaseController extends Controller {
    // 公共
    async fetchPosts() {
        const ctx = this.ctx;
        // 获取 Session 上的内容
        const userId = ctx.session.userId;
        // const posts = await ctx.service.post.fetch(userId);
        // 修改 Session 的值
        ctx.session.visited = ctx.session.visited ? ++ctx.session.visited : 1;
        ctx.body = {
          success: true,
          posts,
        };
    }
    async deleteSession() {
        this.ctx.session = null;
    }
}

module.exports = {Controller:BaseController};