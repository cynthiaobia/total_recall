// ===================================================
// EASY GOING
// Write a for loop that will log the numbers 1 through 20.
console.log("EASY GOING");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// ===================================================
// GET EVEN
// Write a for loop that will log only the even numbers in 0 through 200.
console.log("\nGET EVEN");
for (let i = 0; i <= 200; i += 2) {
    console.log(i);
}

// ===================================================
// FIZZ BUZZ
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and shorter.
console.log("\nFIZZ BUZZ");
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`FizzBuzz`);
    }
    else if ( i % 3 == 0) {
        console.log(`Fizz`);
    }
    else if ( i % 5 == 0) {
        console.log(`Buzz`);
    }
    else {
        console.log(i);
    }

}

// ===================================================
// WILD WILD LIFE
// Use the following arrays to answer the questions below (name, species, age, hometown).
// You should be modifying the elements by accessing them. It is up to you which methods to use.

console.log("\nWILD WILD LIFE");
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

console.log(`1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.`);
plantee[2] += 1;
console.log(plantee);

console.log(`\n2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".`);
wolfy[3] = "Gotham City";
console.log(wolfy);

console.log(`\n3. Give D'Art a second hometown by adding "Hawkins"`);
//dart[3] += ", Hawkins";
dart.push("Hawkins")
console.log(dart);

console.log(`\n4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".`);
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);


// ===================================================
// YELL AT THE NINJA TURTLES
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
// Use a for of loop to call toUpperCase() on each of them and print out the result.
console.log("\nYELL AT THE NINJA TURTLES");
const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (turtle of turtles) {
    console.log(turtle.toUpperCase());
}


// ===================================================
// METHODS, REVISITED
console.log("\nMETHODS, REVISITED");
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[0]);

// 1. Use the .sort method.
console.log(favMovies.sort());
// 2. Thought Question: What did this do to the array? Did it permanently alter it?
// This method updates and sorts the array alphabetically
// 3. Use the method pop.
console.log(favMovies.pop());
// 4. push "Guardians of the Galaxy".
console.log(favMovies.push("Guardians of the Galaxy"));
console.log(favMovies);
// 5. Reverse the array.
console.log(favMovies.reverse());
// 6. Use the shift method.
console.log(favMovies.shift());
// 7. unshift - what does it return?
console.log(favMovies.unshift()); // 18
console.log(favMovies);
// 8. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself)
let indexDjango = favMovies.indexOf("Django Unchained");
favMovies.splice(indexDjango, 1, "Avatar");
console.log(favMovies);
// 9. Thought Question: Did this permanently alter our array?
// yes, see console.log above
// 10. slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)
let arrHalfLength = favMovies.length / 2;
console.log(arrHalfLength);
console.log(favMovies.slice(arrHalfLength));
// 11. Thought Question: Did this permanently alter our array?
console.log(favMovies)
// no, it did not permanently alter the array
// 12. Store the value of your slice in a variable and console.log it.
let newMoviesArr = favMovies.slice(arrHalfLength);
console.log(newMoviesArr);
// 13. Thought Question: What is going on here?
// 14. console.log your final results.
console.log(favMovies);
// After running the above tasks, console.log the index of "Fast and Furious."
console.log(favMovies.indexOf("Django Unchained")); 
// We removed it from the array. What value do we get when we look for the index of something that is not in the array?
// returns -1


// ===================================================
// WHERE IS WALDO
console.log("\nWHERE IS WALDO");
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert (hint look at the slice/splice methods).
whereIsWaldo.splice(1,1);
console.log(whereIsWaldo);
// Change "Neff" to "No One".
whereIsWaldo[1].splice(2,1, "No One")
console.log(whereIsWaldo);
// Access and console.log "Waldo".
console.log(whereIsWaldo[2][1][1]);


// ===================================================
// EXCITED KITTEN
console.log("\nEXCITED KITTEN");
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

for (let i = 1; i <= 20; i++){
    console.log('Love me, pet me! HSSSSSS!');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let randomEvenStrArr;
let randomInt;
for (let i = 1; i <= 20; i++){
    randomEvenStrArr = [
        "...human...why you taking pictures of me?...", 
        "...the catnip made me do it...", 
        "...why does the red dot always get away..."];
    randomInt = getRandomInt(3);
    if (i % 2 == 0){
        console.log(`${randomEvenStrArr[randomInt]}`);
    }
    else {
        console.log(i);
    }
}


// ===================================================
// FIND THE MEDIAN
console.log("\nFIND THE MEDIAN");
// 1. Find the median number in the following nums array, then console.log that number.
// 2. hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

let sortedNums = nums.sort();
let numsLength = nums.length;
let index = Math.floor(numsLength / 2);
let median = sortedNums[index];
console.log(median);