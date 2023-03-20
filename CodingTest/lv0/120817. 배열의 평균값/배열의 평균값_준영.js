const solution = numbers =>{
    let result = numbers.reduce((a,b) => a+b)
    return result/=numbers.length
}
