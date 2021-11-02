///////////////////////// (CALL() APPLY() AND BIND() ) \\\\\\\\\\\\\\\\\\\\\\\\\\

// All functions have acess tho call applly and bind method.

//BIND()
const person = {
    fristName: 'Daniel',
    lastName: 'Selga',
    getFullName: function() {
        const fullname = this.fristName + ' ' + this.lastName
        return fullname
    }
}

const logName = function(lang1, lang2) {
    console.log('logged: ' + this.getFullName()) // this.getFullname() wont work because the 'this' keyword is pointed to the global object.
    console.log('Arguments' + lang1 + ' ' + lang2)
}.bind(person) // We can bind functions on the fly too.

logName() // Undefined, if binded we get the result referenced the object binded.

const logPersonName = logName.bind(person) // This bind method atach any function to an object and of references using the 'this' keyword will point to this object.

logPersonName()

// Bind create a copy and reference to the binded object.

// CALL()
logName.call(person, 'en', 'es') // This method invoke one function that abble to bind an object with the 'this' keyword and we can set some arguments to them.

// APPLY()
logName.apply(person, ['en', 'es']) // The apply method runs as same the call method but the params mus be inside one array.

// Combining IFFE and the apply method
(function(lang1, lang2) {
    console.log('logged: ' + this.getFullName()) // this.getFullname() wont work because the 'this' keyword is pointed to the global object.
    console.log('Arguments' + lang1 + ' ' + lang2)
}).apply(person, [en, es])

// FUNCTION BORROWING
const person2 = {
    fristName: 'Gege',
    lastName: 'Calil'
}

person.getFullName.apply(person2) // This methos permit us to invoka an object expression and set another object to be the reference.

// FUNCTION CURRYING
function multiply (a, b) {
    return a * b
}

const multiplyByTwo = multiply.bind(this, 2) // Bind doesent execute, bind create a copy and set the values permanent to the object.
// When multiply by 2, the b will be permanet because we are using a copy of the function

multiplyByTwo(4) // Returns 8

// FUNCTION CURRYNG: Create a copy of a function but with some preset parameters, very useful in mathematical situations.

///////////////////////// (FUNCTIONAL PROGRAMMING) \\\\\\\\\\\\\\\\\\\\\\\\\\

const arr1 = [1, 2, 3]

const arr2 = []

// Declarative way to put values and doble these values inside arr2
for (const i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2)
}

// Functional way to put values and doble them inside the array
function mapForEach(arr, fn) {
    const newArr = []
for (const i = 0; i < arr1.length; i++) {
    newArr.push(
        fn(arr[i])
    )
 }
    return newArr
}

const arr2 = mapForEach(arr1, function(item) { // Passing a callback function is more 'functinal way' to programming
    return item * 2
})

const arr3 = mapForEach(arr1, function(item) { 
    return item > 2 // Returning a boolean and switching the retruning value reusing an function call.
})

const checkPastLimit = function(item, limiter) {
    return item > limiter
}

const arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1)) // The second argument that mapforeach expect is a functions with only one paramether, we can use bind to create a copy of a function with 2 or more paramethers and set default values for this function, and call only with one value.

const checkPastLimitSimplified = function(limiter) {
    return function (limiter, item) { // This function is called inside the mapForEach
        return item > limiter
    }.bind(this, limiter) // This bind is with the parent function, checkPastLimitSimplified, we get the data on the call and runs inside another function using this values.
}

const arr5 = mapForEach(arr1, checkPastLimitSimplified(1))

