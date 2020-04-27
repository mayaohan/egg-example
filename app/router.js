// app/router.js
module.exports = app => {
    const { router, controller,jsonp } = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
    router.get('/uploader',controller.uploader.html)
    router.post('/upload',controller.uploader.upload)
    router.get('/ajaxUploader',controller.uploader.ajaxHtml)
    router.post('/ajaxUploader',controller.uploader.ajaxUpload)
    router.post('/ajaxUploader_more',controller.uploader.ajaxUpload_more)
    router.get('/validate',controller.validate.index)
    router.post('/validate',controller.validate.create)
    // router.post('/jsonpDemo',jsonp({callback:'oramp'}),controller.validate.create)//没有实体函数，只是演示jsonp
    
};
