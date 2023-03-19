class Solution {
    public boolean solution(int x) {
        boolean answer = true;
        int sum=0;
        int a=0;
        int num=x;
        while(x>0){
            a=x%10;
            x=x/10;
            sum= sum+a;
        }
        return (num%sum == 0) ? true:false;
    }
}