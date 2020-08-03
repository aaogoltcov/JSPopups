'use strict'

// version 1
// popup close function
function closePopup() {
    for (let modal in Array.from(document.querySelectorAll('div.modal__close_times'))) {
        if (document.querySelectorAll('div.modal__close_times')[modal].closest('div.modal').classList.contains('modal_active')) {
            document.querySelectorAll('div.modal__close_times')[modal].onclick = function () {
                document.querySelectorAll('div.modal__close_times')[modal].closest('div.modal').className = 'modal';
            };
        }

    }

}
// start with modal_main popup
document.getElementById('modal_main').className = 'modal modal_active';

// open modal_success with button
document.querySelector('div.modal a.btn_danger').onclick = function () {
    document.getElementById('modal_main').className = 'modal';
    document.getElementById('modal_success').className = 'modal modal_active';

    // close popup
    closePopup();

};

// close popup
closePopup();


// version 2
// setInterval(function closePopup() {
//     for (let modal in Array.from(document.querySelectorAll('div.modal__close_times'))) {
//         if (document.querySelectorAll('div.modal__close_times')[modal].closest('div.modal').classList.contains('modal_active')) {
//             document.querySelectorAll('div.modal__close_times')[modal].onclick = function () {
//                 document.querySelectorAll('div.modal__close_times')[modal].closest('div.modal').className = 'modal';
//             };
//         };
//     };
// }, 500);
//
// document.getElementById('modal_main').className = 'modal modal_active';
//
// document.querySelector('div.modal a.btn_danger').onclick = function () {
//     document.getElementById('modal_main').className = 'modal';
//     document.getElementById('modal_success').className = 'modal modal_active';
// };
