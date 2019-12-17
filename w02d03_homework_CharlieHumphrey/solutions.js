// What is the difference between a parameter and an argument?
// An argument is the input and the paramet is how the argument(input) is shown in the function

// Within a function, what is the difference between return and console.log?
// Return will send the value of your function and stop the function. Console.log displayso on the console

// Palindrome //
const reverseString = (string) => {
    let lowCaps = string.toLowerCase(); // makes all letters in string lower case
    let splitString =lowCaps.split(''); // makes each letter in the string an array
    let reverseArray = splitString.reverse(''); // reverses the array
    let joinArray = reverseArray.join(''); // brings it all together in a string
    return joinArray === lowCaps // compare the new array and string
}

console.log(reverseString("tacocat"));
console.log(reverseString("Radar"));
console.log(reverseString("Borscht"));

// Sum Array //
const sumArray = (num) => {
    let sum = 0 
    for(i = 0; i <= num.length; i++) {
        sum += num[i] //loop through array and add to sum
    }
return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));


