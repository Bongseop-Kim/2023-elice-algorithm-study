function solution(my_string) {
    let str =""
    let boolean = 0;
    for(i of my_string){
        if(i%1===0){
            str=str+i
            boolean=1;
        }
        else{
            str=str+" "
        }
    }
    
    console.log(str)
    str=str.split(" ").filter((v)=>v!="")
    console.log(str)
    if(boolean===0){
        return 0
    }else{
        return str.reduce((ac,cur)=>ac/1+cur/1,0)
    }
    
}