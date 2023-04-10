import { userInfoPowerMoneyUpdate } from "../userSide/userInfoUpdate.js";

// 커밋 테스트를 위한 임시 주석
const images = ["log.png", "diamond.png", "stone.png"];
const moneyBagButton = createButton("money-bag.png");
const mainSide = document.querySelector(".mainSide");
const topContainer = document.createElement("div");

topContainer.classList.add("top-container");
topContainer.appendChild(moneyBagButton);
mainSide.appendChild(topContainer);

const bottomContainer = document.createElement("div");
bottomContainer.classList.add("bottom-container");
mainSide.appendChild(bottomContainer);

function createButton(image) {
  const button = document.createElement("img");
  button.src = `./assets/${image}`;
  return button;
}

images.forEach((image) => {
  const button = createButton(image);
  bottomContainer.appendChild(button);
});

const testButton = document.createElement("button");
testButton.setAttribute("id", "testButton");
topContainer.appendChild(testButton);

testButton.addEventListener("click", () => {
  userInfoPowerMoneyUpdate(1);
});
