
//Exercise 1: maxOfTwoNumbers()

const maxOfTwoNumbers = (num1,num2) => {
if (num1 >= num2){
return num1;
} else {
return num2;
}
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

//Exercise 2: isAdult()

const isAdult = (age) => {
    if (age >= 18){
        return "adult";
    } else {
        return "minor";
    }
    }

    console.log('Exercise 2 Result:', isAdult(21));

//Exercise 3: isCharAVowel()

const isCharAVowel = (char) => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' ||char === 'u') {
        return "true";
    } else {
        return "false";
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

//Exercise 4: generateEmail()

const generateEmail = (name,domain) => {
    return `${name}@${domain}`;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

//Exercise 5: greetUser()
const greetUser = (name,time) => {
    return `Good ${time}, ${name}!`;
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

//Exercise 6: maxOfThree()
const maxOfThree = (num1,num2,num3) => {
    if(num1>num2 && num1>num3){
        return num1;
    } else if (num2>num1 && num2>num3) {
        return num2;
    } else {
        return num3;
    } 
    }
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

//Exercise 7: calculateTip()

const calculateTip = (bill ,tpercent ) =>
    {
        return (bill*tpercent)/100 ;
    }
console.log('Exercise 7 Result:', calculateTip(50, 20));    

//Exercise 8: convertTemperature()
const convertTemperature = (temp,unit) =>
    {
        if (unit === 'C'){
        return (temperature * 9/5) + 32;
        } else  if ( unit === 'F'){
            return (temperature - 32) * 5/9;
        } else {
            return 'invalid scale';
        }
    }

    console.log('Exercise 8 Result:', convertTemperature(32, "C"));
    