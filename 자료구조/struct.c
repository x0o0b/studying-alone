#include <stdio.h>

struct employee
    {
        char name[10];
        int year;
        int pay;
    };

void main() {
    struct employee ho = { "����ȣ", 2014, 4200 };
    struct employee yung = { "���ѿ�", 2015, 3300 };
    struct employee one = { "�̻��", 2015, 3500 };
    struct employee bum = { "�̻��", 2016, 2900 };

    printf("�̸� : %s\n�Ի� : %d\n���� : %d\n\n", ho.name, ho.year, ho.pay);
    printf("�̸� : %s\n�Ի� : %d\n���� : %d\n\n", yung.name, yung.year, yung.pay);
    printf("�̸� : %s\n�Ի� : %d\n���� : %d\n\n", one.name, one.year, one.pay);
    printf("�̸� : %s\n�Ի� : %d\n���� : %d\n\n", bum.name, bum.year, bum.pay);
    
    
}