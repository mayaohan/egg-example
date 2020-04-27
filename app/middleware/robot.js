// options === app.config.robot
module.exports = (options, app) => {
    return async function robotMiddleware(ctx, next) {
      const source = ctx.get('user-agent') || '';
      ctx.logger.info(app.config.env)
      const match = options.ua.some(ua => ua.test(source));
      if (match) {
        ctx.status = 403;
        ctx.message = 'Go away, robot.';
      } else {
        await next();
      }
    }
};