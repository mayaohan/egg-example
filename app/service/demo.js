const Service = require('egg').Service;
const {SUCCESS,ERROR} = require('../utils/response')
class NewsService extends Service {
    /**
   * request hacker-news api
   * @param {Number} id - Api name
   * @return {Promise} response.data
   */
    async getMenu(id){
        try{
            const res = await this.ctx.model.Menulist.findByPk(id)
            this.ctx.status = 200;
            return res
        }catch(error){
            this.ctx.status = 500;
            throw(error)
        }
    }

    async getMenuList({offset=1,limit=10,order_by='created_at',order='DESC'}){
        const option = {
            offset:0,
            limit:parseInt(limit),
            order:[
                [order_by,order]
            ]
        }
        this.logger.warn(option)
        try{
            const res = await this.ctx.model.Menulist.findAndCountAll(option)
            if(!res){
                this.ctx.status = 400
                return Object.assign(ERROR,{
                    msg:"not fount in Menulist"
                })
            }else{
                this.ctx.status = 200;
                return Object.assign(SUCCESS,{
                    data:res
                })
            }
        }catch(error){
            this.ctx.status = 500;
            throw(error)
        }
    }

    async addMenu(model){
        try{
            const res = await this.ctx.model.Menulist.create(model)
            if(!res){
                this.ctx.status = 400
                // this.logger.warn(`返回数据：`,res)
                return Object.assign(ERROR,{
                    msg:"fail"
                })
            }else{
                // this.logger.warn(`返回数据：`,res)
                this.ctx.status = 200;
                return Object.assign(SUCCESS,{
                    data:res
                })
            }
        }catch(error){
            this.ctx.status = 500;
            throw(error)
        }
    }

    async updateMenu({id,body}){
        try{
            const res = await this.getMenu(id)
            const ret = await res.update(body)
            this.ctx.status = 200
            return Object.assign(SUCCESS,{
                data:ret
            })
        }catch(error){
            this.ctx.status = 500;
            throw(error)
        }
    }

    async deletes(id){
        try{
            const res = await this.getMenu(id)
            const ret = await res.destroy()
            this.ctx.status = 200
            return Object.assign(SUCCESS,{
                data:ret
            })
        }catch(error){
            this.ctx.status = 500;
            throw(error)
        }
    }
}

module.exports = NewsService;