document.getElementById('calculate').addEventListener('click', () => {

    calculateDiscount();
});

document.getElementById('calculate').addEventListener('keypress', (event) => {

    if (event.target.key === 'Enter')
        calculateDiscount();
});





let price = document.getElementById('price');
let discount = document.getElementById('discount');
let priceAfterDiscount = document.getElementById('price-after-discount');
let amountSaved = document.getElementById('amount-save');
let message = document.getElementById('message');

function calculateDiscount() {

    amountSaved.textContent = (price.value * discount.value) / 100;
    priceAfterDiscount.textContent = price.value - amountSaved.textContent;

    showMessage();
    price.value = '';
    discount.value = '';

}

function showMessage() {
    message.textContent = "'happy shopping'";
    message.className = 'show';


    setTimeout(function () {
        message.className =
            message.className.replace("show", "");
    }, 2500);

}


