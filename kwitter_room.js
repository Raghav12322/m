var firebaseConfig = {
  apiKey: "AIzaSyB0u-Ztg8zFct58PAAq7JdNyTOXYBLALVc",
  authDomain: "kwitter-47c95.firebaseapp.com",
  databaseURL: "https://kwitter-47c95-default-rtdb.firebaseio.com",
  projectId: "kwitter-47c95",
  storageBucket: "kwitter-47c95.appspot.com",
  messagingSenderId: "183738446280",
  appId: "1:183738446280:web:12c00faac5a694fb7010fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var user_name=localStorage.getItem("User Name");
  document.getElementById("username").innerHTML="Welcome "+user_name+"!";
    
  function add_room(){

    var room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose:"Adding Room Name"
    });
    localStorage.setItem("Room Name",room_name);
    window.location="kwitter_page.html";

  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name",Room_names);
      var row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout()
{

  localStorage.removeItem("User Name");
  localStorage.removeItem("room_name");
  
  window.location="index.html";
  
}