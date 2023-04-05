const images = ['log.png', 'diamond.png', 'stone.png'];
const mainSide = document.querySelector('.mainSide');
const topContainer = document.querySelector('.top');
const bottomContainer = document.querySelector('.bottom');


const moneyBagButton = createButton('money-bag.png');
topContainer.appendChild(moneyBagButton);


function createButton(image) {
    const button = document.createElement('img');
    button.src = `./assets/${image}`;

    return button;
}


images.forEach(image => {
    const button = createButton(image);
    bottomContainer.appendChild(button);
});