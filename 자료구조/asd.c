#include <stdio.h>

void main(){
    int kor, eng, math, total;
    float avg;

    printf("���������� : ");
    scanf("%d", &kor);

    printf("���������� : ");
    scanf("%d", &eng);

    printf("���������� : ");
    scanf("%d", &math);

    total = kor + eng + math;
    avg = total / 3;

    printf("������ : %d ", total);
    printf("����� : %f", avg);

} 