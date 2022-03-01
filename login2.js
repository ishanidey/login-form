
function validate() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ((username == "admin" && password == "user") || (username == "admin1" && password == "user1") || (username == "admin2" && password == "user2")) {
        alert("login succesfully");
        window.open("project2.html");
        return false;

    }
    else {
        alert("login failed");
    }


}