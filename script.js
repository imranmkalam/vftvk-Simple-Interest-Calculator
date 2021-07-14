window.addEventListener('DOMContentLoaded', () => {
  
  document.getElementById("principal").addEventListener('change',function(event){
    event.preventDefault();
    validate();
  });
   
  var slider = document.getElementById("myRange");
  var output = document.getElementById("value");

  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  } 
})

function validate(){  
  var num = document.myform.num.value;  
  if (isNaN(num) || num == 0 || num < 0 || num == null) {  
    alert("Please enter a valid entry")
    document.getElementById("principal").focus(); }
  else {  
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
  let result = "If you deposit <span class='highlight'>" + p + "</span>, " + "<br>" ;
  result += "at an interest rate of <span class='highlight'>" + r + "%</span>," + "<br>";
  result += "you will receive an amount of <span class='highlight'>" + getFutureValue(p, r, n) + "</span>," + "<br>";
  result += "in the year <span class='highlight'>" + (newDate.getFullYear()) + "</span>";
  showResult(result);

}

compute()