let metadata = require('./library-metadata.json')

export default {
  input: '.tmp/src/module-a.module.ngfactory.js',
  dest: './library/' + metadata.name + '.umd.js',
  format: 'umd',
  name: metadata.name,
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
  },
}
