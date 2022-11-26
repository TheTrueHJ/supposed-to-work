q = localStorage.getItem("q");
document.getElementById("e").innerHTML = q + ", please input your numbers."

function nums(){
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    localStorage.setItem("number1", num1);
    localStorage.setItem("number2", num2);
    window.location = "mult.html";
}