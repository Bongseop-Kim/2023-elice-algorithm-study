const logImg = document.querySelector("#logoImg")
const loginForm =document.querySelector('#login_form') //회원가입폼 전체
const idInput = document.querySelector('#id_input') //아이디입력
const psInput = document.querySelector('#ps_input') //비밀번호입력
const loginBtn = document.querySelector('#login_btn') //회원가입버튼
const signupPage = document.querySelector('#signup_link_btn')
// const loginupFunc = ()=>{

// }


// loginForm.addEventListener('submit', loginFunc)
signupPage.addEventListener('click', (e)=>{
    e.preventDefault()
    window.location.href = 'signup.html'
    console.log("click")
})
logImg.addEventListener('click',()=>{
    window.location.href ='https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/'
})