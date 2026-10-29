var number = -9;

 if (number === 0) {
    console.log("The number is zero.");
}

else if (number % 2 === 0 && number>=0) {

    console.log("The number is even and positive number.");
} 
else if (number % 2 !== 0 && number>=0) {
    console.log("The number is odd and positive number.");
}
else if (number % 2 === 0 && number<=0) {

    console.log("The number is even and negative number.");
} 
else if (number % 2 !== 0 && number<=0) {
    console.log("The number is odd and negative number.");
}

