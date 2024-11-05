
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
        return (temp * 9/5) + 32;
        } else  if ( unit === 'F'){
            return (temp - 32) * 5/9;
        } else {
            return 'invalid scale';
        }
    }

    console.log('Exercise 8 Result:', convertTemperature(32, "C"));
    
    //node app.js

//Exercise 9: basicCalculator()
const basicCalculator = (num1,num2,operation) =>
        {
            if (operation === 'add') {
                return num1 + num2;
              } else if (operation === 'subtract') {
                return num1 - num2;
              } else if (operation === 'multiply') {
                return num1 * num2;
              } else if (operation === 'divide'){
                return num1 / num2;
              }
    }
    console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

//Exercise 10: calculateGrade()
const calculateGrade = (grade) =>
    {
        if (grade >= 90){
            return "A";
        } else if(grade < 90 && grade > 79){
            return "B"; 
        } else if (grade < 80 && grade>69) {
            return "C";  
        } else if (grade < 70 && grade>59){
            return "D";
        }else {
            return "F";
        }
    }
    
    console.log('Exercise 10 Result:', calculateGrade(85));

    //Exercise 11: createUsername()

const createUsername = (fname,lname) => {
    const threef = fname.slice(0, 3);
  const threel = lname.slice(0, 3);
  const length = fname.length + lname.length;
  return threef+threel+length;
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));
