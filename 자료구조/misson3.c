#include <stdio.h>
struct employee
{
    char name[10];
    int year;
    int pay;
};

void main(){
    struct employee kim = {"susan",2014,4300};
    struct employee *Sptr = &kim;
    printf("�̸�:%s\n", kim.name);
    printf("�⵵:%s\n", Sptr->year);
    printf("����:%s\n", Sptr->pay);

}
