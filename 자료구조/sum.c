#include <stdio.h>

int sum(int x, int y) {
    int result = 0;
    result = x + y;
    return result;
}

int sub(int x, int y) {
    int result = 0;
    result = x - y;
    return result;
}

int main (void) {
    int answer = 0;
    int answer1 = 0;
    answer = sum(3, 4);
    answer1 = sub(5, 3);
    printf("%d \n", answer);
    printf("%d \n", answer1);

    return 0;
}