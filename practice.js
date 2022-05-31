
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAlVWd40YHz3n7sWX0T1KrdkDvuAnB8VD8",
    authDomain: "kwitter-app-85a66.firebaseapp.com",
    databaseURL: "https://kwitter-app-85a66-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-85a66",
    storageBucket: "kwitter-app-85a66.appspot.com",
    messagingSenderId: "385535512691",
    appId: "1:385535512691:web:47e1b5dbde54c24e4b1a06"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}