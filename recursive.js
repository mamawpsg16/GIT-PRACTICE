function customDeepClone(obj) {
    // Handle null or undefined
    if (obj === null || obj === undefined) {
        return obj;
    }

    // Handle primitive types
    if (typeof obj !== 'object') {
        console.log('PRIMITIVE');
        return obj;
    }

    // Handle Arrays
    if (Array.isArray(obj)) {
        console.log('ARRAY');
        return obj.map(item => customDeepClone(item));
    }

    // Handle objects
    const clonedObj = {};
    for (let key in obj) {
        console.log('OBJ');
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = customDeepClone(obj[key]);
        }
    }

    return clonedObj;
}


// const original = {
//     a: 1,
//     b: [2, { c: 3 }]
// };

// const original = ['1',2, { c: 3}];
const clone = customDeepClone(original);

console.log(clone);