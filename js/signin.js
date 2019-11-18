auth.onAuthStateChanged(user => {
    if (user) {
        window.location = "contact.html";
    }
});

//User sigin
const signin = document.querySelector("#signin");
signin.addEventListener("click", e => {
    e.preventDefault();
    const loginEmail = document.querySelector("#loginEmail").value;
    const loginPassword = document.querySelector("#loginPassword").value;
    if (loginEmail === "" || !loginEmail.includes("@")) {
        document.querySelector("#loginError").textContent = "Enter a valid email.";
    } else if (loginPassword === "") {
        document.querySelector("#loginError").textContent = "Enter the password.";
    } else {
        auth
            .signInWithEmailAndPassword(loginEmail, loginPassword)
            .then(data => {
                window.location = "contact.html";
                document.querySelector("#loginError").textContent = "";
                document.querySelector("#loginEmail").value = "";
                document.querySelector("#loginPassword").value = "";
            })
            .catch(err => {
                document.querySelector("#loginError").textContent =
                    "Invalid Email or Password";
                document.querySelector("#loginEmail").value = "";
                document.querySelector("#loginPassword").value = "";
            });
    }
});