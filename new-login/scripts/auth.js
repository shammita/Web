auth.onAuthStateChanged(user => {
    //console.log(user)

    if (user) {
        console.log('user logged in', user);
        setupUI(user);
    } else {
        setupUI();
        console.log('user logged out');
    }
});


const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
    });

    //auth.signOut();
});


//signup
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get info

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // console.log(email, password);

    //signup user

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        //console.log(cred.user);


        signupForm.reset();



        window.location.href = "../index.html";
    });

});
//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get info

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //console.log(cred.user);

        //close login page


        loginForm.reset();
        window.location.href = "../index.html";
    }, err => {
        let msg;
        switch (err.code) { // SWITCH THE CODE RETURNED TO SEE WHAT MESSAGE YOU'LL DISPLAY
            case "auth/wrong-password":
                msg = "Email or Password is wrong.";
                loginForm.reset();
                break;


        }

        alert(msg);

    });
});