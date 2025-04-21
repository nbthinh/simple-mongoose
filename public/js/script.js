document.addEventListener('DOMContentLoaded', () => {
    const allButtons = document.querySelectorAll(".searchBtn") ;
    const searchBar = document.querySelectorAll(".searchBar") ;
    const searchInput = document.getElementById("searchInput") ;
    const searchClose = document.getElementById("searchClose") ;

    for (var i = 0 ; i < allButtons.length ; i++) {
        allButtons[i].addEventListener("click", () => {
            searchBar.style.visibility = "visible";
        })
    }
})