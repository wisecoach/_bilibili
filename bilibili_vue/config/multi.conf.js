/**
 * config multi_modules
 */

let importModules = [
  new MultiModule('main',{
    port: 8090,
    statics: ['static_main'],
    proxyTable: {
      '/server_main': getProxyConfig(PROXY_DOMAIN_DEFAULT)
    }
  })
]
