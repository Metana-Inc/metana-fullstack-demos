// Add a proxy to the API backend
const { createProxyMiddleware } = require('http-proxy-middleware');
import { PROXY_HOST, PROXY_PORT } from './src/config.js';
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `${PROXY_HOST}:${PROXY_PORT}`,
    })
  );
};
