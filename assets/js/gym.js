function addGymRowByButton(button) {
    const row = button.closest(".overlay-container-content-gym-exercises");
    const container = document.getElementById("gymExercisesContainer");

    const newRow = row.cloneNode(true);

    newRow.querySelectorAll("input").forEach(input => {
        input.value = "";
    });

    container.insertBefore(newRow, row.nextSibling);
}

function removeGymRowByButton(button) {
    const row = button.closest(".overlay-container-content-gym-exercises");
    const container = document.getElementById("gymExercisesContainer");

    if (container.children.length > 1) {
        row.remove();
    }
}

function addNewForm() {
    const container = document.getElementById("overlay-gym-general-forms");
    const form = container.querySelector(".overlay-container-content-gym-form");
    const newForm = form.cloneNode(true);

    newForm.querySelectorAll("input").forEach(input => {
        input.value = "";
    });

    newForm.querySelectorAll("[id]").forEach(el => {
        el.removeAttribute("id");
    });

    container.appendChild(newForm);
}

