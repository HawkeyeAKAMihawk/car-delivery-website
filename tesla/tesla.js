const main= document.querySelector(".main1");

const menu =document.querySelector(".menu");
const cross=document.querySelector(".fa-xmark");
const blurs=document.querySelector(".blur");
const hdns = document.querySelector(".hdn-side");

menu.addEventListener("click",()=>{
    blurs.classList.add("active");
    hdns.classList.add("active");
});

cross.addEventListener("click",()=>{
    blurs.classList.remove("active");
    hdns.classList.remove("active");
});

// ----------------------------------

const h1 =document.querySelector(".head1");
const h2 =document.querySelector(".head2");
const h3 =document.querySelector(".head3");
const h4 =document.querySelector(".head4");
const h5 =document.querySelector(".head5");
const h6 =document.querySelector(".head6");
const h7 =document.querySelector(".head7");

const l1=document.querySelector(".login1");
const l2=document.querySelector(".login2");
const l3=document.querySelector(".login3");
const l4=document.querySelector(".login4");
const l5=document.querySelector(".login5");
const l6=document.querySelector(".login6");
const l7=document.querySelector(".login7");

main.addEventListener("scroll", ()=>{
    console.log(main.scrollTop);
    const unit = main.scrollTop;

    if(unit ==0 && unit<100){
        h1.classList.remove("hide");
        l1.classList.remove("hide");
    }
    else{
        h1.classList.add("hide");
        l1.classList.add("hide");
    }
    if(unit >700 && unit<800){
        
        h2.classList.add("active");
        l2.classList.add("active");
    }
    else{
        h2.classList.remove("active");
        l2.classList.remove("active");
    }
    if(unit >1400 && unit<1500){
        
        h3.classList.add("active");
        l3.classList.add("active");
    }
    else{
        h3.classList.remove("active");
        l3.classList.remove("active");
    }
    if(unit >2100 && unit<2200){
        
        h4.classList.add("active");
        l4.classList.add("active");
    }
    else{
        h4.classList.remove("active");
        l4.classList.remove("active");
    }
    if(unit >2900 && unit<3000){
        
        h5.classList.add("active");
        l5.classList.add("active");
    }
    else{
        h5.classList.remove("active");
        l5.classList.remove("active");
    }
    if(unit >3600 && unit<3700){
        
        h6.classList.add("active");
        l6.classList.add("active");
    }
    else{
        h6.classList.remove("active");
        l6.classList.remove("active");
    }
    if(unit >4300 && unit<4500){
        
        h7.classList.add("active");
        l7.classList.add("active");
    }
    else{
        h7.classList.remove("active");
        l7.classList.remove("active");
    }


})