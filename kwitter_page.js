//YOUR FIREBASE LINKS
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
var room_name=localStorage.getItem("room_name");

function send(){

  var msg=document.getElementById("msg").value;

  firebase.database().ref(room_name).push({

    name:user_name,
    message:msg,
    likes:0

  });

  document.getElementById("msg").value="";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("Output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name=message_data['name'];
var message=message_data['message'];
var likes=message_data['likes']; 
name_with_tag="<h4>"+ name +"<img class='user_tick' src='tick.png'> </h4>";
image_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+"onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Likes:"+likes+"</span></button><br>";
row=name_with_tag+image_with_tag+like_button+span_with_tag;
document.getElementById("Output").innerHTML=document.getElementById("Output").value+row;
console.log(user_name);
console.log(room_name);
//End code
      } });  }); }
getData();

function logout(){

  localStorage.removeItem("User Name");
  localStorage.removeItem("room_name");
  
  window.location="index.html";

}

function updatelike(message_id){
  console.log("clicked on the like button"+message_id);
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes)+1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({
    likes:updated_likes
  });
}

