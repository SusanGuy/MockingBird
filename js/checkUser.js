auth.onAuthStateChanged(user => {
    if (user) {
        document.querySelector("#login").setAttribute("class", "hidden");
        document.querySelector("#logout").setAttribute("class", "");
        document.querySelector("#contact").setAttribute("class", "");
    }
});