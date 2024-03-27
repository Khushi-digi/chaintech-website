// Selecting elements from the DOM

let menuBar=document.querySelector(".hamburger") // Selecting the hamburger icon
let bar=document.querySelectorAll(".hamburger .line") // Selecting the lines in the hamburger icon
let navBar=document.querySelector(".nav__link")  // Selecting the navigation links container
let flag=0  // Flag variable to toggle the menu

// Adding event listener to the hamburger icon

menuBar.addEventListener("click",()=>{
        // Toggling the menu based on the flag variable

if(flag==0){
    bar.forEach((e)=>{
        e.style.background="gray"
    })
    navBar.style.height="90vh";
    flag=1;  // Set flag to 1 indicating menu is open
}
else{
    bar.forEach((e)=>{
        e.style.background="white"
    })
    flag=0; // Set flag to 0 indicating menu is closed
    menuBar.style.background="none"
    navBar.style.height=0;  // Collapse the navigation menu

}
})
