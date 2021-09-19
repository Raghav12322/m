function add_user()
{

    var user_name=document.getElementById("user_name").value;

    localStorage.setItem("User Name",user_name);

    window.location="kwitter_room.html";

}