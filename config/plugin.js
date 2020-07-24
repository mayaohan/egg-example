
const path = require('path');
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
};

exports.ua = {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/orage'),
};
// 参数校验
exports.validate = {
    enable: true,
    package: 'egg-validate',
};
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};

exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};

exports.uuint = {
    enable: true,
    package: 'egg-uuid-int'
};