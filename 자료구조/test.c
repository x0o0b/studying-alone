#include <stdio.h>

void main() {
    int int1;
    char char1;
    float float1;
    char str[25];

    printf("==========\n");

    printf("���ڸ� �Է��ϼ��� : ");
    scanf("%c", &char1);

    printf("���ڸ� �Է��ϼ��� : ");
    scanf("%d", &int1);

    printf("�Ǽ��� �Է��ϼ��� : ");
    scanf("%f", &float1);

    printf("���ڿ��� �Է��ϼ��� : ");
    scanf("%s", str);

    printf("==========\n");

    printf("������ : %c \n", char1);
    printf("������ : %d \n", int1);
    printf("�Ǽ��� : %f \n", float1);
    printf("���ڿ� : %s \n", str);
};