// Sticky Header
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Menu Toggle for Mobile View
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

// Scroll Reveal Animation
const sr = ScrollReveal({
    distance: '0px',
    duration: 1600,
    reset: true
});

sr.reveal('.home-text', { delay: 0, origin: 'bottom' });
sr.reveal('.itens, .cta, .new, .brand, .contact, .last-text', { delay: 280, origin: 'top' });

// Whatsapp compra (product.js)



// product page
//

document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productCategory = productCard.querySelector('.category').textContent;
        const productCurrentPrice = productCard.querySelector('.current-price').textContent;
        const productOriginalPrice = productCard.querySelector('.original-price').textContent;
        const productDiscount = productCard.querySelector('.discount').textContent;
        const productImg = this.getAttribute('data-img'); 

// armazenando no local storage o nome

        localStorage.setItem('productName', productName);
        localStorage.setItem('productCategory', productCategory);
        localStorage.setItem('productCurrentPrice', productCurrentPrice);
        localStorage.setItem('productOriginalPrice', productOriginalPrice);
        localStorage.setItem('productDiscount', productDiscount);
        localStorage.setItem('productImg', productImg); 

        window.location.href = 'product.html'; 
    });
});
////////////////

