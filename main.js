const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const navShopIcon = document.querySelector(".navbar-shopping-cart");
const asideShopDetail = document.querySelector(".product-detail");
const mobileMenu = document.querySelector(".menu");
const mobileMenul = document.querySelector(".mobile-menu");
const cardsContainer = document.querySelector('.cards-container');
const asideProductDetailClose = document.querySelector('.product-detail-close');
const asideProductDetails = document.querySelector(".product-detail-aside")

navShopIcon.addEventListener("click",toggleShopDetails);
mobileMenu.addEventListener("click", toggleMenuMobile);
navEmail.addEventListener( "click" , toggleMenu);
asideProductDetailClose.addEventListener("click", asideProductDetailX)



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
    const asideProductDetailCheck = asideProductDetails.classList.contains("inactive");
    if (!mobileMenuCheck) {
        mobileMenul.classList.add('inactive');
    }else if(!desktopMenuCheck){
        desktopMenu.classList.add('inactive');
    }else if (!asideProductDetailCheck){
        asideProductDetails.classList.add('inactive');
    }
    asideShopDetail.classList.toggle("inactive");
}
function toggleMenuMobile() {
    const asideShopCheck = asideShopDetail.classList.contains("inactive");
    const asideProductDetailCheck = asideProductDetails.classList.contains("inactive");
    if (!asideShopCheck) {
        asideShopDetail.classList.add('inactive');
    }else  if(!asideProductDetailCheck){
            asideProductDetails.classList.add('inactive');
        }
        mobileMenul.classList.toggle('inactive');
    }
function toggleAsideDetails() {
    const asideShopCheck = asideShopDetail.classList.contains("inactive");
    if (!asideShopCheck) {
        asideShopDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name:'Bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Relog',
    precio: 80,
    image: 'https://c8.alamy.com/compes/f2gpwr/reloj-de-pulsera-f2gpwr.jpg'
});
productList.push({
    name:'Peine',
    precio: 20,
    image: 'https://media.istockphoto.com/id/147042571/es/foto/multidosificador.jpg?s=612x612&w=0&k=20&c=0-cAqbvvjzFjIUwUg6HlxjSCM-QskLD2yqsT0iXxSkA='
});
productList.push({
    name:'Peine',
    precio: 20,
    image: 'https://media.istockphoto.com/id/147042571/es/foto/multidosificador.jpg?s=612x612&w=0&k=20&c=0-cAqbvvjzFjIUwUg6HlxjSCM-QskLD2yqsT0iXxSkA='
});

/* Imprimir productos en el main container*/
for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerHTML = '$' + product.precio;

    const productName = document.createElement('p');
    productName.innerHTML = product.name;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard);


}
/* Abrir y Cerrar los detalles del producto*/


function openProductDetailAside() {
    const asideShopCheck = asideShopDetail.classList.contains("inactive");
    if (!asideShopCheck) {
        asideShopDetail.classList.add('inactive');
    }
    asideProductDetails.classList.remove('inactive');
}
function asideProductDetailX(){
    asideProductDetails.classList.add('inactive');
}