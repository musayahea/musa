//!DOM

let card1=document.querySelector(".card1");
let card2=document.querySelector(".card2");
let card3=document.querySelector(".card3");
let servicetextContent=document.querySelector(".service-text-content");

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

fadeDown.observe(servicetextContent);

let fadeUp=new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("showfadeup");
            entry.target.classList.remove("hiddenfadeup");
            observer.unobserve(entry.target);
        }
    });
},{
    threshold:0,
    rootMargin:"0px 0px -50px ",
});

fadeUp.observe(card2);

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

fadeLeft.observe(card1);

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

fadeRight.observe(card3);