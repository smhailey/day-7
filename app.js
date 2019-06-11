// let chewyGranolaBar = {
//   title: 'Chewy Granola Bar',
//   description: 'Chewy Granola Bar',
//   ingredients: [
//     {
//       name: 'granola'
//     },
//     {
//       name: 'semisweetChocolateChips'
//     },
//     {
//       name: 'cornSyrup'
//     },
//     {
//       name: 'brownRiceCrisp'
//     },
//     {
//       name: 'invertSugar'
//     },
//     {
//       name: 'sugar'
//     },
//     {
//       name: 'cornSyrupSolids'
//     },
//     {
//       name: 'glycerin'
//     },
//     {
//       name: 'soybeanOil'
//     },
//   ],
//   nutritionFacts: {
//     servingSize: '1 bar',
//     calories: 130,
//     totalFat: 5
//   }
// }

// chewyGranolaBar.nutritionFacts.totalFat
// chewyGranolaBar.ingredients[0]
// console.log(chewyGranolaBar)


//switch statements
// let fruit = 'Apple'
// let orangeCount = 0
// switch (fruit) {
//   case 'orange':
//     orangeCount++
//     console.log('Orange plus 1')
//     break;
//   case 'apple':
//     console.log('Apple plus 1')
//debugger   //debugger!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     break;
//   case 'banana':
//     console.log('Banana plus 1')
//     break;
//   default:
//     console.log('no fruit')
// }


//loops
// for (let count = 1; count < 10; count++) {
//   console.log(count)
// }



// let count = 1
// while (count <= 10) {
//   console.log(count)
//   count++
// }


// let count = 1
// do {
//   console.log(count)
//   count++
// }
// while (count <= 10)



// function sumOfTwoNumbers(num1, num2) {
//   console.log(num1 + num2)
// }
// let number1 = +prompt('First number?')
// let number2 = +prompt('Second number?')
// sumOfTwoNumbers(number1, number2)



//arrays
// let numbers = [23, 52, 67, 91, 200]
// console.log(numbers)
// console.log(numbers[0])
// console.log(numbers.length)
// console.log(numbers[numbers.length - 1])
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }



let people = [
  {
    name: "Mark"
  },
  {
    name: "Darryl"
  },
  {
    name: "Kenny"
  },
]
let newPerson = {
  name: "Jake"
}
let brittany = {
  name: "Brittany"
}
people.push(newPerson)
people.push({ name: "Zach" }, brittany)
for (let i = 0; i < people.length; i++) {
  let person = people[i]
  console.log(person.name)
}



