#include <stdio.h>
#include <stdlib.h>

typedef struct NODE
{
    int data;
    struct NODE * link;
}NODE;

void INSERT (NODE *prev, int data) {
    NODE * InsNode = NULL;
    InsNode = (NODE*)malloc(sizeof(NODE));
    InsNode -> data = data;

    InsNode -> link = prev -> link;

    prev -> link = InsNode;
}

void DELETE (NODE *prev) {
    NODE * DelNode = prev -> link;
    prev -> link = DelNode -> link;

    free(DelNode);
}

void TRAVERSE (NODE *pointer) {
    printf("%d ", pointer -> data);
    if(pointer -> link!= NULL) {
        TRAVERSE(pointer->link);
    }
}

void main() {
    NODE *head = NULL, *p = NULL;
    head = (NODE*)malloc(sizeof(NODE));
    head -> data = 0;
    head -> link = NULL;
    p = head;
    INSERT(p, 10);
    p = p -> link;
    INSERT(p, 20);
    INSERT(p, 30);
    DELETE(p);
    TRAVERSE(head);
}