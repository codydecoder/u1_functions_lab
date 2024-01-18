//functions
//1
/*const logIn = (yourName) => {console.log(`Hello ${yourName}`)}
logIn('cody')
*/
//2
/*
const logIn = (yourName, isLoggedIn) => {
    if(isLoggedIn == 1) {
        console.log(`Hello ${yourName}!`)
    }
    else if(isLoggedIn == 0) {
        console.log("Please log in.")
    }
}
logIn('cody', 0);
*/
//3
/*
const findArea = (length, width) => {
    let sodArea = (length * width)
    console.log(`Area of sod: ${sodArea} square feet`)
    let sodCost = (sodArea * 1.45)
    console.log(`Price of sod: $${sodCost}`)
    let totalCost = (sodCost + 100)
    console.log(`Total Cost: $${totalCost}`)
    if(totalCost > 700) {
        console.log(`You are overbudget by $${totalCost - 700}`)
    }
    else if(totalCost == 700) {
        console.log(`You have exactly enough money`)
    }
    else if(totalCost < 700 && totalCost > 0) {
        console.log(`You will have $${700 - totalCost} left over`)
    }
    else if(totalCost < 0) {
        console.log('You broke something')
    }
}
findArea(20, 30)
*/
//4
/*
const students = ['Alice', 'Andy', 'Andrew', 'Casey', 'Damian', 'Emily', 'Emilie', 'Grant', 'Howie', 'Isabella', 'Kat', 'Kimbrad', 'Kiu', 'Natasha', 'Obi', 'Oscar', 'Pedro', 'Sarah', 'Scott', 'Tiffany', 'Umberto', 'Wade', 'Zhe']

const printStudents = (array1) => {
    for(let i = 0; i < array1.length; i++) {
        console.log(`${array1[i]} is ${array1[i].length} letters long.`)
    }
}
printStudents(students);
*/
//HIGHER ORDER FUNCTIONS
const nums = [1,3,6,9,11,15,21,25,28,30,32,34,36,40,44,45]
//1
/*
const getSquares = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        console.log(`${nums[i]} squared is ${(nums[i] ** 2)}`)
    }
}
getSquares(nums);
*/
//2
/*
const isDivBy3 = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 3 === 0) {
            console.log(nums.map(nums[i] => ))
        }
    }
    //const numbers = [1, 2, 3, 4, 5];
    //const squaredNumbers = numbers.map(number => number * number);
    //console.log(squaredNumbers); // [1, 4, 9, 16, 25]

    //console.log(nums.map(num => num % 3 === 0).every(Boolean))
}
isDivBy3(nums)
*/
//3



//4



//5



//6



//7



//BONUS


