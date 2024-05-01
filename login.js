setTimeout(function() {
    document.querySelector('.preloader').style.display = 'none';
    document.querySelector('.loginform').style.display = 'flex';
}, 2000);
function showRegister() {
    document.getElementById("Login").style.display = "none";
    document.getElementById("Register").style.display = "flex";
}

function showLogin() {
    document.getElementById("Register").style.display = "none";
    document.getElementById("Login").style.display = "flex";
}
function over(){
    document.getElementById('logSub').style.display = "block";
}
function out(){
    document.getElementById('logSub').style.display = "none";
}

function login() {
    var user = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    var nameError = document.getElementById("nameError");
    var passwordError = document.getElementById("passwordError");
    
    nameError.textContent = "";
    passwordError.textContent = "";

    if (!user) {
        nameError.textContent = "Username is required";
        nameError.style.color = "red";
    }
    if (!pass) {
        passwordError.textContent = "Password is required";
        passwordError.style.color = "red";
    }

    if (user && pass) {
        if (user === "hari" && pass === "123") {
            alert("Login successful");
        } else {
            alert("Login failed");
        }
    }
}

function Register() {
    var user = document.getElementById("name1").value;
    var pass = document.getElementById("pass1").value;
    var conformPass = document.getElementById("conform").value;
    var nameError = document.getElementById("nameError1");
    var passwordError = document.getElementById("passwodError1");
    var conformPasswordError = document.getElementById("conformpasswordError");
    nameError.textContent = "";
    passwordError.textContent = "";
    conformPasswordError.textContent = "";
    if (!user) {
        nameError.textContent = "Username is required";
        nameError.style.color = "red";
    }
    if (!pass) {
        passwordError.textContent = "Password is required";
        passwordError.style.color = "red";
    }
    if (!conformPass) {
        conformPasswordError.textContent = "Confirm Password is required";
        conformPasswordError.style.color = "red";
    }
    if (pass !== conformPass) {
        conformPasswordError.textContent = "Passwords do not match";
        conformPasswordError.style.color = "red";
    }

    if (user.trim() && pass.trim() && conformPass.trim() && pass === conformPass) {
        alert("Registration successful");
    }
}


