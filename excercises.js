/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()
const array = [10, 20, 40, 500, 12]
array.sort()
console.log(array) // Arranges numbers ascending.

// .concat()
const oldArray = [1, 2, 3]
const newArray = oldArray.concat('a', 'b', 'c')
console.log(newArray) // Creates new array with elements added to the old array.

// .indexOf()
const str = 'sea shells'
let hCount = str.indexOf('h')
console.log(hCount) // Returns 5. The location count of the element h.

// .split()
const str1 = 'she sells sea shells down by the sea shore'
let words = str1.split(' ')
console.log(words) // Returns sentence broken down into array of individual words.

// .join()
const info = ['Domo arigato', 'Mr.', 'Roboto']
let greeting = info.join(' ')
console.log(greeting) // Does the opposite of .split, If ('separator') not specified defaults to comma.

// .pop()
const browsers = ['Firefox', 'Chrome', 'Safari', 'Internet Explorer']
browsers.pop()
console.log(browsers) // Removes IE from list of browsers... because it comes in dead last.

// .push()
const shoes = ['heels', 'cross-trainers', 'boots']
shoes.push('flip-flops')
console.log(shoes) // Don't forget to pack your flip-flops!

// .slice()
const pizza = ['Pepperoni', 'Supreme', 'Hawaiian', 'Meat Lovers']
let myDinner = pizza.slice(0, 2)
console.log(myDinner) // The slice must refer to elements next to each other. Specify Start "0" and then count "2".

// .splice()
const vegetables = ['carrots', 'onions', 'tomatoes', 'spinach']
vegetables.splice(2, 0, 'bok choy', 'sprouts')
console.log(vegetables) // Pushes bok choy and sprouts in between onions and tomatoes.

// .shift()
const musicalChairs = ['stool', 'chair', 'bucket', 'bean bag']
musicalChairs.shift()
console.log(musicalChairs) // Shift your seat to the right! The stool is gone!

// .unshift()
const band = ['percussion', 'tuba', 'saxophone', 'horn']
band.unshift('flute', 'clarinet')
console.log(band) // Even though the woodwinds arrived late, they still had to sit up front.

// .filter()
function age (value) {
  return value < 18
}
let minor = [12, 5, 8, 30, 44].filter(age)
console.log(minor) // Lists minors filtered from list of ages.

// .map()
const numbers = [1, 4, 9]
let roots = numbers.map(Math.sqrt)
console.log(roots) // Map square roots
