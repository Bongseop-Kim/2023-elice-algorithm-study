function solution(board) {
    const width = board[0].length
    const heigt = board.length
    let count = 0;
    for(let i = 0; i<heigt; i++){
        for(let j=0; j<width; j++){
            if(board[i][j]===1){
                if(i-1>=0 &&board[i-1][j]!==1){  //배열 밖으로 안나가면서, 바꾸는곳이 1이 아니면 지뢰 2로
                    board[i-1][j]=2
                } if(i-1>=0 &&j+1 <width &&board[i-1][j+1]!==1){
                    board[i-1][j+1]=2 
                } if(i-1>=0 &&j-1>=0 &&board[i-1][j-1]!==1){ 
                    board[i-1][j-1]=2
                } if(j+1 <width &&board[i][j+1]!==1){
                    board[i][j+1]=2
                } if(j-1>=0&&board[i][j-1]!==1){
                    board[i][j-1]=2
                } if(j-1>=0 &&i+1 <heigt &&board[i+1][j-1]!==1){
                    board[i+1][j-1]=2
                } if(i+1 <heigt &&board[i+1][j]!==1){
                    board[i+1][j]=2
                } if(i+1 <heigt &&j+1 <width &&board[i+1][j+1]!==1){
                    board[i+1][j+1]=2
                }
            }
        }
    }
    for(let i = 0; i<heigt; i++){
        for(let j=0; j<width; j++){
            if(board[i][j]===0){
                count++;
            }
        }
    }
    
    return count;
}