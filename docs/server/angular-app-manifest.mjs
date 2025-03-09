
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sydney-advanced-endo/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-5OCLPIVI.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 96213, hash: '0ee4ebd19acbaec92a287cb63a7ebc6c0989c2021d059d28e597952998b157da', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 37576, hash: 'ca2792e203a0e175198f537e021ceae966f4a7c392fabf205f8362dd843916d5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-75BB3TAX.css': {size: 83629, hash: 'lzcAf9fp66U', text: () => import('./assets-chunks/styles-75BB3TAX_css.mjs').then(m => m.default)}
  },
};
