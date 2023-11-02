
function suma(a,b){
    return parseInt(a)+parseInt(b);
}
function resta(a,b){
    return a-b;
}
function multi(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}
function calcular(suma){
    const num1 =parseInt(document.getElementById('op1').value)
    const num2 =parseInt(document.getElementById('op2').value)
  
    if((!isNaN(num1))&& (!isNaN(num2))){
       document.getElementById('error').innerHTML=""
        document.getElementById('rto').value=(suma(num1,num2));
    }else{
        document.getElementById('rto').value=''
        document.getElementById('error').innerHTML="No es posible calcular ya que uno de los operadores no es un numero"
   
    }
    
}

document.getElementById('plus').addEventListener('click',()=>calcular(suma))
document.getElementById('minus').addEventListener('click',()=>calcular(resta))
document.getElementById('multi').addEventListener('click',()=>calcular(multi))
document.getElementById('divi').addEventListener('click',()=>calcular(division))
