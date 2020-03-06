const template = require('art-template')
const path = require('path')

const views = path.join(__dirname, '02.art')


const html = template(views, { name: '张三', age: 16 })
console.log(html)