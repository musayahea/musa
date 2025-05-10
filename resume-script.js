//!DOM

let tableInfo=document.querySelectorAll(".table-info");
let tableButton=document.querySelectorAll(".table-button");
let resumeTextContent=document.querySelector(".resume-text-content");
let table=document.querySelector(".table");

//! Button Border Effect

tableButton.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        tableButton.forEach((btn,idx)=>{
            btn.style.border="3px solid #535c68";
        }
    );
        btn.style.border="3px solid var(--commonColor)";
    });
});

//! Change Content

tableButton.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const target=btn.getAttribute("data-target");

        tableInfo.forEach((tbl)=>{
            tbl.style.display="none";
        });

        const selectedDiv=document.querySelector(`.table-info[data-id="${target}"]`);

        if(selectedDiv){
            selectedDiv.style.display="block";
        }
    });
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

fadeDown.observe(resumeTextContent);

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

fadeLeft.observe(table);

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

tableInfo.forEach((tbl)=>{
    fadeRight.observe(tbl);
});