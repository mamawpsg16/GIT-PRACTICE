/** CLASS */
class Calculator{
    constructor(initialValue){
        this.initialValue = initialValue;
    }

    add(value){
        this.initialValue += value;
        return this;
    }

    subtract(value){
        this.initialValue -= value;
        return this;
    }

    multiply(value){
        this.initialValue *= value;
        return this;
    }

    divide(value){
        this.initialValue /= value;
        return this;
    }

    getResult(){
       console.log(this.initialValue,'CLASS');
    }
}

const calculator = new Calculator(10).add(5).subtract(3).multiply(2).divide(2).getResult();

/** FUNCTIONAL Approach */
const chain = (initialValue) => {
    let value = initialValue;

    const methods = {
        add: (n) => { value += n; return methods; },
        subtract: (n) => { value -= n; return methods; },
        multiply: (n) => { value *= n; return methods; },
        divide: (n) => { value /= n; return methods; },
        getResult: () => console.log(value,'FUNCTIONAL'),
    };

    return methods;
};

const calculator1 = chain(10).add(5).subtract(3).multiply(2).divide(2).getResult();

function CalculatorV2(value = 0) {
    this.value = value;
}

CalculatorV2.prototype.add = function(n) {
    this.value += n;
    return this;
};

CalculatorV2.prototype.subtract = function(n) {
    this.value -= n;
    return this;
};

CalculatorV2.prototype.multiply = function(n) {
    this.value *= n;
    return this;
};

CalculatorV2.prototype.divide = function(n) {
    this.value /= n;
    return this;
};

CalculatorV2.prototype.getResult = function() {
    return console.log(this.value, 'CONSTRUCTOR FUNCTION');;
};

const calculator2 = new CalculatorV2(10).add(5).subtract(3).multiply(2).divide(2).getResult();
 
/** PROMISES */
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 10 });
        }, 1000);
    });
};

fetchData()
    .then((result) => {
        return result.data + 5;
    })
    .then((result) => {
        return result - 3;
    })
    .then((result) => {
        return result * 2;
    })
    .then((result) => {
        return result / 2;
    })
    .then((result) => {
        console.log(result,'PROMISES'); // 24
    });
