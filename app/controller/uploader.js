const Controller = require('./base').Controller;
const fs = require('mz/fs');
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const awaitReadStream = require('await-stream-ready').read;
const awaitWriteStream = require('await-stream-ready').write;

class UploaderController extends Controller {
  async html() {
    await this.ctx.render('news/uploader.tpl');
  }
  async ajaxHtml() {
    await this.ctx.render('news/ajaxUploader.tpl');
  }
  async upload() {
    
    const { ctx } = this;
    ctx.logger.debug('debug info');
    ctx.logger.info('some request data: %j', ctx.request.body);
    ctx.logger.warn('WARNNING!!!!');
    const stream = await ctx.getFileStream();
    try {
        const target = path.join(this.config.baseDir, 'app/public/uploads', stream.filename);
        const writeStream = fs.createWriteStream(target);
        await awaitWriteStream(stream.pipe(writeStream));
    } finally {
      await sendToWormhole(stream);
    }

    ctx.body = {
      requestBody: stream,
    };
  }

  async ajaxUpload() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    console.log(stream)
    try {
        const target = path.join(this.config.baseDir, 'app/public/uploads', stream.filename);
        const writeStream = fs.createWriteStream(target);
        await awaitWriteStream(stream.pipe(writeStream));
    } finally {
      await sendToWormhole(stream);
    }
    this.ctx.body = {
        code:0,
        masg:'success!',
        data:stream
    };
  }

    async ajaxUpload_more() {
        const { ctx } = this;
        let parts = ctx.multipart({ autoFields: true });
        let files = [];               
        let stream;
        while ((stream = await parts()) != null) {
            if (!stream.filename) {          
                break;
            }       
            const target = path.join(this.config.baseDir, 'app/public/uploads', stream.filename);
            console.log(target)
            const writeStream = fs.createWriteStream(target);
            await awaitWriteStream(stream.pipe(writeStream));
            files.push(
                {
                    filename:stream.filename,
                    path:target
                }
            )
        }
        this.service._ctx.req.on('data', chunk => {
            console.log(chunk)
        });
        // ctx.request.on('end', () => {
        //     console.log('------end')
        // })
        this.ctx.body = {
            code:0,
            masg:'success!',
            data:files
        };
    }
}

module.exports = UploaderController;