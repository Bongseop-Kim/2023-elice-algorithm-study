// let user = {
//   name: "User1",
//   power: 0,
//   money: 0,
// }

// const currentUser = [{
//   name:"kim",
//   power:1,
//   money:0
// }]

const userName = document.querySelector('#userName')
const logButton = document.querySelector('#userInfo button')
const userPower = document.querySelector('#userPower')
const userMoney = document.querySelector('#userMoney')

const userInfoUpdate = (currentUser) => {
  const user = currentUser[0];
  document.getElementById("userInfo").childNodes[0].nodeValue = user.name;
  userPower.innerHTML = user.power;
  userMoney.innerHTML = user.money;
  logButton.innerHTML = "로그아웃";
}

const loginCheck = () => {
  fetch('/api/users')
    .then(res => res.json())
    .then(data => {
      if(data.currentUser) {
        userInfoUpdate(data.currentUser);
      } else {
        window.location.href = '로그인 페이지';
      }
    })
    .catch(err => console.log(err));
}

loginCheck();

logButton.addEventListener('click', userInfoUpdate);