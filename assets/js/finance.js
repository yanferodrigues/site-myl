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

