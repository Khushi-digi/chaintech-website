let menuBar=document.querySelector(".hamburger")
let bar=document.querySelectorAll(".hamburger .line")
let navBar=document.querySelector(".nav__link")
let flag=0

menuBar.addEventListener("click",()=>{
if(flag==0){
    bar.forEach((e)=>{
        e.style.background="gray"
    })
    navBar.style.height="90vh";
    flag=1;
}
else{
    bar.forEach((e)=>{
        e.style.background="white"
    })
    flag=0;
    menuBar.style.background="none"
    navBar.style.height=0;

}
})