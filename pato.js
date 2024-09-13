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

const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function updateTime(){
    var now = new Date();
    document.getElementById("time").innerText =
    zeroPadding(now.getHours() , 2) +":" +
    zeroPadding(now.getMinutes() , 2) +":" +
    zeroPadding(now.getSeconds() , 2);

    document.getElementById("date").innerText =
    now.getFullYear() + "-" +
    zeroPadding(now.getMonth() + 1, 2) + "-" +
    zeroPadding(now.getDate() , 2) + " " +
    WEEK[now.getDay()];


}
updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit){
    return String(num).padStart(digit , '0' );
}
