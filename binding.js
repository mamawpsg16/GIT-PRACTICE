/** Default Binding */
function standaloneFunction() {
    // console.log(this); // In non-strict mode: Window (global object), in strict mode: undefined
}

/** Implicit Binding */
const obj = {
    method: function() {
        // console.log(this); 
    }
};
//obj.method(); // `this` refers to `obj`
// standaloneFunction();

/** Explicit Binding */

function show(...args) {
    // console.log(this.name, args,'SHOW CALL');
}
const obj1 = { name: 'Object' };
// show.call(obj1); // `this` refers to `obj`
// show.apply(obj1, [1,2,3]); // `this` refers to `obj`
const boundShow = show.bind(obj1, 4,5,6);
// console.log(boundShow()); // `this` refers to `obj`

/** ARROW FUNCTION */
const obj2= {
    newProperty: "New Value",
    method: function() {
        const arrowFunc = () => {
            // console.log(this);
        };
        arrowFunc(); // `this` refers to `obj`
    }
};
// obj2.method();
// console.log(obj2.newProperty);
/** Constructor Functions and Classes */
function Person(name) {
    this.name = name;
}

const person = new Person('Alice');
// console.log(person.name); // 'Alice'

class Animal {
    constructor(type) {
        this.type = type;
    }
}

const animal = new Animal('Dog');
// console.log(animal.type); // 'Dog'

/**  USING CALL */
const cebuPacific = {
    bookings:[],
    airline:'CebuPacific',
    code:'CP',
    book(flightNumber, name){
        console.log(`Hello ${name}, you are now booked with the flight number of ${flightNumber}`);
        this.bookings.push({name:name, flightNumber:flightNumber});
    }
}
cebuPacific.book(999,'Kevin Mensah');
cebuPacific.book(777,'Kristian Mensah');
console.log(cebuPacific.bookings);

const philipineAirlines = {
    bookings:[],
    airline:'Philippines Airlines',
    code:'PA'
}

const book = cebuPacific.book;
book.call(philipineAirlines, 500, 'Krizel Mensah');
const data = [666, 'Jesus Lord'];
book.call(philipineAirlines,...data);
console.log(philipineAirlines.bookings);

/** USING APPLY (OLD) */
const palawanAirlines = {
    bookings:[],
    airline:'Palawan Airlines',
    code:'PAS'
}

book.apply(palawanAirlines,[333,'Rojenson Lugo']);
console.log(palawanAirlines.bookings);

/** USING BIND */
const bookPa = book.bind(philipineAirlines);
const bookPa1 = book.bind(philipineAirlines,678);
bookPa1('SHEESH CRAZY');
bookPa(123,'Roy Dupaya')
console.log(philipineAirlines.bookings);
const addBtn = document.getElementById('add');
const minusBtn = document.getElementById('minus');
const inputCounter = document.querySelector('input[name="counter"]');

philipineAirlines.planes = 300;
inputCounter.value = philipineAirlines.planes;
philipineAirlines.buyPlane = function(e){
    this.planes++;
    inputCounter.value = this.planes;
};
philipineAirlines.sellPlane = function(e){
    this.planes--;
    inputCounter.value = this.planes;
};
addBtn.addEventListener('click', philipineAirlines.buyPlane.bind(philipineAirlines));
minusBtn.addEventListener('click', philipineAirlines.sellPlane.bind(philipineAirlines));

// PARTIAL BIND APPLICATION
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1,200)); 
const addVat = addTax.bind(null, 0.3);
console.log(addVat(100)); 

const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}

const addVat2 = addTaxRate(0.3)
console.log(addVat2(100),'addVat2(0.100)');

