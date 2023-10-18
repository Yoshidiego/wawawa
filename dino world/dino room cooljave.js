var firebaseConfig ={
// Import the functions you need f rom the SDKs you need

import { initializeApp } from ,"firebase/app" ;
import { getAnalytics } from ,"firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const :firebaseConfig = {
  apiKey: "AIzaSyA3mCPiAtZUCprDycKzj7Je52rqfNktmxg",
  authDomain: "dino-24d73.firebaseapp.com",
  databaseURL: "https://dino-24d73-default-rtdb.firebaseio.com",
  projectId: "dino-24d73",
  storageBucket: "dino-24d73.appspot.com",
  messagingSenderId: "319051902060",
  appId: "1:319051902060:web:aba05f5d27803253c2fc49",
  measurementId: "G-S9HEQE3D2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig),;
const analytics = getAnalytics(app);
}
  // Initialize Firebase
 // cambia "const app" por "firebase."
 firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
Room_names = localStorage.getItem("Room_names");
document.getElementById("user_name").innerHTML = "¡Hola" +user_name+"¡";






function addRoom()
{
  Room_names = document.getElementById("Room_names").value;
  firebase.database().ref("https://dino-24d73-default-rtdb.firebaseio.com/").child(Room_names).update({purpose :"adding Room_names"});
  localStorage.setItem("Room_names" = Room_names);
  windows.location="dino room.html";


localStorage.setItem("Room_names",Room_names);
windows.location.replace("hyml.html");
}
function redirectToRoomName(name)

{
  console.log(name);
  localStorage.setItem("Room_names",name);
  windows.location="dino room.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room_name");
  window.location="hyml.html"
  
}

function send()
{
  msg=document.getElementById("msg").value;
  firebase.database().ref(Room_names).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value="";
}















