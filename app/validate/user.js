module.exports = app =>{

    let { validator } = app;
  
    // 校验用户名是否正确
    validator.addRule('userName', (rule, value)=>{
      console.log(rule);
      if (/^\d+$/.test(value)) {
        return "用户名应该是字符串";
      }
      else if (value.length < 3 || value.length > 10) {
        console.log("用户名的长度应该在3-10之间");
      }
    });
  
    // 添加自定义参数校验规则
    validator.addRule('123', (rule, value) => {
      if (value !== '123'){
        return 'must be 123';
      }
    });
};