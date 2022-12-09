#include <stdio.h>
#include <string.h>
struct student
{
    char no[10];
    char name[20];
};

int main(void){
    int i = 0;
    struct student stu;
    strcpy(stu.no, "20101323");
    strcpy(stu.name, "Park");
    printf("학번: %s, 이름: %s\n", stu.no, stu.name);
    
}
