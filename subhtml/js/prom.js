

let maindiv = document.querySelector(".mainimage");
maindiv.addEventListener("scroll", scrollPage("maindiv"));

let hero = document.querySelector(".hero");
hero.addEventListener("scroll", scrollPage("hero"));

function scrollPage(blok) {
    switch(blok) {
        case("maindiv"):
            scroll("100vh");
            break;
        case("hero"):
            scroll("-100vh");
            break;
    }
}

function scroll(height) {
    window.scrollTo({
        top: height
    });
}