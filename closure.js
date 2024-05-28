
const closure = function(){
    let count = 0;
    return function(){
        count++;
        console.log(`Current count = ${count}`);
    }
}
const closurev1 = closure();
closurev1();
closurev1();
closurev1();

console.dir(closurev1);

/** MORE EXAMPLE */
// EXAMPLE 1
let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}

const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2);
    }
}
g();
f()
/** REASSIGNED F FUNCTION */
h();
f()


// EXAMPLE 1
const boardPassengers = function(n, wait){
    const perGroup = n / 3;
    setTimeout(() => {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each ${perGroup} passengers`);
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180, 3)