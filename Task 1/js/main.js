function checkEnteredValue (){
  let val = document.getElementById('EnterANumber').value;
  document.getElementById('str').innerHTML="Вы ввели:"+val;

if (typeof val !='number'){
  alert ("Вы ввели не число, введите число");
  return;
}
else (val > 7) 
  alert("Привет");
}
console.log (alert)
 