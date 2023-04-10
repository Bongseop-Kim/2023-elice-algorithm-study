const logImg = document.querySelector("#logoImg")
const loginForm =document.querySelector('#login_form') //회원가입폼 전체
const idInput = document.querySelector('#id_input') //아이디입력
const psInput = document.querySelector('#ps_input') //비밀번호입력
const loginBtn = document.querySelector('#login_btn') //회원가입버튼
const signupPage = document.querySelector('#signup_link_btn')
// const loginupFunc = ()=>{

// }


// loginForm.addEventListener('submit', loginFunc)
signupPage.addEventListener('click', (e)=>{ //회원가입 클릭시 회원가입페이지 이동
    e.preventDefault()
    window.location.href = 'signup.html'
    console.log("click")
})
logImg.addEventListener('click',()=>{ //로고클릭시 메인페이지 이동
    window.location.href ='https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/'
})