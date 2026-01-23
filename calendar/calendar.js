const datePicker = document.querySelector(".datepicker")
const dateInput = document.querySelector(".date-input")
const cancelBtn = document.querySelector(".datepicker-cancel")
const saveBtn = document.querySelector(".datepicker-save")
const dates = document.querySelector(".calendar-dates")

let selectedDate = new Date();
let year = new Date().getFullYear
let month = new Date().getMonth

dateInput.addEventListener('click', () => {
    datePicker.hidden = false;
});

cancelBtn.addEventListener('click', () => {
    datePicker.hidden = true;
});
saveBtn.addEventListener('click', () => {
    datePicker.hidden = true;
});