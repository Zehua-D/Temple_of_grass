//网页前的开场动画
// window.onload = function(){
//     $('#gif').fadeOut();
//     $('#preloader').delay(450).fadeOut('slow');
// }
alert("no");

var animation = bodymovin.loadAnimation({
    container:document.getElementById('bm'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path:'data.json'
});