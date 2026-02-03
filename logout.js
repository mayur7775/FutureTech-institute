function logoutUser() {

    // 🔐 Secure Logout
    // Clear all stored authentication/session data
    localStorage.clear();
    sessionStorage.clear();

    // (If backend is used, API logout would be called here)

    // 🔁 Redirect to Login Page
    alert("You have been logged out successfully!");
    window.location.href = "login.html"; // change path if needed
}
