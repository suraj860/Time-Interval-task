
var index = 0;
const img = document.querySelectorAll("img");

//logic for slide show and next button//
var slideShow = ()=>{
   
    for(i=0 ; i<img.length ; i++){
       img[i].style.display="none";
    }

    index++
    if(index>img.length){
        index=1;
    }
    img[index -1].style.display = "block";   
}


//prev button logic//

var pre = ()=>{
    for(i=0 ; i<img.length ; i++){
        img[i].style.display="none";
     }
     if(index===0){
         index=img.length;
     }
     img[index -1].style.display = "block"; 
     index--    
}

let timeing;

function start (){
     timeing = setInterval(slideShow, 2000);
}
start();

function stop(){
    clearInterval(timeing);
}

