function solution(left, right) {
    let arr = []
    let inarr=[]
    let arrLeng =[]
    var answer = 0;
    for(let i =left;i<=right;i++){
        inarr.push(i)
        for(let j=1 ; j<=i; j++){
            if(i%j ===0){
                arr.push(i)
            }
        }
        arrLeng.push(arr.filter(item => i===item).length)
        // console.log(arrLeng)
    }
    for (let z = 0; z < arrLeng.length; z++){
        arrLeng[z] % 2 === 0 ? answer += inarr[z] : answer -=inarr[z]
        console.log(answer)
    }
    
    return answer;
}