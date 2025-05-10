//!DOM

let button=document.querySelector(".menu-div");
let menuBar=document.querySelector(".menu-bar");
let ismenuOpen=false;
let isCross=false;
let bar=document.querySelector(".fa-bars");
let xmark=document.querySelector(".fa-xmark");

//!Responsive Menu Bar

button.addEventListener("click",()=>{
    if(ismenuOpen){
        menuBar.style.top="-250px";
        xmark.style.display="none";
        bar.style.display="block";
    }
    else{
        menuBar.style.top="0";
        xmark.style.display="block";
        bar.style.display="none";
    }
    ismenuOpen=!ismenuOpen;
});