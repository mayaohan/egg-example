const Controller = require('./base').Controller;

class ValidateController extends Controller {
    async create() {
        // 校验参数
        // 如果不传第二个参数会自动校验 `ctx.request.body`
        
        const ctx = this.ctx;
        try {
            ctx.validate({
                title: { type: '123' },
                content: { type: 'string' },
            });
            ctx.body = { success: true };
        } catch (err) {
            ctx.logger.warn(err.errors[0]);
            ctx.body = { success: false };
            return;
        }
    }
    async index(){
        await this.ctx.render('news/validate.tpl');
    }
};

module.exports = ValidateController;