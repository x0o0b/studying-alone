#include <stdio.h>

struct student
{
    char no[10];
    char name[20];
    double math;
    double english;
    double total;
};

int main(void) {
    struct student stu1 = {"20101323", "Park", 80, 80, 0};
    struct student stu2 = {"20101324", "Kim", 95, 85, 0};
    struct student stu3 = {"20101325", "Lee", 100, 90, 0};

    stu1.total = stu1.english + stu1.math;
    stu2.total = stu2.english + stu2.math;
    stu3.total = stu3.english + stu3.math;
    
    printf("학번: %s\n이름: %s\n총점: %.lf\n\n",stu1.no, stu1.name, stu1.total);
    printf("학번: %s\n이름: %s\n총점: %.lf\n\n",stu2.no, stu2.name, stu2.total);
    printf("학번: %s\n이름: %s\n총점: %.lf\n\n",stu3.no, stu3.name, stu3.total);
}