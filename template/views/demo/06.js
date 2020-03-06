const template = require('art-template')
const dateFormat = require('dateformat')
const path = require('path')
const views = path.join(__dirname, '06.art')

//导入模板变量 dateFormat
template.defaults.imports.dateFormat = dateFormat

const html = template(views, { time: new Date() })
console.log(html)
