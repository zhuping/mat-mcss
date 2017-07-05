var mcss = require('mcss')
var path = require('path')
var normalize = path.normalize
var resolve = path.resolve
var dirname = path.dirname
var join = path.join

function comcss(opts) {
  return function (cb) {
    mcss(opts).translate()
      .done(function(res) {
        cb(null, res)
      })
      .fail(function(err) {
        return cb(err)
      })
  }
}

function Mcss(opts) {
  return function *mcss (next) {
    yield next

    var body = this.body.toString()

    if (body == 'Not Found') {
      throw new Error('路径：' + this.path + ' 对应的文件没有找到')
    }

    var path = this.path
    var root = this.app.root
    root = normalize(resolve(root))
    path = normalize(join(root, path))

    opts = Object.assign({
      filename: path
    }, opts)

    this.body = yield comcss(opts)
    this.type = 'text/css'
  }
}

module.exports = Mcss