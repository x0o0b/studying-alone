#include <stdio.h>

void main(){
    int kor, eng, math, total;
    float avg;

    printf("국어점수는 : ");
    scanf("%d", &kor);

    printf("영어점수는 : ");
    scanf("%d", &eng);

    printf("수학점수는 : ");
    scanf("%d", &math);

    total = kor + eng + math;
    avg = total / 3;

    printf("총합은 : %d ", total);
    printf("평균은 : %f", avg);

} 