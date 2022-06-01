
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyC-yfiKZV8qvigfIp-LHocc8I76F4Fs2IU",
  authDomain: "instatube-345d1.firebaseapp.com",
  databaseURL: "https://instatube-345d1-default-rtdb.firebaseio.com",
  projectId: "instatube-345d1",
  storageBucket: "instatube-345d1.appspot.com",
  messagingSenderId: "677259005301",
  appId: "1:677259005301:web:a2d3cd3eca2b12ffd6d73c"
};
//Se inicializa firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User_name");
document.getElementById("User_name").innerHTML = "¡Bienvenido "+user_name+ "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "agregar room_name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Room name - "+Room_names);
      row = "<div class='room_name' id"+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="Kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}