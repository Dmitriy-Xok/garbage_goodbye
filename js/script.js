"use strict";
// /* Открыть */
// function openNav() {
//     document.getElementById("myNav").style.height = "400px";
// }
  
// /* Закрыть */
// function closeNav() {
//     document.getElementById("myNav").style.height = "0%";
// }
// var menuLink = document.getElementsByClassName('menu__link');
// menuLink.onclick = function(event) {
//     document.getElementById("myNav").classList.toggle("show");
// }

// /* Когда пользователь нажимает на кнопку,
// переключение между скрытием и отображением раскрывающегося содержимого */
function openMenu() {
    document.getElementById("myNav").classList.toggle("show");
    // document.getElementById("overlay").classList.toggle("show");
}
  
//   // Закройте выпадающее меню, если пользователь щелкает за его пределами
// window.onclick = function(event) {
// if (!event.target.matches('.menu')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//     var openDropdown = dropdowns[i];
//     if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//     }
//     }
// }
// }