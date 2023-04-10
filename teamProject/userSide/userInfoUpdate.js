export function userInfoPowerMoneyUpdate(strong, money) {
  const userPower = document.getElementById("userPower");
  const userMoney = document.getElementById("userMoney");

  console.log(userPower);
  if (strong) {
    userPower.innerText += strong;
  }
  if (money) {
    userMoney.innerHTML = money;
  }
}
