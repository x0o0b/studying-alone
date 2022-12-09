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
    printf("이름:%s\n", kim.name);
    printf("년도:%s\n", Sptr->year);
    printf("연봉:%s\n", Sptr->pay);

}
