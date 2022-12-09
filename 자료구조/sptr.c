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
    struct employee Lee = {"이진호", 2014, 4200}; 
    struct employee *p = &Lee;
    strcpy(p->name, "이순신"); //기존 문자열을 바꿀 때는 strcpy()를 사용한다.
    (*p).year = 2015;
    p->pay = 5900;

    printf("이름 : %s\n입사 : %d\n연봉 : %d\n\n", Lee.name, Lee.year, Lee.pay);

    struct employee *sptr = (struct employee*)malloc(sizeof(struct employee));
    strcpy(sptr->name, "이한"); //기존 문자열을 바꿀 때는 strcpy()를 사용한다.
    sptr->year = 2022;
    sptr->pay = 8000;

    printf("이름 : %s\n입사 : %d\n연봉 : %d\n\n", sptr->name, sptr->year, sptr->pay);
}