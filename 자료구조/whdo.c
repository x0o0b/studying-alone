#include <stdio.h>

void main(){
    int num = 0;
    while (num<5)
    {
        printf("�ݺ� ���� : %d \n", num);
        num++;
    }
    printf("�ݺ����� ������ �� : %d \n", num);

    int num1 = 10;
    do
    {
        printf("%d",num1);
        num++;
    } while (num1<10);
    printf("\n **while ���� �����մϴ�.**");
    return 0;
}