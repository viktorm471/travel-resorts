var bannerStatus= 1;
var bannerTimer = 3500;

  var startBanner=   setInterval(function start(){
        bannerLoop();
    },bannerTimer)
window.onload = function (){
   
    bannerLoop();
}
window.onresize = function (){
    clearInterval(startBanner)
    startBanner=   setInterval(function start(){
        bannerLoop();
    },bannerTimer)
}
document.getElementById('main-banner').onmouseenter = function(){
    clearInterval(startBanner)
}
document.getElementById('main-banner').onmouseleave = function(){
    startBanner=   setInterval(function start(){
        bannerLoop();
    },bannerTimer)
}
document.getElementById("banbtnright").onclick = function(){
    
    bannerLoop();
}
document.getElementById("banbtnleft").onclick =function(){
    if(bannerStatus==3){
        bannerStatus=1;
    }else{
        bannerStatus+=1;
    }
    bannerLoopBack();
}

function bannerLoop (){
     var bannerWidth = document.getElementById("main-banner");
     bannerWidth= bannerWidth.offsetWidth;
     
    if(bannerStatus === 1){
        document.getElementById('imgban2').style.opacity= "0";
        setTimeout(function(){
        document.getElementById('imgban1').style.right= "0px";
        document.getElementById('imgban2').style.right= `-${bannerWidth}px`;
        document.getElementById('imgban3').style.right= `${bannerWidth}px`;
        },500)
        setTimeout(function(){
            document.getElementById('imgban2').style.opacity= "1";
        },1000)

        bannerStatus=2 
    }
    else if(bannerStatus === 2){
        document.getElementById('imgban3').style.opacity= "0";
        setTimeout(function(){
        document.getElementById('imgban2').style.right= "0px";
        document.getElementById('imgban3').style.right= `-${bannerWidth}px`;
        document.getElementById('imgban1').style.right= `${bannerWidth}px`;
        },500)
        setTimeout(function(){
            document.getElementById('imgban3').style.opacity= "1";
        },1000)
        
        bannerStatus=3 
    }
    else if(bannerStatus === 3){
        document.getElementById('imgban1').style.opacity= "0";
        setTimeout(function(){
        document.getElementById('imgban3').style.right= "0px";
        document.getElementById('imgban1').style.right= `-${bannerWidth}px`;
        document.getElementById('imgban2').style.right= `${bannerWidth}px`;
        },500)
        setTimeout(function(){
            document.getElementById('imgban1').style.opacity= "1";
        },1000)
        
        bannerStatus=1 
    }
    
}
function bannerLoopBack (){
    var bannerWidth = document.getElementById("main-banner")
    bannerWidth= bannerWidth.offsetWidth;
    if(bannerStatus === 1){
        document.getElementById('imgban3').style.opacity= "0";
        setTimeout(function(){
            document.getElementById('imgban1').style.right= "0px";
            document.getElementById('imgban2').style.right= `-${bannerWidth}px`;
            document.getElementById('imgban3').style.right= `${bannerWidth}px`;
        },500)
        setTimeout(function(){
            document.getElementById('imgban3').style.opacity= "1";
        },1000)

        bannerStatus=2 
    }
    else if(bannerStatus === 2){
        document.getElementById('imgban1').style.opacity= "0";
        setTimeout(function(){
            document.getElementById('imgban2').style.right= "0px";
            document.getElementById('imgban3').style.right= `-${bannerWidth}px`;
            document.getElementById('imgban1').style.right= `${bannerWidth}px`;
        },500)
        setTimeout(function(){
            document.getElementById('imgban1').style.opacity= "1";
        },1000)
        
        bannerStatus=3 
    }
    else if(bannerStatus === 3){
        document.getElementById('imgban2').style.opacity= "0";
        setTimeout(function(){
            document.getElementById('imgban3').style.right= "0px";
            document.getElementById('imgban1').style.right= `-${bannerWidth}px`;
            document.getElementById('imgban2').style.right= `${bannerWidth}px`;
        },500)
        setTimeout(function(){
            document.getElementById('imgban2').style.opacity= "1";
        },1000)
        
        bannerStatus=1 
    }
    
}