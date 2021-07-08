function compute() {
    document.getElementById("principal").innerHTML= "If you deposit!!!" + principal +",";

    p=document.getElementById("principal").value;
    r=document.getElementById("rate").value;
    n=document.getElementById("years").value;
    result=document.getElementById("result");
    result.innerHTML="You will receive an amount of " + (p*n*r/100) + ",";

}


