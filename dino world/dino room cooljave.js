// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQlI8Ci4u95MoCXqdfIiwhWcH7GQiKPrI",
  authDomain: "dinobase-522b3.firebaseapp.com",
  projectId: "dinobase-522b3",
  storageBucket: "dinobase-522b3.appspot.com",
  messagingSenderId: "638860434133",
  appId: "1:638860434133:web:911883ed7cb1cdb984a05c",
  measurementId: "G-0X4G738YSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
  // Initialize Firebase
 // cambia "const app" por "firebase."
 firebase.initializeApp(firebaseConfig);




function getData() {firebase.database().ref("https://dinobase-522b3-default-rtdb.firebaseio.com/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Inicio del código

    //Final del código
    });});}
getData();


function addRoom()
{
  Room_names = document.getElementById("Room_names").value;
  firebase.database().ref("https://dinobase-522b3-default-rtdb.firebaseio.com/").child(Room_names).update({purpose :"adding Room_names"});
  localStorage.setItem("Room_names" = Room_names);
  windows.location="dino room.html";
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