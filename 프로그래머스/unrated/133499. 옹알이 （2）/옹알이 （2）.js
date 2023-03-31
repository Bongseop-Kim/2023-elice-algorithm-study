function solution(babbling) {
    const babDiction = [ "aya", "ye", "woo", "ma"];
    for(i of babDiction){
        babbling=babbling.map((v)=>v.split(i+i).join("***"))
    }
    for(i of babDiction){
        babbling=babbling.map((v)=>v.split(i).join(" "))
    }
    console.log(babbling)
    return  babbling.map((v)=>v.trim()).filter(v=> v==="").length;
}