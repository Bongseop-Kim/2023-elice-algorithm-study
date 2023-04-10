const logImg = document.querySelector("#logoImg");
const loginForm = document.querySelector("#login_form"); //회원가입폼 전체
const emailInput = document.querySelector("#email_input"); //아이디입력
const psInput = document.querySelector("#ps_input"); //비밀번호입력
const loginBtn = document.querySelector("#login_btn"); //로그인버튼
const signupPage = document.querySelector("#signup_link_btn");

const loginupFunc = (e) => {
  e.preventDefault();
  fetch("https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users/login", {
    method: "POST", //fetch요청, GET으로 수정
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailInput.value,
      password: psInput.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        Cookies.set("token", data.data.token);
        alert("로그인 완료되었습니다.");
        window.location.href = "/teamProject/index.html";
      } else {
        throw new Error("로그인 실패했습니다.");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("로그인에 실패했습니다.");
    });
};

// loginForm.addEventListener('submit', loginFunc)
signupPage.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "signup.html";
  console.log("click");
});
logImg.addEventListener("click", () => {
  window.location.href = "/index.html";
});

loginBtn.addEventListener("click", (e) => {
  loginupFunc(e);
});
