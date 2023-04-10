let user = {
  name: "",
  strong: 0,
  money: 0,
};

const userSide_box = document.querySelector(".userSide.box");
const userName = document.createElement("div");
userName.setAttribute("id", "userName");
userSide_box.appendChild(userName);

const userRankList = document.createElement("ul");
userRankList.setAttribute("class", "userRankList");
userName.appendChild(userRankList);

const rankImg = document.createElement("img");
rankImg.setAttribute("src", "./assets/ranking.png");
rankImg.setAttribute("alt", "rankingImg");
rankImg.setAttribute("id", "rankImg");
userName.appendChild(rankImg);

const logButton = document.createElement("div");
logButton.setAttribute("id", "logButton");
userName.appendChild(logButton);

const userPower = document.createElement("div");
userPower.setAttribute("id", "userPower");
userName.appendChild(userPower);

const userMoney = document.createElement("div");
userMoney.setAttribute("id", "userMoney");
userName.appendChild(userMoney);

// userSide top
const userInfoUpdate = (user) => {
  console.log(user);
  document.getElementById("userName").childNodes[0].nodeValue = user.name;
  userPower.innerHTML = user.strong;
  userMoney.innerHTML = user.money;
  logButton.innerHTML = "로그아웃";
};

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
        // window.location.href = "로그인 페이지";
      }
    })
    .catch((err) => console.log(err));
};

loginCheck();

logButton.addEventListener("click", () => {
  if (confirm("로그아웃 하시겠습니까?")) {
    window.location.href = "로그인 페이지";
  } else {
    return;
  }
});

//userSide bottom
const topTenUserSort = (data) => {
  data.data.sort((a, b) => a.money - b.money);
  return data.data.slice(0, 10);
};

const showTopTen = () => {
  fetch("https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users/getTopTenUsers")
    .then((res) => res.json())
    .then((data) => {
      const topTenUsers = topTenUserSort(data);
      topTenUsers.forEach((user) => {
        const rankList = document.createElement("li");
        rankList.innerText = user.name + user.money;
        userRankList.appendChild(rankList);
      });
    })
    .catch((err) => console.log(err));
};

showTopTen();
