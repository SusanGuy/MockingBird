auth.onAuthStateChanged(user => {
    if (!user) {
        window.location = "home.html";
    }
});