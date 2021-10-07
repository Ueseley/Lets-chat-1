function send()
{
    nsg=document.getElementById("nsg") .value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,like:0

    });
    document.getElementById("nsg").value="";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    