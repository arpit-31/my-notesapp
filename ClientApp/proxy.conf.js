const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:10018';

const PROXY_CONFIG = [
  {
    context: [
      "/api/Notes",
   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;

//"/api/*": {
//  "target": "https://localhost:44334",
//    "secure": true,
//      "logLevel": "debug",
//        "pathRewrite": {
//    "^/api": ""
//  },
//  "changeOrigin": true
//}
