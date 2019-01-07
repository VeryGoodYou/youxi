$(".top").click(function(){
    $('html,body').animate({scrollTop:0},1000)
});
/*
var tabs = document.getElementsByClassName('tab-head')[0].getElementsByTagName('li'),
    contents = document.getElementsByClassName('tab-content')[0].getElementsByTagName('div');

(function changeTab(tab) {
    for(var i = 0, len = tabs.length; i < len; i++) {
        tabs[i].onclick = showTab;
    }
})();

function showTab() {
    for(var i = 0, len = tabs.length; i < len; i++) {
        if(tabs[i] === this) {
            tabs[i].className = 'selected';
            contents[i].className = 'show';
        } else {
            tabs[i].className = '';
            contents[i].className = '';
        }
    }
}
*/

var men = document.getElementById('menu-1');
var img = document.getElementById('qie').getElementsByTagName('img');
for (var i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        men.src = this.src;
    }
}

var fbUls =document.getElementById("oul");
var fbLis = fbUls.getElementsByTagName("li");
var aDivs = document.getElementsByClassName("the");
for(var i = 0,val=fbLis.length;i<val;i++){
    fbLis[i].index = i; //存放当前元素的下标
    fbLis[i].onclick = function(){
        for(var j=0; j< fbLis.length; j++){
            fbLis[j].className="";
            aDivs[j].style.display = "none";
        }
        //给当前点击的元素添加活跃标记
        this.className="liactive";
        //显示对应的模块内容
        aDivs[this.index].style.display = "block";
    };
}

var shi = document.getElementById('shi');
var she = document.getElementById('shi-1').getElementsByTagName('img');
for (var i = 0; i < she.length; i++){
    she[i].onclick = function () {
        shi.src = this.src;
    }
}
shi.onclick = function () {
    window.open(this.src);
}

var sha = document.getElementById('div2').getElementsByTagName('img');
for (var c = 0; c<sha.length;c++){
    sha[c].onclick = function () {
        window.open(this.src);
    }
}

$(function(){
    $('a').click(function(){
        //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
        $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top -50 )},1000);
    });
});

var sub = document.getElementById('to').getElementsByTagName('img');
for (var q = 0; q < sub.length; q++) {
    sub[q].onclick = function () {
        window.open(this.src);
    }
}