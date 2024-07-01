function checkage(){
    const age=document.getElementById('age');
    const agetxt=age.value;
    const errtag=document.getElementById('error');
 
    try{
        const age=parseInt(agetxt);
        if(isNaN(age)){
            throw "please enter a number";
        }
        else if(age<18){
            throw 'Baccha is not allowed'
        }
        else if(age>30){
            throw 'Murubbira  is not allowed'
        }
        errtag.innerHTML='';
    }
    catch(err){
        console.log('Error:',err);
        errtag.innerHTML='Error:'+err;
    }
    finally{
        console.log('All done try catch')
    }
    console.log(112);
}