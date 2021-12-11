//MOBILE TOGGLE MENU ///////////////////////////////////////////////////////////////////

    const navbarMobile = document.querySelector(".navbar__mobile")
    const mobileHam = document.querySelector(".mobile__ham")
    const xIcon = document.querySelector(".xIcon")
    const menuIcon = document.querySelector(".menuIcon")
    const navMobile = document.querySelector(".nav-mobile")
    const imgMobile = document.querySelector(".img-mobile")
    
    

        mobileHam.addEventListener("click", toggleMenu)
    function toggleMenu() {
    if (navbarMobile.classList.contains("showMenu")) {
        navbarMobile.classList.remove("showMenu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
        imgMobile.style.display = "flex";
    } else {
        navbarMobile.classList.add("showMenu");
        xIcon.style.display = "block";
        menuIcon.style.display = "none";
        imgMobile.style.display = "none";
        
    }
}