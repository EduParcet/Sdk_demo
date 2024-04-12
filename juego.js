// Variables 
let nombre;
let passWord; 
let juego;
let arclogo = "AaA.png";
let logoApp = "images/"+ arclogo;
// Copnfiguración de colores; 
var ClrAct0 = ["aliceblue", "aliceblue", "aliceblue","aliceblue", "#CCFFE5", "#ff0000", "lightyellow", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray","Uno"];
var ClrAct1 = ["aliceblue", "#ffffff", "aliceblue", "#ffffff", "#FFE5CC", "#ff0000", "#0000f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Dos"];
var ClrAct2 = ["aliceblue", "#ffffff", "aliceblue", "#ffffff", "#FF05CC", "#ff0000", "#0000f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "tres"];
var ClrAct3 = ["#ffffff", "#ffffff", "aliceblue", "#ffffff", "#FFE5CC", "#ff0000", "#0000f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Cuatro"];
var ClrAct4 = ["#ffffff", "#ffffff", "aliceblue", "#ffffff", "#00E5CC", "#ff0000", "#f0f0f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Cinco"];
var ClrAct5 = ["#ffffff", "#ffffff", "aliceblue", "#ffffff", "#FC0000", "#ff0000", "#f0f0f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Seis"];
var ClrAct6 = ["#ffffff", "#ffffff", "aliceblue", "#ffffff", "#99FF99", "#ff0000", "#f0f0f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Siete"];
var ClrAct7 = ["#ffffff", "#ffffff", "aliceblue", "#ffffff", "#99FFFF", "#ff0000", "#f0f0f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Ocho"];
var ClrAct8 = ["#ffffff", "#ffffff", "aliceblue", "#ffffff", "#99CCFF", "#ff0000", "#f0f0f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Vueve"];
var ClrAct9 = ["#ffffff", "#ffffff", "aliceblue", "#ffffff", "#99FFFF", "#ff0000", "#f0f0f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Diez"];

ClrActs = [ClrAct0, ClrAct1, ClrAct2, ClrAct3, ClrAct4, ClrAct5, ClrAct6, ClrAct7, ClrAct8, ClrAct9];

const usuarios =[
  {nU: "admin", pW: "admin", nJ: "uno"},
  {nU: "E", pW: "P", nJ: "cinco"},
];

function ConfigClr() { 
    fondoTbrClr = ClrActs[nClr][0];       // Color de fondo contenedor,
    fondoTcdClr = ClrActs[nClr][1]         // Color de fondo tabla 1
    fondoCtlClr = ClrActs[nClr][2];
    fondoInfClr = ClrActs[nClr][3];

    // Examinar
    celdaDtoClr = ClrActs[nClr][4];        // Color de fondo celda de datos
    celdaDtoTxtClr = ClrActs[nClr][5];         // Color de texto celda de datos
    celdaUsrClr = ClrActs[nClr][6];        // Color de fondo celda de usuario
    celdaUsrTxtClr = ClrActs[nClr][7];         // Color de texto celda de usuario
    
    celdaTcdClr = ClrActs[nClr][8];
    celdaTcdTxtClr = ClrActs[nClr][9];
    
    nomCfgCLr = ClrActs[nClr][14];   
}

// Funciones
function goHome() {
    if (confirm("Seguro que quieres salir?")) {
        window.close();
    }
}

function goApp() {
  nombre = document.getElementById("txtUsr").value;
  passWord = document.getElementById("txtPw").value; 
  
  //alert('Nombre de usuario: ' + nombre+ ' Contraseña: ' + passWord);

  {window.location.href ="./sdk.html";}
}
      
