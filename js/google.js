document.querySelector("#google-signin").addEventListener("click", (e) => {
    e.preventDefault();
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
            
            window.alert(`Welcome ${result.user.displayName} !`);
            window.location = "contact.html";
        })
        .catch(err => {
            console.log(err);
        });
});