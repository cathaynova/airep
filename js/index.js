window.onload = function(){
    var container = document.getElementById("container");
    var list = document.getElementById("list");
    var buttons =document.getElementById("buttons").getElementsByTagName("span");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var index = 1;
    var len = 4;
    var animated =false;
    var interval = 3000;
    var timer;


//            //            制作子菜单，在Mouseover即可显示子菜单
//            var oMenu = document.getElementsByClassName("nav_fir_detail");
//            var oSubmenu = document.getElementsByClassName("nav_sub_detail");
//            //            alert(oMenu.length);
//
//
//
//            function displaySubmenu(i)
//            {
//                setTimeout(function () {
//                    oSubmenu[i].style.display = "block";
//                }, 0)
//            }
//            function hideSubmenu(i)
//            {
//                setTimeout(function () {
//                    oSubmenu[i].style.display = "none";
//                }, 0);
//            }
//            for(var i =0; i<6; i++)
//            {
//                (function(cur){
//                    oMenu[cur+1].onmouseover = function(){
//                        displaySubmenu(cur);
//                    };
//                    oMenu[cur+1].onmouseout = function(){
//                        hideSubmenu(cur);
//                    };
//                })(i)
//            }
////            制作applications图片切换效果
//            var content4Id = document.getElementById("content4");
//            var content4Img = content4Id.getElementsByTagName("img");
////            alert(content4Img.length);
//            for(var i =0; i<content4Img.length;i++)
//            {
//                content4Img[i].onmouseover = function () {
//                    content4Img.src ="images/image1.jpg";
//                }
//            }

//            制作NEWS图片轮播器
    var content5List1 = document.getElementById("content5_list1");
    var content5List2 = document.getElementById("content5_list2");
    var content5Label = document.getElementById("content5_sequence").children;
//            alert(content5Label.length);

    function autoPlayNews(time)
    {
        var index =1;
        timerNews = setInterval(function(){
            if(parseInt(content5List1.style.left) == -900)
            {
                content5List1.style.left = 0+'px';
            }
            content5List1.style.left = parseInt(content5List1.style.left) - 450 +'px';
        }, time);
        timerSubtitle = setInterval(function(){
            if(parseInt(content5List2.style.left) == -900)
            {
                content5List2.style.left = 0+'px';
            }
            content5List2.style.left = parseInt(content5List2.style.left) - 450 +'px';
        }, time);
        timerLabel =setInterval(function () {
            if(index ==1)
            {
                content5Label[0].className = "content5_label";
                content5Label[1].className = "content5_label_on";
                content5Label[2].className = "content5_label";
            }
            else if(index ==2)
            {
                content5Label[0].className = "content5_label";
                content5Label[1].className = "content5_label";
                content5Label[2].className = "content5_label_on";
            }
            else
            {
                content5Label[0].className = "content5_label_on";
                content5Label[1].className = "content5_label";
                content5Label[2].className = "content5_label";
            }
            index++;
            if(index==3)
            {index=0;}
        },time)
    }

    autoPlayNews(3000);

    function animate(offset)
    {
        var left = parseInt(list.style.left)+offset;
        list.style.left = left +"px";
        if(left>-1366){
            list.style.left = -len*1366+"px";
        }
        else if(left<len*(-1366)){
            list.style.left = "-1366px";
        }
    }

    function showButton(){
        for(var i= 0; i<buttons.length; i++){
            if(buttons[i].className == "on"){
                buttons[i].className = "";
                break;
            }
        }
//            var buttons = document.getElementById("buttons").getElementsByTagName("span"); 表明buttons为储存span标签的数组
        buttons[index-1].className = "on";
    }

    function autoplay(){
        timer = setInterval(function(){
                next.onclick();
            }, interval
        );
    }

    function  stopplay(){
        clearTimeout(timer);
    }

    next.onclick = function(){
        var offset = -1366;
        if (index == 4){
            index = 1;
        }
        else{
            index+=1;
        }
        animate(offset);
        showButton();
    }
    prev.onclick = function(){
        var offset = 1366;
        if(index == 0){
            index = 4;
        }
        else {
            index-=1;
        }
        animate(offset);
        showButton();
    }

    for (var i=0; i<buttons.length;i++)    {
        buttons[i].onclick = function(){
            var myIndex = parseInt(this.getAttribute("index"));
            var offset = (myIndex - index)*(-1366);
            animate(offset);
            index = myIndex;
            showButton();
        };
    }

    container.onmouseover = stopplay;
    container.onmouseout = autoplay;
    autoplay();



    var content6_prev = document.getElementById("img_left");
    var content6_next = document.getElementById("img_right");
    var content6_list = document.getElementById("content6_list");
    var content6_interval = 2000;
    var content6_content6 = document.getElementById("content6");

    function content6_animate(offset){
        var content6_left = parseInt(content6_list.style.left) -offset;
        content6_list.style.left = content6_left +"px";
        if (content6_left>0)
        {
            content6_list.style.left = -3600 +'px';
        }
        else if(content6_left <-3600)
        {
            content6_list.style.left = 0;
        }
    }

    function content6_autoplay(){
        content6_timer = setTimeout(function(){
                content6_next.onclick();
                content6_autoplay();
            }, content6_interval
        );
    }
//            function stopplay(){
//                clearTimeout(timer);
//            }
    content6_prev.onclick =function(){
        var offset = -200;
        content6_animate(offset);

    }
    content6_next.onclick = function(){
        var offset= 200;
        content6_animate(offset);

    }
    content6_autoplay();
}

