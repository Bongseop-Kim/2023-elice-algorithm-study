//회원가입 요소 불러오기
const logImg = document.querySelector("#logoImg")
const signupForm =document.querySelector('#signup_form') //회원가입폼 전체
const idInput = document.querySelector('#id_input') //아이디입력
const psInput = document.querySelector('#ps_input1') //비밀번호입력
const psConfirm = document.querySelector('#ps_input2') //비밀번호확인
const signupBtn = document.querySelector('#sinup_btn') //회원가입버튼

const signupFunc = event =>{
    event.preventDefault();
    
    idInput.value ==="" ? //id입력시 빈칸일경우 
    (alert('아이디를 입력해주세요.'),
    idInput.value = null):
    
    psInput.value !== psConfirm.value ? //pw입력시 서로 다를 경우
    (alert('비밀번호를 확인해주세요.'),
    psInput.value = null,
    psConfirm.value = null):null

   fetch('https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/api/users/signup', {
  method: 'POST', //fetch요청
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: idInput.value,
    password: psInput.value
  })
}).then(response => {
  if (response.ok) {
    alert('회원가입이 완료되었습니다.');
  } else {
    throw new Error('회원가입에 실패했습니다.');
  }
}).catch(error => {
  console.error(error);
  alert('회원가입에 실패했습니다.');
});
}




signupForm.addEventListener('submit', signupFunc)

logImg.addEventListener('click',()=>{ //로고클릭시 메인페이지이동
  window.location.href ='https://port-0-king-of-mine-1093j2alg6lmfjz.sel3.cloudtype.app/'
})

