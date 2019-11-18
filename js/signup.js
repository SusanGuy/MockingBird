if (window.location.href.includes("Success")) {
    document.querySelector("#signupError").textContent =
        "Registration Succesful. Go to Login Page!";
    document.querySelector("#signupError").style.color = "green";
}

auth.onAuthStateChanged(user => {
    if (user) {
        window.location = "contact.html";
    }
});

//User Signup
const signup = document.querySelector("#signup");
signup.addEventListener("click", e => {
    e.preventDefault();
    const email = document.querySelector("#signupEmail").value;
    const password = document.querySelector("#signupPassword").value;
    const confirmPassword = document.querySelector("#signupPassword2").value;
    if (email === "" || !email.includes("@")) {
        document.querySelector("#signupError").textContent = "Enter a valid email.";
    } else if (password === "") {
        document.querySelector("#signupError").textContent = "Enter the password.";
    } else if (confirmPassword === "") {
        document.querySelector("#signupError").textContent =
            "Enter the password again.";
    } else if (password.length < 6) {
        document.querySelector("#signupError").textContent =
            "Password must be 6 characters long.";
    } else if (confirmPassword.length < 6) {
        document.querySelector("#signupError").textContent =
            "Password must be 6 characters long.";
    } else if (password !== confirmPassword) {
        document.querySelector("#signupError").textContent =
            "Passwords do not match!";
    } else {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                auth.signOut().then(() => {
                    window.location = "signup.html?status='Success'";
                });
            })
            .catch(err => {
                document.querySelector("#signupError").textContent =
                    "A user already exists with that email";
                document.querySelector("#signupEmail").value = "";
                document.querySelector("#signupPassword").value = "";
                document.querySelector("#signupPassword2").value = "";
            });
    }
});