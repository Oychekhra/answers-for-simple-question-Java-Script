// Question 1  
// Temperature Converter:
// Write a function convertTemperature that takes two arguments: 
// 1)a temperature value and 2)a string indicating the unit of the temperature ("C" for Celsius or "F" for Fahrenheit). 
// Inside convertTemperature, use if function to perform the conversion based on the unit provided. 
// If the unit is "C", convert the temperature to Fahrenheit, and if the unit is "F", convert it to Celsius. Return the converted temperature

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ikki argumentni qabul qiluvchi convertTemperature funksiyasini yozing:
// 1) harorat qiymati va 2) harorat birligini ko'rsatadigan unit (Celcius uchun "C" yoki Fahrenheit uchun "F").
// if funktsiyasidan yordamida berilgan malumotni ozgartiring
// Agar birlik "C" bo'lsa, haroratni Farengeytga aylantiring va "F" bo'lsa, uni Selsiyga aylantiring. O'zgartirilgan haroratni korsating
// formula
// from F to C ((F − 32) × 5/9 =C)
// from C to F((C × 9/5) + 32 =F)

// Answer
// function convertTemperature(temperature, unit){
//     let newtemp=0
//     if(unit==='C'){
//         newtemp=(temperature*(9/5))+32
//         console.log(temperature, unit,"=",newtemp,"F")
//     }
//     else if(unit==='F'){
//         newtemp=(temperature-32)*(5/9)
//         console.log(temperature, unit,"=",newtemp,"C")
//     }
//     else{
//         console.log("Invalid input")
//     }
// }

// convertTemperature(33,'C')
// convertTemperature(32, 'F')

// -----------------------------------------------------------------------------------------------------------------------------------------

// Question 2 
// Shipping Cost Calculator:
// Implement a function calculateShippingCost that calculates the shipping cost based on the weight of the package and the destination. 
// The function should take two arguments: 
// 1)the weight of the package and 2)a string indicating the destination ("domestic" or "international"). 
// Inside calculateShippingCost, define nested functions to calculate the shipping cost based on weight and destination. 
// If the weight is over a certain threshold, apply an additional fee. Return the total shipping cost.

// Ps: 
// fee for domestic flight is 5000 up to 10kg, additional fee after 10kg for each kg is 2000
// fee for international flight is 10000 up to 10kg, additional fee after 10kg for each kg is 4000

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Yuk tashish narxini yuk og'irligi va belgilangan manzilga qarab hisoblab chiqadigan "CallShippingCost" funktsiyasini amalga oshiring.
// Funktsiya ikkita argumentni qabul qilishi kerak:
// 1) yuk og'irligi va 2) manzil ("ichki" yoki "xalqaro").
// calculateShippingCost ichida yuk tashish narxini vazn va belgilangan joyga qarab hisoblash uchun ichki funksiyalarni belgilang.
// Agar vazn ma'lum bir chegaradan oshsa, qo'shimcha to'lovni qo'llang. Jami yuk narxini qaytaring.

// Ps:
// ichki reys uchun to'lov  10 kg gacha 5000, 10kgdan oshgan har bir kg uchun qo'shimcha to'lov 2000
// xalqaro parvoz uchun to'lov 10 kg gacha 10000, 10kgdan oshgan  har bir kg uchun qo'shimcha to'lov 4000

// Answer 2
// function calculateShippingCost(weight, destination) {

//     if (destination==='domestic'){
//         var additionalcost=0
//         if (weight <= 10) {
//             return 'The cost is 5000';
//         } 
//         else {
//             additionalcost=(weight-10)*2000+ 5000
//             return 'The cost is '+ additionalcost;
//         }
//     }

//     else if(destination==='international') {
//         var additionalcost2=0
//         if (weight <= 10) {
//             return 'The cost is 10000';
//         } 
//         else {
//             additionalcost2=(weight-10)*4000+ 10000
//             return  'The cost is '+additionalcost2;
//         }
//     }
//     else{
//         return'Invalid input'
//     }
// }

// console.log(calculateShippingCost(8, "domestic"));
// console.log(calculateShippingCost(15, "international"));

// -----------------------------------------------------------------------------------------------------------------------

// question 3

// Write a function printMultiplicationTable that takes an integer n as input 
// and prints the multiplication table of n up to 10. Use a for loop to iterate from 1 to 10 and 
// print each multiplication result.

// ////////////////////////////////////////////////////////////////////////////////////////////////////////

// n sonini qabul qiladigan printMultiplicationTable funksiyasini yozing.
// va n sonini 10gacha kopaytirib natichanisini korsating
//  1 dan 10 gacha takrorlash uchun for loopdan  foydalaning va har bir ko‘paytirish natijasini chop eting.

// answer
// function printMultiplicationTable(n) {
//     for (let i = 1; i <= 10; i++) {
//         console.log( n,'*', i,'=', n * i)
//     }
// }

// printMultiplicationTable(5);

// ---------------------------------------------------------------------------------------------------------------------

// question 4
// Write a function called findAllNumbers that takes an integer n as input. 
// The function should find and print all numbers which can dividable by 3 up to and including the given number n. 

// ///////////////////////////////////////////////////////////////////////////////////////////////

// n butun sonini oladigan findAllNumbers funksiyasini yozing.
//  Funktsiya berilgan n sonigacha bo'lgan barcha 3ga bolinuvchi sonlarni topishi va chop etishi kerak.

// answer

// function findAllNumbers(n) {
//             for (let i = 2; i <= n; i++) {
//                 if (i % 3 == 0) {
//                     console.log(i)
//                 }
//             }
        
// }
// findAllNumbers(20);

// ----------------------------------------------------------------------------------------------------------------

// Question 5
// Write a function called getDayName that takes an integer dayNumber as input 
// representing a day of the week (1 for Sunday, 2 for Monday, and so on). 
// The function should return the name of the day corresponding to the given dayNumber. 
// Implement the function using a switch statement.

// /////////////////////////////////////////////////////////////////////////////////////////////

// Hafta kunini ifodalovchi getDayName funksiyasini yozing. 
// Funktsiya berilgan kun raqamiga mos keladigan kun nomini qaytarishi kerak. 
// (1-yakshanba, 2-dushanba, va hokazo)
// Switch  yordamida funktsiyani amalga oshiring.

// Answer
// function getDayName(dayNumber) {
//     let dayName;
//     switch (dayNumber) {
//         case 1:
//             dayName = "Sunday";
//             break;
//         case 2:
//             dayName = "Monday";
//             break;
//         case 3:
//             dayName = "Tuesday";
//             break;
//         case 4:
//             dayName = "Wednesday";
//             break;
//         case 5:
//             dayName = "Thursday";
//             break;
//         case 6:
//             dayName = "Friday";
//             break;
//         case 7:
//             dayName = "Saturday";
//             break;
//         default:
//             dayName = "Invalid day number";
//     }
//     return dayName;
// }

// console.log(getDayName(1)); // Should output "Sunday"
// console.log(getDayName(5)); // Should output "Thursday"
// console.log(getDayName(8)); // Should output "Invalid day number"

// question 6
//  Write a function called calculate that takes three arguments: two numbers (num1 and num2) and an operator (op). 
//  The function should perform the arithmetic operation indicated by the operator on the two numbers and return the result. 
//  Implement the function using a switch statement where the operator can be one of the following: "+", "-", "*", "/". 
//  If an invalid operator is provided, the function should return "Invalid operator".

//  //////////////////////////////////////////////////////////////////////////////

// Uchta argumentni: ikkita raqamni (num1 va num2) va operatorni (op) oladigan calculate  deb nomlangan funktsiyani yozing. 
// Funktsiya operator tomonidan ikkita raqam yordamida  ko'rsatilgan arifmetik amalni bajarishi va natijani qaytarishi kerak.
//  Operator quyidagilardan biri ("+", "-", "*", "/")bo'lishi mumkin bo'lgan funktsiyani switch iborasi yordamida amalga oshiring.
//   Agar noto'g'ri operator taqdim etilsa, funktsiya "Invalid operator" ni qaytarishi kerak.

// answer

// function calculate(num1, num2, op) {
//     let result;
//     switch (op) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             result = "Invalid operator";
//     }
//     return result;
// }

// console.log(calculate(5, 3, "+")); 
// console.log(calculate(10, 2, "*"));
// console.log(calculate(8, 4, "/")); 
// console.log(calculate(7, 2, "-")); 
// console.log(calculate(10, 3, "%")); 

