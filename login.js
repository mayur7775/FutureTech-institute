function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "admin123") {
        window.location.href = "index.html"; 
    } else {
        document.getElementById("msg").innerText = "Admin access denied";
    }
    return false;
}
