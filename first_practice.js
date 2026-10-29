var letter=23456;
console.log(letter);
console.log(typeof letter);//to check the data type of the variable

var String="Testing practice";  
console.log(String);
console.log(typeof String);//to check the data type of the variable

var Number=295;
console.log(Number);
console.log(typeof Number);//to check the data type of the variable

var bigint=Number.MAX_SAFE_INTEGER;
console.log(bigint);//to check the maximum safe integer value in JavaScript

var bigint1=9007199254740991;
console.log(bigint1);
console.log(typeof bigint1);//without using BigInt, the maximum safe integer is 9007199254740991

var bigint2=9007199254740992n;
console.log(bigint2);
console.log(typeof bigint2);//with using śBigInt, the maximum safe integer is 9007199254740992n

var bigint3=9007199254740996n;
console.log(bigint3);
console.log(typeof bigint3);//with using BigInt, the maximum safe integer is 9007199254740996n

var undefinedvalues;
console.log(undefinedvalues);
console.log(typeof undefinedvalues);//to check the data type of the variable

var nullvalues=null;
console.log(nullvalues);
console.log(typeof nullvalues);//typeof null returns "object" because of a historical bug in JavaScript

var Addingtwobigint=bigint2+bigint3;
console.log(Addingtwobigint);
console.log(typeof Addingtwobigint);// to add two BigInt values, the result will also be a BigInt