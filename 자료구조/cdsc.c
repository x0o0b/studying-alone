#include <stdio.h>
 void main() {
    char name[3][10] = {"John", "Mike", "jeny"};
    int score[3][5] = {{90, 80, 70, 50},{60,20,45,60},{100,60,90,80}};
    for (int i = 0; i < 3; i++)
    {
        int total = 0;
        // for (int j = 0; j < 4; j++)
        // {
        //     printf("%c",name[i][j]);
        // }235
        printf("%s",name[i]);
        for (int j = 0; j < 4; j++)
        {
            printf(" %d", score[i][j]);
            total = total + score[i][j];
        }
        
        printf(" ÃÑÁ¡Àº %d \n", total);
        
    }
    
 }