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

  async list(page = 2) {
    try{
      
      await this.app.mysql.query(`CREATE TABLE user_tbl( 
        userid INT NOT NULL AUTO_INCREMENT, 
        runoob_title VARCHAR(100) NOT NULL, 
        runoob_author VARCHAR(40) NOT NULL, 
        submission_date DATE, 
        PRIMARY KEY ( userid ))ENGINE=InnoDB DEFAULT CHARSET=utf8;`)
      return []
    }catch(e){
      this.logger.warn(e)
      // const uuid = this.app.uuint.uuid()
      // this.logger.warn(uuid)
      await this.app.mysql.insert('user_tbl',{
        // runoob_id:uuid,
        runoob_title:'中国人',
        runoob_author:'safsdf',
        submission_date:new Date()
      })
      let list = await this.app.mysql.query(
        `
        select runoob_title as title,runoob_author as url,submission_date as time from user_tbl t where userid > ?
        `,page
      )
      const jane = await this.app.model.User.create({ name: "Jane",age:11 });
      jane.name = "Ada";
      // 数据库中的名称仍然是 "Jane"
      await jane.save();
      this.logger.warn(jane)
      return list
      // return [
      //   { id: 1, title: 'this is news 1', url: '/news/1',time:new Date()},
      //   { id: 2, title: 'this is news 2', url: '/news/2',time:new Date()}
      // ]
    }
  }
}

module.exports = NewsService;