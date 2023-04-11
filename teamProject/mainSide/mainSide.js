const mainSide = document.querySelector(".mainSide");
const topSection = document.createElement("div");

topSection.classList.add("top-section");

let money = 0;
const moneyImg = document.createElement("img");
moneyImg.src = "./assets/money-bag.png";
moneyImg.classList.add("money-img");
topSection.appendChild(moneyImg);

const moneyText = document.createElement("span");
moneyText.textContent = `${money} $`;
moneyText.classList.add("money-text");
topSection.appendChild(moneyText);

mainSide.appendChild(topSection);

// add bottom area
const bottomSection = document.createElement("div");
bottomSection.classList.add("bottom-section");

const logBox = createBox("log.png", "1 sec", "1");
bottomSection.appendChild(logBox);

const diamondBox = createBox("diamond.png", "5 sec", "2");
bottomSection.appendChild(diamondBox);

const stoneBox = createBox("stone.png", "10 sec", "3");
bottomSection.appendChild(stoneBox);

mainSide.appendChild(bottomSection);

function createBox(imageSrc, time, reward) {
  const boxContainer = document.createElement("div");
  boxContainer.classList.add("box-container");

  const box = document.createElement("div");
  box.classList.add("box");

  const image = document.createElement("img");
  image.src = `./assets/${imageSrc}`;
  image.classList.add("resource-img");
  box.appendChild(image);

  const timeText = document.createElement("span");
  timeText.textContent = `time: ${time}`;
  timeText.classList.add("time-text");
  box.appendChild(timeText);

  const rewardText = document.createElement("span");
  rewardText.textContent = `reward: ${reward}`;
  rewardText.classList.add("reward-text");
  box.appendChild(rewardText);

  boxContainer.appendChild(box);

  return boxContainer;
}

const logButton = logBox.querySelector(".box");
const diamondButton = diamondBox.querySelector(".box");
const stoneButton = stoneBox.querySelector(".box");

let isButtonDisabled = false;

function disableButton(duration) {
  isButtonDisabled = true;
  setTimeout(() => {
    isButtonDisabled = false;
  }, duration);
}

logButton.addEventListener("click", () => {
  if (!isButtonDisabled) {
    money += 1;
    moneyText.textContent = `${money} $`;
    disableButton(logButton, 1000);
    disableButton(diamondButton, 1000);
    disableButton(stoneButton, 1000);
  }
});

diamondButton.addEventListener("click", () => {
  if (!isButtonDisabled) {
    money += 2;
    moneyText.textContent = `${money} $`;
    disableButton(diamondButton, 5000);
    disableButton(logButton, 5000);
    disableButton(stoneButton, 5000);
  }
});

stoneButton.addEventListener("click", () => {
  if (!isButtonDisabled) {
    money += 3;
    moneyText.textContent = `${money} $`;
    disableButton(stoneButton, 10000);
    disableButton(logButton, 10000);
    disableButton(diamondButton, 10000);
  }
});

function disableButton(button, duration) {
  isButtonDisabled = true;
  const startTime = Date.now();

  button.classList.add("disabled");
  const timer = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = duration - elapsedTime;
    if (remainingTime <= 0) {
      button.classList.remove("disabled");
      button.style.background = "";
      isButtonDisabled = false;
      clearInterval(timer);
    } else {
      const width = ((remainingTime / duration) * 100).toFixed(2);
      button.style.background = `linear-gradient(to right, rgba(255, 0, 0, 0.5) ${width}%, transparent ${width}%)`;
    }
  }, 10);
}
