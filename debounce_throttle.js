// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            console.log(args,'args');
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Function to handle input
function handleInputThrottled(event) {
    console.log('Throttled Input:', event.target.value);
}

// Get the input field
const inputFieldThrottled = document.getElementById('inputField');

// Attach throttled event listener
inputFieldThrottled.addEventListener('input', throttle(handleInputThrottled, 1000));


// Debounce function
function debounce(func, delay) {
    let timeOutId;
    return function(){
        const context = this;
        const args = arguments;
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            func.call(context, ...args)
        }, delay);
    }
}

// Function to handle input
function handleInput(event) {
    console.log('Debounced Input:', event.target.value);
}

// Get the input field
const inputField = document.getElementById('inputFieldDebounced');

// Attach debounced event listener
inputField.addEventListener('input', debounce(handleInput, 1000));


/** ARGUMENTS BUILTIN IN NORMAL FUNCTIONS */
function exampleFunctionV1() {
    const argsArray = [...arguments];
    console.log(argsArray,'argsArray');
}

exampleFunctionV1('a', 'b', 'c');

function exampleFunction() {
    console.log(arguments[0]); // First argument
    console.log(arguments[1]); // Second argument
    console.log(arguments[2]); // Third argument
}

exampleFunction('first', 'second', 'third');

function exampleFunctionV2() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

exampleFunctionV2('apple', 'banana', 'cherry');


function exampleFunctionv3() {
    console.log(arguments,'arguments');
    // const argsArray = Array.from(arguments);
    // console.log(argsArray);
}

exampleFunctionv3('one', 'two', 'three');



