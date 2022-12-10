
//ADD YOUR FIREBASE LINKS

const firebaseConfig = {
    apiKey: "AIzaSyBco6sfMkumBnrnr273UW-Et1gPL40-luY",
    authDomain: "kwitter-promo.firebaseapp.com",
    databaseURL: "https://kwitter-promo-default-rtdb.firebaseio.com",
    projectId: "kwitter-promo",
    storageBucket: "kwitter-promo.appspot.com",
    messagingSenderId: "102776678679",
    appId: "1:102776678679:web:18f127535bbdca06d42f52"
  };



  firebase.initializeApp(firebaseConfig);

function addUser()
{

user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({

purpose : "adding user"

});



}
