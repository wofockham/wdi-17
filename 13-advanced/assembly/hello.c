#include <stdio.h>

int add (int a, int b) {
  return a + b;
}

/* Multi
   line
   comment */

int main () {
  int result = add(7, 25);
  printf("The result is %d\n", result);
  printf("Hello world\n");
  return 0; // Everything is okay.
}
