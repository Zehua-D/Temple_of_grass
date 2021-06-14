//事件类型type，因为是字符串，所以也经常被叫做事件名称
//事件目标，事件目标是一个对象，一个事件必须明确它的类型type和目标target，比如window对象上发生了load事件，注册一个事件，window就是事件目标
//事件处理程序/事件监听器， 一个函数，负责处理或响应事件，当事件处理程序被某个对象/某个事件目标调用时，我们说浏览器触发了该事件


//事件对象，与特定事件相关联的对象，比如，与鼠标事件相关的事件对象有鼠标指针的坐标；与键盘事件相关的事件对象包含被按下的键和按住不放的修饰键的信息。重要的是这种事件对象的存在本身








//设置window的onload属性为一个函数
//函数是事件处理程序，意思是这个函数会在窗口加载完成时调用

window.onload = function(){
//调用formshipping
let form = document.querySelector("formshipping");

//form
form.onsubmit = function(event){
    if (!isFormValid(this)){
        event.preventDefault();
    }
}

}

var message = 100;
var year = 30;
message += year;
alert(message);

function Temp(temp){
var result = temp - 32;
result = result / 1.8;
return result;
}
alert(Temp(50));

var t = document.getElementById("t");
var t1 = t.getElementsByTagName("tr");
alert(t1);

