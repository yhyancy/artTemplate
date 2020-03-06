const template = require('art-template')
const dateFormat = require('dateformat')
const path = require('path')
//onst views = path.join(__dirname, '07.art')

//导入模板变量 dateFormat
template.defaults.imports.dateFormat = dateFormat

//设置模板根目录
template.defaults.root = path.join(__dirname)
//const html = template('07.art', { time: new Date() })

//配置模板的默认后缀
template.defaults.extname = '.art'  //也可以写其他 后缀
const html = template('07', { time: new Date() })
console.log(html)