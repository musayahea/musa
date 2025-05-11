//!DOM

let contactHeading=document.querySelector(".contact-heading");
let socialContact=document.querySelector(".social-contact");
let contactForm=document.querySelector(".contact-form");
let card1=document.querySelector(".contcard1");
let card2=document.querySelector(".contcard2");
let card3=document.querySelector(".contcard3");

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

fadeDown.observe(contactHeading);

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

fadeLeft.observe(socialContact);
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

fadeRight.observe(contactForm);
fadeRight.observe(card3);

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