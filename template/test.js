var data = {
    title: '标签',
    list: ['喜剧', '爱情', '动作', '科幻'],
    isAdmin: true
}
var html = template('data-tpl', data)
document.getElementById('content').innerHTML = html