// let cenatovara = 100; 
// const procent = 10;
// const day = 7;

// for (let i = 0; i < day; i++)  { 
//     cenatovara += cenatovara * procent / 100     
// }

// console.log("cenatovara:", cenatovara.toFixed(2),"рублей");

/////////////////////////////////////////////////////////////////////////
// function Pob(a, b) {
//     console.log(a + b);
//     Pob(a, b);

// }

// Pob(2, 3);

// let clasCount = 0;

// let boolion = true;

// while(clasCount < 12){
//     if(clasCount == 13){
//         clasCount = clasCount + 1
//         break;
//     }

//     clasCount = clasCount + 1;

//     console.log(clasCount);

//     if (clasCount == 12){
//         boolion = false;
//     }
// }
///////////////////////////////////////////////////////

// let num = 123;
// let reversed = 0;

// function reverse(num, reversed = 0) {
//     if (num === 0) {
//         return reversed;
//     }
//     return reverse(Math.floor(num / 10),
//         reversed * 10 + num % 10);
// };
// console.log(reverse(num, reversed = 0));

// function Reverse(number) {
//     number = String(number)
//     number = number.split('').reverse().join('')
//     number = Number(number);
//     return number;
// }

// console.log(Reverse(789));

////////////////////////////////////////////////////////

// function isPalindrome(input) {
//     input = String(input)
//     input = input.replace(/\s+/g, '').toLowerCase();


//     for (let i = 0; i < input.length / 2; i++) {
//         if(input[i] != input[input.length -1 -i]){
//             console.log(input)
//             return false
//         }
//     }
//     console.log(input)
//     return true
// }

// console.log(isPalindrome("А роза упала на лапу Азора"));
// console.log(isPalindrome("Аргентина манит негра"));
// console.log(isPalindrome(123321));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("topot"));
// console.log(isPalindrome("valav"));

// let name = "А роза упала на лапу Азора";

// console.log(name[name.length - 1 - 3]);

/////////////////////////////////////////////////////////

// function longest(str) {
//   str = "This is Git-Hub";
//   let words = str.split(' ');
//   let longest = '';

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i];
//     }
//   }
//   return longest;
// }

// console.log(longest("This is Git-Hub"));

/////////////////////////////////////////////////////////

const git = [3, 4, 1, 7, 2, 6, 5,];
let max = 0;
for (let i = 1; i < git.length; i++) {
  if (git[i] > max) {
    max = git[i];
  }
}
console.info(max);