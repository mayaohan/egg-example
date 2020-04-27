const Service = require('egg').Service;

class NewsService extends Service {
    /**
   * request hacker-news api
   * @param {Number} page - Api name
   * @return {Promise} response.data
   */
//   async list(page = 1) {
//     // read config
//     const { serverUrl, pageSize } = this.config.news;

//     // use build-in http client to GET hacker-news api
//     const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
//       data: {
//         orderBy: '"$key"',
//         startAt: `"${pageSize * (page - 1)}"`,
//         endAt: `"${pageSize * page - 1}"`,
//       },
//       dataType: 'json',
//     });

//     // parallel GET detail
//     const newsList = await Promise.all(
//       Object.keys(idList).map(key => {
//         const url = `${serverUrl}/item/${idList[key]}.json`;
//         return this.ctx.curl(url, { dataType: 'json' });
//       })
//     );
//     return newsList.map(res => res.data);
//   }

  list(page = 1) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve([
            { id: 1, title: 'this is news 1', url: '/news/1',time:new Date()},
            { id: 2, title: 'this is news 2', url: '/news/2',time:new Date()}
          ]);
        }, 300);
    });
  }
}

module.exports = NewsService;
