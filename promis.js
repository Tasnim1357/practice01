const mload=()=>{
    return new Promise((resolve,reject) => {
        const s=Math.random();
        if(s<=0.5){
            resolve(s);
        }
        else{
            reject(s);
        }
    })
}

mload()
.then(data => console.log('resolved data',data))
.catch(err => console.log('rejected',err))


fetch('')
.then(res =>res.json())
.then(data => console.log(data))
.catch(err => console.error(err))



 async function loadData(){
    const res= await fetch('');
    const data= await res.json();
    console.log(data);
}

loadData();