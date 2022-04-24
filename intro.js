// print
console.log("Hello Js :)");
// undefined;
// Js only tells you that is a variable
let a;
a = 10;
a = 10.1;
a = "Hello Iam a string";
a = "Hello Iam also a string";
a = null;
console.log("variable contains", a);
a = true;
// // Js -> Java, c++, c
let number = 10;
for (let i = 1; i <= number; i++) {
  console.log("Number is", i);
}

// is prime
let number = 23;
let flag = true;
for (let div = 2; div < number; div++) {
  if (number % div == 0) {
    flag = false;
    break;
  }
}
if (flag == true) {
  console.log(number, " is prime");
} else {
  console.log(number, " is not prime");
}
