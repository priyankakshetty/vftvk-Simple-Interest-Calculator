//To update the text value of slider  
var slider = document.getElementById("rate");
var output = document.getElementById("rate_val");
output.innerHTML = slider.value + "%"; 
slider.onchange = function() {
  output.innerHTML = this.value + "%";
}

//Dynam,ically creating dropdown opttion for number of years 
var sel = document.getElementById("years");
for (var i = 1; i <= 100; i++)
    {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        sel.appendChild(option);
    }

//To calculate the interest for the given principal amount, rate of interest and number of years 
function compute()
{
    var principal  = document.getElementById("principal").value;
	var years  = document.getElementById("years").value;
	var rate = document.getElementById("rate").value;
	
	if (principal == ""){
		alert("Please enter the principal amount");
		document.getElementById("principal").focus();
		return false;
	}
	
	if(principal==0){
		alert("Please enter a positive number");
		document.getElementById("principal").focus();
		return false;
	}
		
		
	var result =  principal * years * rate /100;
	var d = new Date();
	var ny = d.getFullYear() + parseInt(years);

	var txt = "If you deposit " + principal + ",<br> at an interest rate of " + rate + "%.<br> You will recieve an amount of "+ result +",<br> in the year "+ny +"<br>";
	document.getElementById("t1").innerHTML = txt;
}
        