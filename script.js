window.addEventListener('DOMContentLoaded', () => {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("value");

  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  } 
})

function validate(){  
  var num = document.myform.num.value;  
  if (isNaN(num)){  
    document.getElementById("principal").innerHTML="Enter Numeric value only";  
    return false;  
  }else{  
    return true;  
    }  
  }  

function getFutureValue(principal, interestRatePercent, termYears) {
  return principal*interestRatePercent*termYears/100;
}

function showResult(result) { 
  document.getElementById("result").innerHTML = result;
}

function compute() {
  // Ensure all values are _numbers_
  p = Number(document.getElementById("principal").value);
  r = Number(document.getElementById("myRange").value);
  n = Number(document.getElementById("years").value);
 
  const newDate = new Date();
  newDate.setFullYear(newDate.getFullYear() + n);
  let result = "If you deposit " + p + ", " + "<br>" ;
  result += "at an interest rate of " + r + "%," + "<br>";
  result += "you will receive an amount of " + getFutureValue(p, r, n).toFixed(2) + "," + "<br>";
  result += "in the year " + (newDate.getFullYear());
  showResult(result);

}
compute()

