const images = ['log.png', 'diamond.png', 'stone.png'];
<<<<<<< HEAD
const mainSide = document.querySelector('.mainSide');
const topContainer = document.querySelector('.top');
const bottomContainer = document.querySelector('.bottom');


const moneyBagButton = createButton('money-bag.png');
topContainer.appendChild(moneyBagButton);

=======
const moneyBagButton = createButton('money-bag.png');
const mainSide = document.querySelector('.mainSide');
const topContainer = document.createElement('div');

topContainer.classList.add('top-container');
topContainer.appendChild(moneyBagButton);
mainSide.appendChild(topContainer);

const bottomContainer = document.createElement('div');
bottomContainer.classList.add('bottom-container');
mainSide.appendChild(bottomContainer);
>>>>>>> 3e0cbaba5f6e52bbd44cd78e5a068da7a6ab24e1

function createButton(image) {
    const button = document.createElement('img');
    button.src = `./assets/${image}`;
<<<<<<< HEAD

    return button;
}


images.forEach(image => {
    const button = createButton(image);
    bottomContainer.appendChild(button);
});
=======
    return button;
}

images.forEach(image => {
    const button = createButton(image);
    bottomContainer.appendChild(button);
});
>>>>>>> 3e0cbaba5f6e52bbd44cd78e5a068da7a6ab24e1
