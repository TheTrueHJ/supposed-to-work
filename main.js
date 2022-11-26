
function adddata(){
    us1 = document.getElementById("u1").value;
    us2 = document.getElementById("u2").value;
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;

    localStorage.setItem("username1", us1);
    localStorage.setItem("username2", us2);
    localStorage.setItem("number1", num1);
    localStorage.setItem("number2", num2);  

    us1s = "q"
    us2s = "a"
    localStorage.setItem("User1Status", us1s);
    localStorage.setItem("User2Status", us2s);

    window.location = "mult.html";
}