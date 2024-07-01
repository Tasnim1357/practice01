console.log(1)

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

console.log(3)      


console.log(4);
console.log(5);
setTimeout(don,4000)
console.log(6);

function don(){
    console.log(8)
}