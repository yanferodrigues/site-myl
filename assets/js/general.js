function openNav() {
    if (document.getElementById('navegation').style.display == 'none') {
        document.getElementById('navegation').style.display = 'flex'
    } else {
        document.getElementById('navegation').style.display = 'none'
    }
}

function openOverlay(id) {
    document.getElementById(id).style.display = "flex";
}

function closeOverlay(id) {
    document.getElementById(id).style.display = "none";
}

function openOverlayClass(cl) {
    document.querySelector(`.${cl}`).style.display = "flex";
}

function TimeCheckbox(box) {
    box.classList.toggle("allowed");
    if (box.classList.contains("allowed")) {
        document.querySelector(".task-overlay-content-time").classList.remove("disabled")
    } else {
        document.querySelector(".task-overlay-content-time").classList.add("disabled")
    };
}
function GeneralCheckbox(box) {
    box.classList.toggle("allowed");
}

document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".current-date-input");
    const today = new Date().toISOString().split("T")[0];

    inputs.forEach(input => {
        input.value = today
    });
})