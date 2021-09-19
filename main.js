var firebaseConfig = {
    apiKey: "AIzaSyDwyMWJku4xo2T5cdrwc50Ai4bau2pxv7Q",
    authDomain: "project-93-12ab2.firebaseapp.com",
    projectId: "project-93-12ab2",
    storageBucket: "project-93-12ab2.appspot.com",
    messagingSenderId: "167850099101",
    appId: "1:167850099101:web:8c70412ff9bcc0d7caaf74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
;

firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  