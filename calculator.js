let buttons=document.querySelectorAll('button');
let input=document.querySelector('input');
let currentExpression='';


buttons.forEach(button=>{
button.addEventListener('click',(e)=>
{//Access the clicked button's value
  let btnvalue=e.target.value;
  console.log(btnvalue)
  if(btnvalue=="C"){
    
    input.value ='';
  currentExpression = '';


  } else if(btnvalue==='X'){
  currentExpression=currentExpression.slice(0,-1)
  input.value=currentExpression;}
  else if( btnvalue==='='){
    try{
    input.value=eval(currentExpression);// perform the calculation;
    currentExpression=input.value // update expression with the result
  }
catch(error){
  input.value='Error' // handel invalid error
}}
else{
  currentExpression+=btnvalue;
  input.value=currentExpression;
}

})
})
