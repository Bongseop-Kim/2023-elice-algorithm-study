//회원가입 요소 불러오기
const logImg = document.querySelector("#logoImg");
const signupForm = document.querySelector("#signup_form"); //회원가입폼 전체
const emailInput = document.querySelector("#email_input"); //이메일입력
const nameInput = document.querySelector("#name_input"); //이름입력
const psInput = document.querySelector("#ps_input1"); //비밀번호입력
const psConfirm = document.querySelector("#ps_input2"); //비밀번호확인
const signupBtn = document.querySelector("#sinup_btn"); //회원가입버튼

const signupFunc = (event) => {
  event.preventDefault();

  emailInput.value === "" //id입력시 빈칸일경우
    ? (alert("아이디를 입력해주세요."), (emailInput.value = null))
    : psInput.value !== psConfirm.value //pw입력시 서로 다를 경우
    ? (alert("비밀번호를 확인해주세요."), (psInput.value = null), (psConfirm.value = null))
    : null;

  // 1. 회원 가입시 전송해야할 데이터 형식은 email,name,password가 꼭 필수로 들어와야 합니다.
  // 하나라도 없으면 제대로 작동하지 않아요.
  // 2. 회원가입 완료시 login.html로 강제 이동 시켜 줬어요
  // ... respose.json()을 안해줬는데 cors type이 안나오는 이유...?

  fetch("https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users/signup", {
    method: "POST", //fetch요청
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailInput.value,
      name: nameInput.value,
      password: psInput.value,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("회원가입이 완료되었습니다.");
        window.location.href = "/login_signup/login.html";
      } else {
        throw new Error("회원가입에 실패했습니다.");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("회원가입에 실패했습니다.");
    });
};

signupForm.addEventListener("submit", signupFunc);

//적어주신 주소는 api 서버 주소에요. 해당 링크로 보내도 아무런 작동하지 않습니다.
//틀린 방식은 아닙니다. 저렇게 작동하게 하려면 제가 서버에서 해당 접속시 send로 여러분이 작업하신 파일을 보내면 됩니다.
// 아마 수업에서도 이런 방식으로 html 보냈던거 같아요

logImg.addEventListener("click", () => {
  //로고클릭시 메인페이지이동
  window.location.href = "/index.html";
});
