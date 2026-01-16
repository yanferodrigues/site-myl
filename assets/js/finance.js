let activeReportId = 'finance-main';
function tabSelector(id,tab) {
    activeReportId = id;
    document.querySelectorAll(".finance-page").forEach(page => {page.classList.remove('active')});
    document.getElementById(id).classList.add('active')

    document.querySelectorAll(".finance-tab").forEach(page => {page.classList.remove('active')});
    tab.classList.add('active')
}

function cardSelector(id) {
    activeReportId = id;
    
}