// calculate the sum of two numbers
function calculateSum() {
    // take both inputs
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    var resultElement = document.getElementById("result");
  
    // are the inputs valid?
    if (!isNaN(num1) && !isNaN(num2)) {
      var sum = num1 + num2;
      //return result 
      resultElement.textContent = "Total:  " + sum;
    } else {
      resultElement.textContent = "Invalid input. Please enter valid numbers.";
    }
  }