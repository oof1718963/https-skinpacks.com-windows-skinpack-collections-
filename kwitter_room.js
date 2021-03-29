
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
        apiKey: "AIzaSyAPXVymoo4YJOsUNOGmNwdmvM1i4ariJqg",
        authDomain: "why-you-bully-me-feb20.firebaseapp.com",
        projectId: "why-you-bully-me-feb20",
        storageBucket: "why-you-bully-me-feb20.appspot.com",
        messagingSenderId: "554313718823",
        appId: "1:554313718823:web:7f597c2fa8e6cb5eabc202"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
