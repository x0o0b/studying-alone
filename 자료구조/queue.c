#include <stdio.h>
#define MAX 10
int QUEUE[MAX] = {0};
int front = -1, rear = -1;
int ADD(int value){
    if(rear >= MAX - 1) {
        printf("QUEUE OVERFLOW!\n");
        return 0;
    }
    QUEUE[++rear] = value;
    return 0;
}
int DELETE() {
    if ( front >= rear )
    {
        printf("QUEUE UNDERFLOW!\n");
        return 0;
    }
    printf("DELETE %d\n", QUEUE[++front]);
    return 0;
}
int PRINT() {
    int i;
    for ( i = front + 1; i <= rear; i++)
    {
        printf("QUEUE[%d]= %d \n", i, QUEUE[i]);
    }
}

int main() {
    ADD(10);
    ADD(20);
    ADD(30);
    PRINT();
    DELETE();
    ADD(40);
    PRINT();
}