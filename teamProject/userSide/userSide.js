// const userInfoUpdate

const userSide_box = document.querySelector(".userSide.box");
const userName = document.createElement("div");
userName.setAttribute("id", "userName");
userSide_box.appendChild(userName);

const userPower = document.createElement("div");
userPower.setAttribute("id", "userPower");
userName.appendChild(userPower);

const userMoney = document.createElement("div");
userMoney.setAttribute("id", "userMoney");
userName.appendChild(userMoney);

const logButton = document.createElement("button");
logButton.setAttribute("id", "logButton");
userName.appendChild(logButton);

const rankImg = document.createElement("img");
rankImg.setAttribute("src", "./assets/ranking.png");
rankImg.setAttribute("alt", "rankingImg");
rankImg.setAttribute("id", "rankImg");
userName.appendChild(rankImg);

const rankButton = document.createElement("button");
rankButton.setAttribute("id", "rankButton");
rankButton.innerHTML = '랭킹 최신화';
userName.appendChild(rankButton);

const userRankList = document.createElement("ul");
userRankList.setAttribute("class", "userRankList");
userName.appendChild(userRankList);

// userSide top
const userInfoUpdate = (user) => {
  document.getElementById("userName").prepend(user.name);
  userPower.innerHTML = user.strong;
  userMoney.innerHTML = user.money;
  logButton.innerHTML = "로그아웃";
};
// userInfoPowerMoneyUpdate(2, 3);
const loginCheck = () => {
  fetch("https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${Cookies.get().token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        userInfoUpdate(data.data);
      } else {
        window.location.href = "/teamProject/login_signup/login.html";
      }
    })
    .catch((err) => console.log(err));
};

loginCheck();

logButton.addEventListener("click", () => {
  if (confirm("로그아웃 하시겠습니까?")) {
    Cookies.remove("token");
    window.location.href = "/teamProject/login_signup/login.html";
  }
});

//userSide bottom
const topTenUserSort = (data) => {
  data.data.sort((a, b) => b.money - a.money);
  return data.data.slice(0, 10);
};

const showTopTen = () => {
  fetch("https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users/getTopTenUsers")
    .then((res) => res.json())
    .then((data) => {
      const topTenUsers = topTenUserSort(data);
      topTenUsers.forEach((user) => {
        const rankList = document.createElement("li");
        rankList.innerText = `${user.name} ${user.money}`;
        userRankList.appendChild(rankList);
      });
    })
    .catch((err) => console.log(err));
};

showTopTen();

rankButton.addEventListener('click', () => {
  userRankList.removeChild();
  showTopTen();
});