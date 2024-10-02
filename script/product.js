const productName = localStorage.getItem('productName');
const productCategory = localStorage.getItem('productCategory');
const productCurrentPrice = localStorage.getItem('productCurrentPrice');
const productOriginalPrice = localStorage.getItem('productOriginalPrice');
const productDiscount = localStorage.getItem('productDiscount');
const productImg = localStorage.getItem('productImg'); 

document.getElementById('productImg').src = `/assets/new/${productImg}`;
document.getElementById('productName').textContent = productName;
document.getElementById('productCategory').textContent = productCategory;
document.getElementById('productCurrentPrice').textContent = productCurrentPrice;
document.getElementById('productOriginalPrice').textContent = productOriginalPrice;
document.getElementById('productDiscount').textContent = productDiscount;

// Variáveis para armazenar o tamanho e a forma de pagamento selecionados
let selectedSize = '';
let selectedPaymentMethod = '';

// Seleciona todos os botões de tamanho
const sizeButtons = document.querySelectorAll('.sizes button');
sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        selectedSize = this.getAttribute('data-size'); // Armazena o tamanho selecionado
    });
});

// Seleciona todos os botões de forma de pagamento
const paymentButtons = document.querySelectorAll('.payment-methods button');
paymentButtons.forEach(button => {
    button.addEventListener('click', function() {
        paymentButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        selectedPaymentMethod = this.getAttribute('data-payment'); // Armazena o método de pagamento selecionado
    });
});

// Função para formatar o método de pagamento
function formatPaymentMethod(method) {
    switch (method) {
        case 'cartao-credito':
            return 'Cartão de Crédito';
        case 'cartao-debito':
            return 'Cartão de Débito';
        case 'pix':
            return 'Pix';
        case 'dinheiro':
            return 'Dinheiro';
        default:
            return method;
    }
}

// Ao clicar em "Finalizar Compra"
document.getElementById('buyBtn').addEventListener('click', function() {
    const quantity = document.getElementById('quantity').value;
    const productPrice = productCurrentPrice.replace(' no PIX', ''); // Remove a parte " no PIX"

    if (!selectedSize) {
        alert("Por favor, selecione um tamanho.");
        return;
    }

    if (!selectedPaymentMethod) {
        alert("Por favor, selecione uma forma de pagamento.");
        return;
    }

    // Criar a mensagem para redirecionamento
    const formattedPayment = formatPaymentMethod(selectedPaymentMethod);
    const mensagem = `Olá, tudo bem?\nGostaria de comprar:\n\nCamisa: ${productName}\nTamanho: ${selectedSize}\nPreço: ${productPrice}\nForma de Pagamento: ${formattedPayment}\n\nObrigado!`;

    // Número do WhatsApp
    let numeroWhatsapp = "558193995599";
    const urlWhatsApp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;

    // Redirecionar para o WhatsApp
    window.open(urlWhatsApp, '_blank');
});