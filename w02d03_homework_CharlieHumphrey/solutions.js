// What is the difference between a parameter and an argument?
// An argument is the input and the paramet is how the argument(input) is shown in the function

// Within a function, what is the difference between return and console.log?
// Return will send the value of your function and stop the function. Console.log displayso on the console

const reverseString = (string) => {
    let lowCaps = string.toLowerCase(); // makes all letters in string lower case
    let splitString =lowCaps.split(''); // makes each letter in the string an array
    let reverseArray = splitString.reverse(''); // reverses the array
    let joinArray = reverseArray.join(''); // brings it all together in a string
    return joinArray === string // compare the new array and string
}

console.log(reverseString("tacocat"));
console.log(reverseString("Radar"));
console.log(reverseString("Borscht"));



