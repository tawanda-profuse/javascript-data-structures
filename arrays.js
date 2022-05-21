// An array is a collection of items stored at neighbouring memory locations.
// Each item can be accessed through its index (position) number. Arrays always start at index 0, so in an array of 4 elements we could access the 3rd element using the index number 2.

// For example:
const cars = ['Porsche', 'Bugatti', 'Ford', 'Audi'];
console.log(cars[2]);

// The length property of an array is defined as the number of elements it contains. If the array contains 4 elements, we can say the array has a length of 4.
console.log(cars.length);

// Multidimensional array
const food = [
    ['burger', 'hotdog', 'shawarma'],
    ['beer', 'pizza', 'chocolate'],
    ['doritos', 'cookies', 'jelly beans']
];

console.log(food[0][2]); // Displays shawarma to the output

/* Arrays are useful when we have to store individual values and add/delete values from the end of the data structure. But when we need to add/delete from any part of it, there are other data structures that perform more efficiently.*/