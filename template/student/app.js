const http = require("http") //引入http模块
// const mongoose = require('mongoose') //引入 mongoose
// //连接数据库
// mongoose.connect('mongodb://localhost/playground', { useUnifiedTopology: true})
// .then(()=> console.log('数据库连接成功'))
// .catch(()=> console.log('数据库连接失败'))

require('./model/connect')

const getRouter = require('router'); //引入router 模块
const router = getRouter() // 获取路由对象
router.get('/test', (req, res) => {
    res.end('test')
})


const app = http.createServer() // 创建网站服务器
// 当客户端访问服务器端的时候
app.on('request',(req,res)=>{
    // res.end('ok')
    router(req,res, ()=>{
        console.log(1)
    })
})
app.listen(80)
console.log('服务器启动成功')