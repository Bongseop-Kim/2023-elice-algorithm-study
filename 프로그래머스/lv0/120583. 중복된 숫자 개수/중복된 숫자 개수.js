function solution(array, n) {
    var count=0 ;
    for(i of array){
        if(i===n){
            count++;
        }
    }
    return count;
}