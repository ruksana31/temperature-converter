function convert()
{
    var a=document.getElementsByClassName("data")[0].value;
var b=document.getElementsByClassName("data2")[0].value
var d=document.getElementsByClassName("data3")[0].value
var temp=parseFloat(a)
var result;
if(b===d){
    result=temp;
}
else if(b==="Celsius"&&d==="Fahrenheit"){
  result=(temp*9/5)+32;
}
else if(b==="Fahrenheit"&&d==="Celsius"){
  result=(temp-32)*5/9;
}

if (!isNaN(result)) {
    document.getElementById("result").innerText = "Result: " + result.toFixed(2);
  } else {
    document.getElementById("result").innerText = "Please enter a valid temperature!";
  }
}
function resetForm() {
    document.getElementsByClassName("data")[0].value = "";
    document.getElementsByClassName("data2")[0].selectedIndex = 0;
    document.getElementsByClassName("data3")[0].selectedIndex = 1;
    document.getElementById("result").innerText = "Result:";
}
