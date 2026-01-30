let activeReportId = 'finance-main';
function tabSelector(id,tab) {
    activeReportId = id;
    document.querySelectorAll(".finance-page").forEach(page => {page.classList.remove('active')});
    document.getElementById(id).classList.add('active')

    document.querySelectorAll(".finance-tab").forEach(page => {page.classList.remove('active')});
    tab.classList.add('active')
}

function cardSelector(id,idcard) {
    activeReportId = id;
    document.querySelectorAll(".credit-cards-accounts").forEach(card => {card.classList.remove('active')});
    document.getElementById(id).classList.add('active')

    document.querySelectorAll('.self-card').forEach(card => card.classList.remove('active'))
    idcard.classList.add('active')
}

let activeButton = null;

function addSelfCard(button) {
    const allCards = document.getElementById("credit-cards");
    const existingInput = allCards.querySelector(".new-self-card");

    const allCardsContents = document.getElementById("credit-cards-main-content");
    
    
    
    if (existingInput) {
        if (existingInput.value.trim() !== "") {
            const div = document.createElement("div");
            div.className = "self-card";
            div.textContent = existingInput.value;
            

            allCards.replaceChild(div, existingInput);

            const selfContent = allCardsContents.lastElementChild.cloneNode(true);
            selfContent.id = `${existingInput.value}-accounts`;
            div.setAttribute("onclick", `cardSelector("${selfContent.id}",this)`);
            allCardsContents.appendChild(selfContent);
            
        } else {
            existingInput.remove();
        }
    }
    const input = document.createElement("input");
    input.type = "text";
    input.className = "new-self-card";

    allCards.insertBefore(input, button);
    input.focus();

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const div = document.createElement("div");
            div.className = "self-card";
            div.id = input.value.toLowerCase();
            div.textContent = input.value

            allCards.replaceChild(div, input);

            const selfContent = allCardsContents.lastElementChild.cloneNode(true);
            selfContent.id = `${input.value}-accounts`;
            div.setAttribute("onclick", `cardSelector("${selfContent.id}",this)`);
            allCardsContents.appendChild(selfContent);
        };
    })
}
    
function setState(btn) {
    btn.classList.toggle("payed");
    if (btn.lastElementChild.textContent === "Payed") {
        btn.lastElementChild.textContent = "Pendent"
    }
    else {
        btn.lastElementChild.textContent = "Payed"
    }
}
