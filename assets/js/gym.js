function addGymRowByButton(button) {
    const row = button.closest(".overlay-container-content-gym-exercises");
    const container = document.getElementById("gymExercisesContainer");

    const newRow = row.cloneNode(true);

    // limpa os inputs
    newRow.querySelectorAll("input").forEach(input => {
        input.value = "";
    });

    container.insertBefore(newRow, row.nextSibling);
}

function removeGymRowByButton(button) {
    const row = button.closest(".overlay-container-content-gym-exercises");
    const container = document.getElementById("gymExercisesContainer");

    // impede apagar a última linha
    if (container.children.length > 1) {
        row.remove();
    }
}

