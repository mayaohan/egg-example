const path = require('path');

module.exports = app => {

  // 你的其它代码，balabala

  // 加载所有的校验规则
  const directory = path.join(app.config.baseDir, 'app/validate');
  app.loader.loadToApp(directory, 'validate');
}
