// convert in into functions
#include <iostream>

using namespace std;

int sum(int a, int b) {
    return a + b;
}

int main() {
    int a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    cout << "Sum is " << sum(a, b);
    return 0;
}