document.getElementById("form").addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;
    console.log("ekta");

    fetch('users.json').then(response => response.json()).then(data => {
        console.log(username);
        console.log(password);
        const user = data.users.find(u => u.Username === username && u.Password === password);
        console.log(user);
        if (user) {
            console.log(user);
            if (user.isAdmin) {
                document.cookie = "admin=true; path=/";
                window.location.href = 'admin.html';
            }
            else {
                document.cookie = "user=true; path=/";
                window.location.href = 'users.html';
            }
        }
        else {
            alert('Invalid Username or Password');
        }
    }).catch(error => console.error('Error', error));
});

function setCookie() {
    var u = document.getElementById('Username').value;
    var v = document.getElementById('Password').value;

    document.cookie = "myusername=" + u + ";path=http://127.0.0.1:5500/";
    document.cookie = "mypassword=" + v + ";path=http://127.0.0.1:5500/";
}

function getcookiedata() {
    console.log(document.cookie);
}

