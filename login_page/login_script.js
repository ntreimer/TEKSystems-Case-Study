console.log("login script!!");

function validateLogin(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log("username:", username, "password:", password);
    location.href = "../calculator_page/calculator.html"
}