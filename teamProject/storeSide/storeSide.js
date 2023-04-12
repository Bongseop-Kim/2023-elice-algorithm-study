<<<<<<< HEAD
const powerList = document.getElementById("powerList");
const jacpot = document.getElementById("jacpot");
const imgList = ["https://raw.githubusercontent.com/Bongseop-Kim/2023-elice-algorithm-study/main/teamProject/assets/wrench.png",
"https://raw.githubusercontent.com/Bongseop-Kim/2023-elice-algorithm-study/main/teamProject/assets/pickaxe.png",
"https://raw.githubusercontent.com/Bongseop-Kim/2023-elice-algorithm-study/main/teamProject/assets/drill.png",
"https://raw.githubusercontent.com/Bongseop-Kim/2023-elice-algorithm-study/main/teamProject/assets/excavator.png",
"https://raw.githubusercontent.com/Bongseop-Kim/2023-elice-algorithm-study/main/teamProject/assets/robot.png"];
let imgCount=1;
for(i of imgList){
  const storeList = document.createElement("div");
  const storeText = document.createElement("div");
  const divImg = document.createElement("div");
  const power = document.createElement("div");
  const price = document.createElement("div");
  storeList.className = "list-group-item";
  storeText.className = "storeText";
  divImg.className = "divImg"
  storeList.id = `powerLevel_${imgCount}`;   
  imgCount++;
  power.className="power_up"
  const img = document.createElement('img');
  img.className = "power_img";
  img.src = i;
  storeList.appendChild(divImg);
  divImg.appendChild(img);
  storeText.appendChild(power);
  storeText.appendChild(price);
  power.innerHTML= "power + 1 ";
  price.innerHTML= "price : 100$";
  storeList.appendChild(storeText);
  powerList.appendChild(storeList);
}
const powerLevel_1 = document.getElementById("powerLevel_1");
const powerLevel_2 = document.getElementById("powerLevel_2");
const powerLevel_3 = document.getElementById("powerLevel_3");
const powerLevel_4 = document.getElementById("powerLevel_4");
const powerLevel_5 = document.getElementById("powerLevel_5");

let user={
  name:"asjkldf",
  power:12,
  money:400,
}
powerLevel_1.addEventListener('click',buyTool);
powerLevel_2.addEventListener('click',buyTool);
powerLevel_3.addEventListener('click',buyTool);
powerLevel_4.addEventListener('click',buyTool);
powerLevel_5.addEventListener('click',buyTool);

function buyTool(){
  axiosGet();
  if(user.money<100){
    alert(`name:${user.name} money:${user.money} power:${user.power} money를 100이상 채우시오.`);
  }
  else{
    user.power++;
    user.money -=100;
    alert(`money:${user.money} power:${user.power} -100 $ , +power`);
    axiosPost();
  }
  
}

function axiosGet() {
  axios.get('https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users').then(response => {
    let res = response.data.data;
    user.name = res.name;
    user.power = res.power;
    user.money = res.money;
    alert(`axiosGet TEST`);
  }).catch(function (error) {
    // 에러 핸들링
    console.log(error);
  });
}

function axiosPost() {
    axios.post('https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users/buyTool',{
      id: user.id,
      power: user.power,
      money: user.money,
    })
    .then((response) => {
      response.data.power = user.power;
      response.data.money = user.money;
      alert(`axiosPost TEST`);
    }).catch(function (error) {
      console.log(error);
    });         
}

jacpot.addEventListener('click',jacpotPlay);


function jacpotPlay(id,money,strong){
    alert(`jacpotplay`);
}



//export default axiosPost;
=======

>>>>>>> f76baefc087f0322eee3ef48e6f8b0e513677784
