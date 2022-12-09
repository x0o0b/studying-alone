#include <stdio.h>

void main() {
    int a = 5;
    char c = 'A';
    int *p = &a;
    char *cp = &c;

    printf("a=%d, a林家=%d\n", a, &a);
    printf("p=%d, *p=%d\n", p, *p);
    printf("c=%c, c林家=%d\n", c, &c);
    printf("cp=%d, *cp=%c\n", cp, *cp);
}