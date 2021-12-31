

function animeScroll() {
    const windowTop = window.pageYOffset;
    const headerFixed = document.querySelector(".header-fixed")
    const header = document.querySelector(".container-header")
    if (windowTop > 150) {
        header.classList.add("opacity-0")
        headerFixed.classList.remove('opacity-0')
    
    } 
    else {
        header.classList.remove("opacity-0")
        headerFixed.classList.add("opacity-0")
    }
}

window.addEventListener("scroll", function() {
    animeScroll();
})
