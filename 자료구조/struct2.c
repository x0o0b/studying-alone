#include <stdio.h>

struct Sungjuck
{
    char name[10];
    int korean;
    int math;
    int py;
};


void main() {
    struct Sungjuck kim = {"���Ѽ�", 100, 95};
    struct Sungjuck park = {"���¼�", 90, 80};
    struct Sungjuck che = {"���¾�", 77, 20};
    printf("%s, ����=%d, ����=%d, ����=%d, ���=%d\n",kim.name, kim.korean, kim.math, park.korean+park.math, (kim.korean+kim.math)/2);
    printf("%s, ����=%d, ����=%d, ����=%d, ���=%d\n",park.name, park.korean, park.math, park.korean+park.math, (park.korean+park.math)/2);
    printf("%s, ����=%d, ����=%d, ����=%d, ���=%d\n",che.name, che.korean, che.math, che.korean+che.math, (che.korean+che.math)/2);
}