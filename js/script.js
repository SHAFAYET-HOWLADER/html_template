
const getToggleBtn = ()=>{
   const img = document.getElementById("toggle_img");
   const img2 = document.getElementById("cross_img");
   img.style.display = "none"
   img2.style.display = "block"
    const menu = document.querySelector(".menu_right");
    menu.style.display = "block";
}
const getCrossBtn = ()=>{
   const img = document.getElementById("toggle_img");
    const img2 = document.getElementById("cross_img");
    const menu = document.querySelector(".menu_right");
   img.style.display = "block"
    menu.style.display = "none";
    img2.style.display = "none"
}