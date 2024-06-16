console.log('A');
setTimeout(() => {
    console.log('B');
}, 3000);

const promise = new Promise((resolve, reject) => {
    if(true){
        resolve('D');
    }else{
        reject('E')
    }
})
promise.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
console.log('C');


function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

fetchData("https://cat-fact.herokuapp.com/facts/random")
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

    let promisev2 = new Promise(function(resolve, reject) {
        setTimeout(() => reject('ABC'));
    });
    
    // Handle rejection in the second function in .then
    promisev2.then(
        result => console.log(result, 'result'), // this handles the resolved case
        error => console.log(error, 'error')     // this handles the rejected case
    );

    
    // Handle rejection with .catch
    // promisev2.then(result => console.log(result, 'result'))
    // .catch(error => console.log(error, 'error'));