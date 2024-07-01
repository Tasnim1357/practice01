console.log(1)
setTimeout(() =>{
    console.log(2)
},4000)
console.log(3)
console.log(4)


// setinterval

console.log(1)
let num=0;
const setId=setInterval(() =>{
    num++
  if(num>6){
    clearInterval(setId);
  }
    console.log(setId,'i am timu',num);
},4000)
console.log(3)
console.log(4)