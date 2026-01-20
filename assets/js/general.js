function openNav() {
    if (document.getElementById('navegation').style.display == 'none') {
        document.getElementById('navegation').style.display = 'flex'
    } else {
        document.getElementById('navegation').style.display = 'none'
    }
}

function openOverlay(id) {
    document.getElementById(id).style.display = "flex"
}

function closeOverlay(id) {
    document.getElementById(id).style.display = "none"
}