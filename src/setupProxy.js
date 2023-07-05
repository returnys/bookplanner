const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log(app);
  app.use(
    createProxyMiddleware("/api", {
      target: "http://192.168.0.144:5002",
      changeOrigin: true,
    }),
  );
};
