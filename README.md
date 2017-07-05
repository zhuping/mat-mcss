# mat-mcss

## Installation

```sh
npm install --save-dev mat-mcss
```

## Basic Usage

```javascript
var mat   = require('mat')
var mcss = require('mat-mcss')
var autoprefixer = require('mat-autoprefixer')

mat.task('mcss', function () {
  mat.url([/.*\.css/])
    .rewrite([
      [/\.css/g, '.mcss']
    ])
    .use(mcss())
    .use(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
})
```
## Options

See the Mcss [options](https://github.com/leeluolee/mcss).
