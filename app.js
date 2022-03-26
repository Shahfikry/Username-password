document.getElementById("form").addEventListener("submit", auth);

function auth(event) {
    event.preventDefault();


    var username = document.getElementById("username").value;
    var Password = document.getElementById("password").value;
    console.log(username, Password)

    if (username === "Boboiboy" && Password === "Hello") {
        alert("Login Success");
        return;
    }if (username ==="" && Password === "") {
        alert("Pleass Insert Information");
        return;
    }else{
        alert("Login Failed");

        return;
        
    }
    


}