function showSidebar(){
    const sidebar = document.querySelector ('.sidebar')
    sidebar.style.display = 'flex'
   
};
function hideSideBar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display= 'none'
}


const navEl = document.querySelector('.navbar');
window.addEventListener('scroll' , () =>{
    if(window.scrollY >= 56){
        navEl.classList.add('navbar-scrolled');
    }else if (window.scrollY < 56){
        navEl.classList.remove('navbar-scrolled');
    }
});