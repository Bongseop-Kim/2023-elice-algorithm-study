let currentUser = {
  money: 0,
  strong: 0,
};

const setMoney = (money) => {
  currentUser.money = money;
};
const setStrong = (strong) => {
  currentUser.strong = strong;
};

const plusMoney = (money) => {
  currentUser.money += money;
  const userMoney = document.getElementById("userMoney");
  userMoney.innerHTML = currentUser.money;
};

const buyTool = (money, strong) => {
  currentUser.money -= money;
  currentUser.strong += strong;
  const userPower = document.getElementById("userPower");
  userPower.innerHTML = currentUser.strong;
};

export { setMoney, setStrong, plusMoney, buyTool };
