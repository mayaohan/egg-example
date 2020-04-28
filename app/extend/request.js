module.exports = {
    get foo() {
      return this.get('x-request-foo');
    },
};