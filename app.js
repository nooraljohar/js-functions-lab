
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


//Exercise 3: isCharAVowel()

const isCharAVowel = (char) => {
    if (char === a || char === e || char === i || char === o ||char === u) {
        return "true";
    } else {
        return "false";
    }
}


//Exercise 4: generateEmail()

const generateEmail = (name,domain) => {
    return `${name}@${domain}`;
}


//Exercise 5: greetUser()
const greetUser = (name,time) => {
    return `Good ${timeOfDay}, ${name}!`;
}

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
}

//Exercise 7: calculateTip()

const calculateTip = (bill ,tpercent ) =>
{
    return (bill*tpercent)/100 ;
}


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

//Exercise 10: calculateGrade()
cont calculateGrade = (grade) =>
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
    
//Exercise 11: createUsername()

const creatUsername = (fname,lname) => {
    
}


