const submitBtn = document.getElementById("submitBtn");

const user = document.getElementById("user");
const pass = document.getElementById("pass");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  alert("Your account has been created");
})

const firebaseConfig = {
  apiKey: "AIzaSyD-Us88SyR9azFGHnxRpNQss46wUa19hPE",
  authDomain: "fir-day-project-39fdf.firebaseapp.com",
  projectId: "fir-day-project-39fdf",
  storageBucket: "fir-day-project-39fdf.appspot.com",
  messagingSenderId: "425781501025",
  appId: "1:425781501025:web:ef8a516845f28b617f9e20",
  measurementId: "G-9171Z7KSS7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.database().ref();

const auth = firebaseApp.auth();
    function handleSignUp() {
        console.log("in signup")
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var passVerify = document.getElementById('passVerify').value;
      if (!(email&&password&&passVerify&&document.getElementById('name').value)) {
        alert('One or more missing fields')
        return;
      }
      if (email.length < 4) {
        alert('Please enter a valid email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a valid password (more than 4 alphanumeric characters).');
        return;
      }
      if (!(password==passVerify)) {
        alert('Passwords must match!')
        return;
      }
      // Create user with email and pass.
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(function (result ) {
        return result.user.updateProfile({
            displayName: document.getElementById("name").value
        })
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    }
      // Listening for auth state changes.
      firebaseApp.auth().onAuthStateChanged(async function(user) {
        if (user) {
console.log("this is user", user)
localStorage.setItem("user", user)
        }
        if (localStorage.getItem("user")) {
          window.location.href="/index.html"
        }
      });

        document.getElementById('sign-up').onclick = () => {
            handleSignUp();
        };
    