const solution = (n) =>{
     var answer = 0;
    n%7 ===0 ? answer = n/7
    :n%7 !==0 ? answer = Math.ceil (n/7):null
        
    return answer;
}