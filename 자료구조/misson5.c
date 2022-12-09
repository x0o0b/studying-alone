#include <stdio.h>

struct score
{
    double math;
    double english;
    double total;
};

void sum(struct score *sp){
    sp -> total = sp -> math + sp -> english;
}

void main(){
    struct score s1 = {50, 80, 0};
    sum(&s1);
    printf("รัมก =%f\n",s1.total);
}