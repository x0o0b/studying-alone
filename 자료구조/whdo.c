#include <stdio.h>

void main(){
    int num = 0;
    while (num<5)
    {
        printf("반복 내용 : %d \n", num);
        num++;
    }
    printf("반복문을 종료한 후 : %d \n", num);

    int num1 = 10;
    do
    {
        printf("%d",num1);
        num++;
    } while (num1<10);
    printf("\n **while 문을 종료합니다.**");
    return 0;
}