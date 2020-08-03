'use strict'

let popupsArray = Array.from(document.querySelectorAll('div.modal__close_times'))

// version 1
// popup close function
function closePopup() {
    popupsArray.forEach(function (modal) {
        modal.closest('div.modal').classList.contains('modal_active') ? modal.onclick = function () {
            modal.closest('div.modal').className = 'modal'} : '';
    });
};

// start with modal_main popup
let modalMain = document.getElementById('modal_main')
let modalSuccess = document.getElementById('modal_success')
modalMain.className = 'modal modal_active';

// open modal_success with button
document.querySelector('div.modal a.btn_danger').onclick = function () {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal modal_active';

    // close popup
    closePopup();
};

// close popup
closePopup();


// // version 2
// // popup close function
// setInterval(function closePopup() {
//     popupsArray.forEach(function (modal) {
//         modal.closest('div.modal').classList.contains('modal_active') ? modal.onclick = function () {
//             modal.closest('div.modal').className = 'modal'} : '';
//     });
// }, 500);
//
// // start with modal_main popup
// let modalMain = document.getElementById('modal_main')
// let modalSuccess = document.getElementById('modal_success')
// modalMain.className = 'modal modal_active';
//
// document.querySelector('div.modal a.btn_danger').onclick = function () {
//     modalMain.className = 'modal';
//     modalSuccess.className = 'modal modal_active';
// };
