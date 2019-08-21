/*Acá va tu código*/
const btnAdd = document.getElementById("result");
const containerResult = document.getElementById("show_result");

btnAdd.addEventListener("click", () => {
  let firstNumber = parseInt(document.getElementById("first").value); 
  //console.log(firstNumber);
  let secondNumber = parseInt(document.getElementById("second").value);
  //console.log(secondNumber);
  //document.write(firstNumber, secondNumber)
  containerResult.innerHTML = window.operations.add(firstNumber, secondNumber);
})