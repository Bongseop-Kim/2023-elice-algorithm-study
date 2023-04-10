const logImg = document.querySelector("#logoImg")
const loginForm =document.querySelector('#login_form') //회원가입폼 전체
const idInput = document.querySelector('#id_input') //아이디입력
const psInput = document.querySelector('#ps_input') //비밀번호입력
const loginBtn = document.querySelector('#login_btn') //회원가입버튼
const signupPage = document.querySelector('#signup_link_btn')
const loginFunc = ()=>{
    idInput.value ==="" ? //이메일 빈칸일경우 
    (alert('이메일을 입력해주세요.'),
    idInput.value = null):
    psInput.value ==="" ? //비밀번호 빈칸일경우 
    (alert('비밀번호를 입력해주세요.'),
    psInput.value = null): null
    
    fetch('https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users/login',{
        method:'POST',
        headers:{
            'content-Type': 'application/json',
        },
        body: JSON.stringify({
            email:idInput.value,
            password: psInput.value
        })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
              Cookies.set("token", data.data.token);
              alert("로그인 완료되었습니다.");
              window.location.href = "index.html";
            } else {
              throw new Error("로그인 실패했습니다.");
            }
          })
          .catch((error) => {
            console.error(error);
            alert("로그인에 실패했습니다.");
          });
}





loginForm.addEventListener('submit', loginFunc)
signupPage.addEventListener('click', (e)=>{ //회원가입 클릭시 회원가입페이지 이동
    e.preventDefault()
    window.location.href = 'signup.html'
    console.log("click")
})
logImg.addEventListener('click',()=>{ //로고클릭시 메인페이지 이동
    window.location.href ='https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/'
})