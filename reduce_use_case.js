/** #1 SUM ARRAY OF NUMBERS */
const numbers = [1, 2, 3, 4, 5];
const numbersSumation = numbers.reduce((acc, curr) => acc + curr);
console.log(numbersSumation);

/** #2 FLATTENING NESTED ARRAYS */
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenedArray,'flattenedArray');
// ANOTHER WAY USING FLAT
// console.log(nestedArray.flat(Infinity));

/** #3 GROUPING OBJECTS */
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Dave', age: 30 }
];

const gropedPeople = people.reduce((obj, curr) =>{
    if(!obj[curr.age]){
        obj[curr.age] = [];
    }
    obj[curr.age].push(curr);
    return obj;
},{})
console.log(gropedPeople);
// ANOTHER WAY USING GROUPBY
const groupedByGroupBy = Object.groupBy(people,({age}) =>{
    return age;
})
console.log(groupedByGroupBy);


/** #4 Creating Lookup Maps */
const products= [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 },
    { id: 3, name: 'Tablet', price: 499 },
];

const productMap = products.reduce((obj, product) => {
    obj[product.id] = product;
    return obj;
},{});

console.log(productMap[1]);

/** #5 Counting Occurrences */
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const occurrences = fruits.reduce((obj, fruit) => {
    obj[fruit] = (obj[fruit] || 0) + 1;
    return obj;
}, {}) 
console.log(occurrences);

/** #6 COMPOSING FUNCTIONS */
const add5 = (x) => x + 5;
const multiply3 = (x) => x * 3;
const subtract2 = (x) => x - 2;

const composedFunctions = [add5, multiply3, subtract2];
const result = composedFunctions.reduce((acc, func) => func(acc), 10);
console.log(result);

/** #7 Implementing a Simple Redux-like State Management */
  
  const initialState= {
    count: 0,
    todos: [],
  };
  
  const actions = [
    { type: 'INCREMENT_COUNT' },
    { type: 'ADD_TODO', payload: 'Learn Array.reduce()' },
    { type: 'INCREMENT_COUNT' },
    { type: 'ADD_TODO', payload: 'Master TypeScript' },
  ];
  
  const reducer = (state, action)=> {
    console.log(state, action,'state, action');
    switch (action.type) {
      case 'INCREMENT_COUNT':
        return { ...state, count: state.count + 1 };
      case 'ADD_TODO':
        return { ...state, todos: [...state.todos, action.payload] };
      default:
        return state;
    }
  };
  
  const finalState = actions.reduce(reducer, initialState);
  console.log(finalState);

  /** #8 GENERATE UNIQUE VALUES */
  const numbers1 = [1, 2, 3, 2, 4, 3, 5, 1, 6];
  const uniqueNumbers = numbers1.reduce((arr, num) => {
    if(!arr.includes(num)){
        arr.push(num);
    }
    return arr;
  }, [])
  console.log(uniqueNumbers, 'UNIQUE');
  console.log([...new Set(numbers1)],'UNIQUE V2');
  // ANOTHER WAY FOR UNIQUE VALUES

  /** #9 Calculating Average */
  const grades = [85, 90, 92, 88, 95];

  const average = grades.reduce((acc, curr, index, array) =>{
    acc += curr;
    if(index == array.length - 1){
        acc = acc / array.length;
    }
    return acc;
  },0)
  console.log(average);