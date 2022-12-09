#include <stdio.h>

struct health
{
    int no;
    float height;
    float weight;
    int time;
    char st[10];
};

void main() {
    
    struct health kim = {1, 182.8, 75.3, 3};
    struct health lee = {2, 157.2, 62.1, 0};
    struct health park = {3, 173.5, 53.8, 2};
    
    

    printf("NO = %d\n키 = %.1f\n몸무게 = %.1f\n", kim.no, kim.height, kim.weight);
    if(kim.time >= 3) {
        printf("건강상태 : 양호\n\n");
    } else {
        printf("건강상태 : 주의\n\n");
    }
    
    printf("NO = %d\n키 = %.1f\n몸무게 = %.1f\n", lee.no, lee.height, lee.weight);
    if(lee.time >= 3) {
        printf("건강상태 : 양호\n\n");
    } else {
        printf("건강상태 : 주의\n\n");
    }

    printf("NO = %d\n키 = %.1f\n몸무게 = %.1f\n", park.no, park.height, park.weight);
    if(park.time >= 3) {
        printf("건강상태 : 양호\n\n");
    } else {
        printf("건강상태 : 주의\n\n");
    }
}