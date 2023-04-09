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

const userName = document.querySelector("#userName");
const logButton = document.querySelector("#userName button");
const userPower = document.querySelector("#userPower");
const userMoney = document.querySelector("#userMoney");

const userInfoUpdate = (currentUser) => {
  const user = currentUser[0];
  document.getElementById("userName").childNodes[0].nodeValue = user.name;
  userPower.innerHTML = user.power;
  userMoney.innerHTML = user.money;
  logButton.innerHTML = "로그아웃";
};

const loginCheck = () => {
  fetch("https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users/getTopTenUsers")
    .then((res) => res.json())
    .then((data) => {
      if (data.data) {
        console.log(data.data);
        userInfoUpdate(data.data);
      } else {
        // window.location.href = "/login";
      }
    })
    .catch((err) => console.log(err));
};

loginCheck();

logButton.addEventListener("click", () => {
  if (confirm("로그아웃 하시겠습니까?")) {
    window.location.href = "/login";
  } else {
    return;
  }
});
