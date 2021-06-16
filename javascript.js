
//lottie的行为
var animation = bodymovin.loadAnimation({
    container:document.getElementById('bm'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path:'data.json'
});

//点击某个超链接，就在placeholder处显示该超链接的图片,whichpic是一个元素节点
function showPic(whichpic,titlesReplace){
    var source = whichpic.getAttribute('href');
    var placeholderss = document.getElementById('placeholderss');
    placeholderss.setAttribute('src',source);
    
    var titlesReplace = titlesReplace.getAttribute('title');
    var description = document.getElementById('description');
    description.setAttribute(titlesReplace);
}

//获取body的所有子节点
// function countBodyChildren(){
//     var body_element = document.getElementsByTagName('body')[0];
//     alert(body_element.childNodes.length);
// }

// window.onload = countBodyChildren();