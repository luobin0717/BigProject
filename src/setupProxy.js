const proxy = require("http-proxy-middleware");
// console.log(1);
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://47.100.56.28",
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
  // app.use(
  //   proxy("/daxun", {
  //     target: "http://www.daxunxun.com",
  //     changeOrigin: true,
  //     pathRewrite: {
  //       "^/daxun": ""
  //     }
  //   })
  // );
};