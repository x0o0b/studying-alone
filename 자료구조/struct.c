#include <stdio.h>

struct employee
    {
        char name[10];
        int year;
        int pay;
    };

void main() {
    struct employee ho = { "이진호", 2014, 4200 };
    struct employee yung = { "이한영", 2015, 3300 };
    struct employee one = { "이상원", 2015, 3500 };
    struct employee bum = { "이상범", 2016, 2900 };

    printf("이름 : %s\n입사 : %d\n연봉 : %d\n\n", ho.name, ho.year, ho.pay);
    printf("이름 : %s\n입사 : %d\n연봉 : %d\n\n", yung.name, yung.year, yung.pay);
    printf("이름 : %s\n입사 : %d\n연봉 : %d\n\n", one.name, one.year, one.pay);
    printf("이름 : %s\n입사 : %d\n연봉 : %d\n\n", bum.name, bum.year, bum.pay);
    
    
}