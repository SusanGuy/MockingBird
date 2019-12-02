auth.onAuthStateChanged(user => {
    if (!user) {
        window.location = "home.html";
    }
   
});

if (window.location.href.includes("Success")) {
    document.querySelector("#signupError").textContent =
        "Mail sent succesfully.";
    document.querySelector("#signupError").style.color = "green";
}

else if(window.location.href.includes("emailError")) {
    document.querySelector("#signupError").textContent =
        "You can only send email with go.olemiss.edu provider.";
    document.querySelector("#signupError").style.color = "red";
}
