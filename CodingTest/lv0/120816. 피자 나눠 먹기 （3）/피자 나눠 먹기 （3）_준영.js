
const solution = (slice, n) =>{
     var answer = 0;
    n%slice ===0 ? answer = n/slice
    :n%slice !==0 ? answer = Math.ceil (n/slice):null
        
    return answer;
}