function solution(s) {
    let answer=[];
    for(let i = 0; i<s.length; i++){
        if(s[i]%1===0){
            answer.push(s[i]);
        }
        else if(s.slice(i,i+3)==="one"){
            answer.push(1);
            i=i+2;
        }
        else if(s.slice(i,i+3)==="two"){
            answer.push(2);
            i=i+2;
        }
        else if(s.slice(i,i+3)==="six"){
            answer.push(6);
            i=i+2;
        }
        else if(s.slice(i,i+4)==="zero"){
            answer.push(0);
            i=i+3;
        }
        else if(s.slice(i,i+4)==="nine"){
            answer.push(9);
            i=i+3;
        }
        else if(s.slice(i,i+4)==="five"){
            answer.push(5);
            i=i+3;
        }
        else if(s.slice(i,i+4)==="four"){
            answer.push(4);
            i=i+3;
        }
        else if(s.slice(i,i+5)==="three"){
            answer.push(3);
            i=i+4;
        }
        else if(s.slice(i,i+5)==="seven"){
            answer.push(7);
            i=i+4;
        }
        else if(s.slice(i,i+5)==="eight"){
            answer.push(8);
            i=i+4;
        }
    }
    return answer.join("")/1;
}