const template = require('art-template')
const path = require('path')

const views = path.join(__dirname, '03.art')


const html = template(views, { users:[
    { name: '张三', age: 18, gender: '男'},
    { name: '李四', age: 16, gender: '女' },
    { name: '玛丽', age: 16, gender: '女' }]
  }
)
console.log(html)
