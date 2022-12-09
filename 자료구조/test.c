#include <stdio.h>

void main() {
    int int1;
    char char1;
    float float1;
    char str[25];

    printf("==========\n");

    printf("문자를 입력하세요 : ");
    scanf("%c", &char1);

    printf("숫자를 입력하세요 : ");
    scanf("%d", &int1);

    printf("실수를 입력하세요 : ");
    scanf("%f", &float1);

    printf("문자열을 입력하세요 : ");
    scanf("%s", str);

    printf("==========\n");

    printf("문자형 : %c \n", char1);
    printf("정수형 : %d \n", int1);
    printf("실수형 : %f \n", float1);
    printf("문자열 : %s \n", str);
};