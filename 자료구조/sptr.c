#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct employee
{
    char name[10];
    int year;
    int pay;
};

void main(){
    struct employee Lee = {"����ȣ", 2014, 4200}; 
    struct employee *p = &Lee;
    strcpy(p->name, "�̼���"); //���� ���ڿ��� �ٲ� ���� strcpy()�� ����Ѵ�.
    (*p).year = 2015;
    p->pay = 5900;

    printf("�̸� : %s\n�Ի� : %d\n���� : %d\n\n", Lee.name, Lee.year, Lee.pay);

    struct employee *sptr = (struct employee*)malloc(sizeof(struct employee));
    strcpy(sptr->name, "����"); //���� ���ڿ��� �ٲ� ���� strcpy()�� ����Ѵ�.
    sptr->year = 2022;
    sptr->pay = 8000;

    printf("�̸� : %s\n�Ի� : %d\n���� : %d\n\n", sptr->name, sptr->year, sptr->pay);
}