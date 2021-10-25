const menu = document.querySelector('.icon');
const mennuItems = document.querySelector('ul');
const navbar = document.querySelector('nav');
const buyBtn = document.querySelector('button');
const cartDisplay = document.querySelector('#cart');

let itemNumber = 0;

menu.addEventListener('click', evt => {
    mennuItems.classList.toggle('display');
    navbar.classList.toggle('display');
})

buyBtn.addEventListener('click', evt => {
    if (buyBtn.innerText === 'ADD TO CART') {
        itemNumber++;
        const itemDisplay = document.createElement('span');
        itemDisplay.append(`(${itemNumber})`);
        cartDisplay.append(itemDisplay);
        buyBtn.innerText = 'GO TO CART';
        buyBtn.classList.add('add-to-cart');
    } else {
        // logic to go to the cart
    }
})
