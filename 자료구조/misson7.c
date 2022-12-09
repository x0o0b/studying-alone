#include <stdio.h>
#include <stdlib.h>

typedef struct score
{
    char a;
    struct score * sp;
}STU;
void main() {
    STU *first = (STU*)malloc(sizeof(STU));
    STU *next = (STU*)malloc(sizeof(STU));
    first->a = 10;   
    first->sp = NULL;   
    next->a = 20;
    first->sp = next;
    printf("first=%d\n", first->a);   
    printf("next=%d\n", first->sp->a);   
}