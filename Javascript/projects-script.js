//!DOM

const rightArrow=document.querySelector(".arrow-right");
const leftArrow=document.querySelector(".arrow-left");
const portfolioContent=document.querySelector(".portfolio-content");
const portfolioDetail=document.querySelectorAll(".portfolio-detail");
const imageItems=document.querySelectorAll(".image-items");

//!Carousel

let index=0;
const activePortfolio=()=>{
    const imageSlide=document.querySelector(".image-slide");
    const portfolioDetails=document.querySelectorAll(".portfolio-detail");

    imageSlide.style.transform=`translateX(calc(${index * -100}% - ${index*2}rem))`;
    portfolioDetails.forEach((detail)=>{
        detail.classList.remove("active");
    });
    portfolioDetails[index].classList.add("active");
};

rightArrow.addEventListener("click",()=>{
    if(index<1){
        index++;
        leftArrow.classList.remove("disabled");
    }

    else{
        index=2;
        rightArrow.classList.add("disabled");
    }

    activePortfolio();
});

leftArrow.addEventListener("click",()=>{
    if(index>1){
        index--;
        rightArrow.classList.remove("disabled");
    }

    else{
        index=0;
        leftArrow.classList.add("disabled");
    }

    activePortfolio();
});

//!Animation

let fadeDown=new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("showfadedown");
            entry.target.classList.remove("hiddenfadedown");
            observer.unobserve(entry.target);
        }
    });
},{
    threshold:0,
    rootMargin:"0px 0px -50px ",
});

fadeDown.observe(portfolioContent);

let fadeLeft=new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("showfadeleft");
            entry.target.classList.remove("hiddenfadeleft");
            observer.unobserve(entry.target);
        }
    });
},{
    threshold:0,
    rootMargin:"0px 0px -50px ",
});

portfolioDetail.forEach((p)=>{
    fadeLeft.observe(p);
});

let fadeRight=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("showfaderight");
            entry.target.classList.remove("hiddenfaderight");
            observer.unobserve(entry.target);
        }
    });
},{
    threshold:0,
    rootMargin:"0px 0px -50px ",
});

imageItems.forEach((img)=>{
    fadeRight.observe(img);
});