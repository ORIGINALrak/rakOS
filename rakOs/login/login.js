let userData = {};
var userA = null;
var passwordA = null;

async function fetchUserData() {
    try {
        const response = await fetch('./login.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        userData = await response.json();
        console.log(userData);

        
         let { user, password } = userData;
        userA = user;
        passwordA = password;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}


function loginn() {
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (user == userA && password == passwordA) {
       window.location.replace("../rako/rakOS.html");
    } else {
        document.getElementById("error").innerHTML = "Invalid username or password";
    }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    loginn();
  }
});