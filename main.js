const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const navShopIcon = document.querySelector(".navbar-shopping-cart");
const asideShopDetail = document.querySelector(".product-detail");
const mobileMenu = document.querySelector(".menu");
const mobileMenul = document.querySelector(".mobile-menu");

navShopIcon.addEventListener("click",toggleShopDetails);
mobileMenu.addEventListener("click", toggleMenuMobile);
navEmail.addEventListener( "click" , toggleMenu);


function toggleMenu() {
    const asideShopCheck = asideShopDetail.classList.contains("inactive");
    if (!asideShopCheck) {
        asideShopDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleShopDetails() {
    const desktopMenuCheck = desktopMenu.classList.contains('inactive');
    const mobileMenuCheck = mobileMenul.classList.contains("inactive");
    if (!mobileMenuCheck) {
        mobileMenul.classList.add('inactive');
    }else if(!desktopMenuCheck){
        desktopMenu.classList.add('inactive');
    }
    asideShopDetail.classList.toggle("inactive");
}
function toggleMenuMobile() {
    const asideShopCheck = asideShopDetail.classList.contains("inactive");
    if (!asideShopCheck) {
        asideShopDetail.classList.add('inactive');
    }
    mobileMenul.classList.toggle('inactive');
}