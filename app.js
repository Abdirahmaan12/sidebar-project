let openBtn = document.querySelector('.open-btn'),
    closeBtn=document.querySelector('.close-btn'),
    sideBar=document.querySelector('.side-bar');


    
openBtn.addEventListener('click',()=>{
    sideBar.classList.toggle("show-side-bar")
})

closeBtn.addEventListener('click',()=>{
    sideBar.classList.remove("show-side-bar")
})