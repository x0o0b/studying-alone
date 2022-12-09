#include <stdio.h>

struct Sungjuck
{
    char name[10];
    int korean;
    int math;
    int py;
};


void main() {
    struct Sungjuck kim = {"김한세", 100, 95};
    struct Sungjuck park = {"박태수", 90, 80};
    struct Sungjuck che = {"최태양", 77, 20};
    printf("%s, 국어=%d, 수학=%d, 총점=%d, 평균=%d\n",kim.name, kim.korean, kim.math, park.korean+park.math, (kim.korean+kim.math)/2);
    printf("%s, 국어=%d, 수학=%d, 총점=%d, 평균=%d\n",park.name, park.korean, park.math, park.korean+park.math, (park.korean+park.math)/2);
    printf("%s, 국어=%d, 수학=%d, 총점=%d, 평균=%d\n",che.name, che.korean, che.math, che.korean+che.math, (che.korean+che.math)/2);
}