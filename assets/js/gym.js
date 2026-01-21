function addGymRowByButton() {
    const container = document.getElementById("gymExercisesContainer");
    const rows = container.children;
    const lastRow = rows[rows.length - 1];

    const inputs = lastRow.querySelectorAll("input");
    const isEmpty = [...inputs].every(input => input.value === "");

    // se a última linha estiver vazia e houver mais de uma, remove
    if (isEmpty && rows.length > 1) {
        container.removeChild(lastRow);
        return;
    }

    // cria nova linha
    const newRow = lastRow.cloneNode(true);
    newRow.querySelectorAll("input").forEach(i => i.value = "");
    container.appendChild(newRow);
}