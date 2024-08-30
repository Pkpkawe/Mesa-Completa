let ButtonMenu = window.document.getElementById("ButtonMenu")
let NavMenu = window.document.getElementById("NavMenu")

ButtonMenu.addEventListener('click', function() {
    if (NavMenu.style.display == 'inline-block') {
        NavMenu.style.display = 'None'
    } else {NavMenu.style.display = 'inline-block'}
   
})