#include <stdio.h>

int gugu(int a){
    for (int i = 1; i < 10; i++)
    {
        printf("%d * %d = %d \n", a, i, a*i);
    }
    
}

int main(void) {
    int scan = 0;
    scanf("%d", &scan);
    gugu(scan);
}