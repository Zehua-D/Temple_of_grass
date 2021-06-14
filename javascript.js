var animation = bodymovin.loadAnimation({
    container:document.getElementById('bm'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path:'data.json'
});

//点击某个超链接，就在placeholder处显示该超链接的图片,whichpic是一个元素节点
function showPic(whichpic){
    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src',source);
}
