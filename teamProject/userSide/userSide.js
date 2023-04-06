let user = {
  name: "User1",
  power: 0,
  money: 0,
}

const userName = document.querySelector('#userInfo')
const logoutButton = document.querySelector('#userInfo button')
const userPower = document.querySelector('#userInfo')

window.onload = function() {
  userName.innerHTML = user.name;
};
