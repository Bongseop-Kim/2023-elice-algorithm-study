let currentUser = {
  id: "",
  money: 0,
  strong: 0,
};

const setId = (id) => {
  currentUser.id = id;
};

const setMoney = (money) => {
  currentUser.money = money;
};
const setStrong = (strong) => {
  currentUser.strong = strong;
};

const plusServerMoney = (money) => {
  currentUser.money += money;
  console.log(money);
  const userMoney = document.getElementById("userMoney");
  userMoney.innerHTML = currentUser.money;
};

const buyServerTool = (money, strong) => {
  currentUser.money -= money;
  currentUser.strong += strong;
  const userPower = document.getElementById("userPower");
  userPower.innerHTML = currentUser.strong;
};

export { setMoney, setStrong, plusServerMoney, buyServerTool, currentUser, setId };
