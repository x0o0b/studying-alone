#include <stdio.h>

void main() {
    int score[] = {91, 86 ,97};
    char grade[] = {'A', 'B', 'A'};
    for (int i = 0; i < 3; i++)
    {
        printf("%d�г� : ���� = %d ��� = %c \n", i+1, score[i], grade[i]);
    }
    
}