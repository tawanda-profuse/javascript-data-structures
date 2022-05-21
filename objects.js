/* In JavaScript, an object is a collection of key-value pairs. This data structure is also called map, dictionary or hash-table in other programming languages.*/

// A typical JS object looks like this:

const obj = {
    prop1: "I'm",
    prop2: "an",
    prop3: "object"
}

/*Objects can store both values and functions. When talking about objects, values are called properties, and functions are called methods.*/
const obj2 = {
    prop1: "Hello!",
    prop3: function() {console.log("I'm a property dude!")
}}

/* To access properties you can use two different syntaxes, either object.property or object["property"]. To access methods we call object.method().*/
console.log(obj2.prop1) // "Hello!"
console.log(obj2["prop1"]) // "Hello!"
obj2.prop3() // "I'm a property dude!"

// To assign new values:
obj.prop4 = 125
obj["prop5"] = "The new prop on the block"
obj.prop6 = () => console.log("yet another example")

console.log(obj.prop4) // 125
console.log(obj["prop5"]) // "The new prop on the block"
obj.prop6() // "yet another example"