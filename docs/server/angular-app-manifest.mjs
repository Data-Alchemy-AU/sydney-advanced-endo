
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sydney-advanced-endo/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-E5SI7OEM.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 96213, hash: 'd2dbddb5ba55882cf9de67f66f9dd91118a98bbf8b59144323bed9338c6e5095', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 37576, hash: 'd37af8f97a45929de9cffc71373b65d35e0e628c151da10b2f833115d1599583', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-75BB3TAX.css': {size: 83629, hash: 'lzcAf9fp66U', text: () => import('./assets-chunks/styles-75BB3TAX_css.mjs').then(m => m.default)}
  },
};
