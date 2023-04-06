const images = ['log.png', 'diamond.png', 'stone.png'];
const moneyBagButton = createButton('money-bag.png');
const mainSide = document.querySelector('.mainSide');
const topContainer = document.createElement('div');

topContainer.classList.add('top-container');
topContainer.appendChild(moneyBagButton);
mainSide.appendChild(topContainer);

const bottomContainer = document.createElement('div');
bottomContainer.classList.add('bottom-container');
mainSide.appendChild(bottomContainer);

function createButton(image) {
    const button = document.createElement('img');
    button.src = `./assets/${image}`;
    return button;
}

images.forEach(image => {
    const button = createButton(image);
    bottomContainer.appendChild(button);
});
