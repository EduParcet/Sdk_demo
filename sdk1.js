// Constantes y Variables globales

// Representan las filas, columnas y regiones del tablero 
const fila1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const fila2 = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const fila3 = [18, 19, 20, 21, 22, 23, 24, 25, 26];
const fila4 = [27, 28, 29, 30, 31, 32, 33, 34, 35];
const fila5 = [36, 37, 38, 39, 40, 41, 42, 43, 44];
const fila6 = [45, 46, 47, 48, 49, 50, 51, 52, 53];
const fila7 = [54, 55, 56, 57, 58, 59, 60, 61, 62];
const fila8 = [63, 64, 65, 66, 67, 68, 69, 70, 71];
const fila9 = [72, 73, 74, 75, 76, 77, 78, 79, 80];
const filas = [fila1, fila2, fila3, fila4, fila5, fila6, fila7, fila8, fila9];

let filaX;

const columna1 = [0, 9, 18, 27, 36, 45, 54, 63, 72];
const columna2 = [1, 10, 19, 28, 37, 46, 55, 64, 73];
const columna3 = [2, 11, 20, 29, 38, 47, 56, 65, 74];
const columna4 = [3, 12, 21, 30, 39, 48, 57, 66, 75];
const columna5 = [4, 13, 22, 31, 40, 49, 58, 67, 76];
const columna6 = [5, 14, 23, 32, 41, 50, 59, 68, 77];
const columna7 = [6, 15, 24, 33, 42, 51, 60, 69, 78];
const columna8 = [7, 16, 25, 34, 43, 52, 61, 70, 79];
const columna9 = [8, 17, 26, 35, 44, 53, 62, 71, 80];
const columnas = [
  columna1,
  columna2,
  columna3,
  columna4,
  columna5,
  columna6,
  columna7,
  columna8,
  columna9,
];
let columnaX;

// Celdas de area
const region1 = [0, 1, 2, 9, 10, 11, 18, 19, 20];
const region2 = [3, 4, 5, 12, 13, 14, 21, 22, 23];
const region3 = [6, 7, 8, 15, 16, 17, 24, 25, 26];

const region4 = [27, 28, 29, 36, 37, 38, 45, 46, 47];
const region5 = [30, 31, 32, 39, 40, 41, 48, 49, 50];
const region6 = [33, 34, 35, 42, 43, 44, 51, 52, 53];

const region7 = [54, 55, 56, 63, 64, 65, 72, 73, 74];
const region8 = [57, 58, 59, 66, 67, 68, 75, 76, 77];
const region9 = [60, 61, 62, 69, 70, 71, 78, 79, 80];


const regiones = [
  region1,
  region2,
  region3,
  region4, //
  region5,
  region6,
  region7,
  region8,
  region9,
];
let regionX;

// representan los sudokus existentes, inicial, el de usuario durante el juego y la solución.
let sdks = [
  "070090000400100000006000000080460000060910070005208090000040010900850020200000700",
  "006000020510900860000000400034000650209000180000000304023100000060080500000360040",
  "083200670000000100010083040006830004020010705004075006060000000500006000000000000",
  "000045000200000000800000000006009500915080430000030206000000100004300020600002905",
  "000600009900800020000000300200010006071000090059087003000000000530090072008001605",
  "300000500009708300800109600000006040000000000000807016043085000005400000080091000",
  "000000501480201070000609048207400080005060100109000700000000000500002000700800000",
  "600057000403020000008000004000000062000003000000000030200030600746000500500010080",
  "900085002010200009007000010000000000000060107005000896000059260009700030000020005",
  "090000006604000830002000040000003000180500002020608009900000060058090000301400000",
  "001090007000301006008650130900000005000080302820073600000820000605900000000000050",
  "790000000010025890032009100600703020125000000900000600000010200000000050200060300",
  "900000070030000400700002913010900504300000026020600000450030007000010000100000230",
];

//Propuesta
let sdkIni =["000000000000000000000000000000000000000000000000000000000000000000000000000000000"];
//"000800005035000708004000903000600030090507842780042000309480270400070006260039500"
// Actualización usuario
let sdkUsr=
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000";
// Solución
let sdkSol =
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000";

  // usuario y contraeña de acceso
let usuario;
let contra;
//              tbr        tcd        ctl       inf         dto       dtoTxt    usr        usrTxt     tcd       tcdTxt     sel           igu        cc          err          name 
var ClrAct0 = ["#ff0000", "#ffffff", "#ffffff","#ffffff", "#CCFFE5", "#ff0000", "#ffff00", "#0000ff", "#ffff00", "blue", "lightgreen", "lightblue", "#00ffff", "lightred","Sistema"];
var ClrAct1 = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#FFE5CC", "#ff0000", "yellow", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Dos"];
var ClrAct2 = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#FF05CC", "#ff0000", "lightgray", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "tres"];
var ClrAct3 = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#FFE5CC", "#ff0000", "#lightcoral", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Cuatro"];
var ClrAct4 = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#00E5CC", "#ff0000", "lightred", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Cinco"];
var ClrAct5 = ["aliceblue", "aliceblue", "aliceblue", "#ffffff", "#FC0000", "#ff0000", "#f0f0f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Seis"];
var ClrAct6 = ["#ffffff", "#ffffff", "aliceblue", "#ffffff", "#99FF99", "#ff0000", "#f0f0f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Siete"];
var ClrAct7 = ["#ffffff", "#ffffff", "aliceblue", "#ffffff", "#99FFFF", "#ff0000", "#f0f0f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Ocho"];
var ClrAct8 = ["#ffffff", "#ffffff", "aliceblue", "#ffffff", "#99CCFF", "#ff0000", "#f0f0f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Vueve"];
var ClrAct9 = ["#ffffff", "#ffffff", "aliceblue", "#ffffff", "#99FFFF", "#ff0000", "#f0f0f0", "#0000ff", "aliceblue", "blue", "lightgreen", "lightblue", "#ffff00", "lightgray", "Diez"];

// Leer el archivo de configuración
let ClrActs;

let nClr = 0;
ClrActs = [ClrAct0, ClrAct1, ClrAct2, ClrAct3, ClrAct4, ClrAct5, ClrAct6, ClrAct7, ClrAct8, ClrAct9];


let fondoTbrClr;     // Color de fondo contenedor,
let fondoTcdClr;     // Color de fondo tabla 1
let fondoCtlClr; 
let fondoInfClr; 

let celdaDtoClr;     // Color de fondo celda de datos
let celdaDtoTxtClr;  // Color de texto celda de datos
let celdaUsrClr;     // Color de fondo celda de usuario
let celdaUsrTxtClr;  // Color de texto celda de usuario

let celdaTcdClr;
let celdaTcdTxtClr;


let celdaSelClr;
let celdaIguClr;
let celdaCcClr;
let celdaErrClr;

let nomCfgCLr;

function ConfigClr() { 
 fondoTbrClr = ClrActs[nClr][0];       // Color de fondo contenedor,
 fondoTcdClr = ClrActs[nClr][1]         // Color de fondo tabla 1
 fondoCtlClr = ClrActs[nClr][2];
 fondoInfClr = ClrActs[nClr][3];

 celdaDtoClr = ClrActs[nClr][4];        // Color de fondo celda de datos
 celdaDtoTxtClr = ClrActs[nClr][5];         // Color de texto celda de datos
 celdaUsrClr = ClrActs[nClr][6];        // Color de fondo celda de usuario
 celdaUsrTxtClr = ClrActs[nClr][7];         // Color de texto celda de usuario

 celdaTcdClr = ClrActs[nClr][8];
 celdaTcdTxtClr = ClrActs[nClr][9];

 celdaSelClr = ClrActs[nClr][10];
 celdaIguClr= ClrActs[nClr][11];
 celdaCcClr= ClrActs[nClr][12];
 celdaErrClr = ClrActs[nClr][13];
 nomCfgCLr = ClrActs[nClr][14];   
}







// Configuracion de color
let Config;

// distintos gardos de maestria de usuario
let apren;
let expo;
let mstro;

// Areas de región
let reg1;
let reg2;
let reg3;
let reg4;
let reg5;
let reg6;
let reg7;
let reg8;
let reg9;



// Areas
//let cnt; // div contenedor
//let tbr; // div 
//let ctl; // div controles
//let tcd; // div teclado
//let inf; // div ventana de información

let Teclado;


// Definir ...
//let ancho = 1;
//let lsAncho = ancho + "px";

// Tablero
//let tabla;
//let tblBody;
//let Fila;
//let celda;

// teclado
let tabla1; // tabla del teclado
let tbl1Body;
let linea;
let tecla; // celda del teclado

// Radio borde celtas y teclas más grosor borde
let r = 4;

// Espaciamento de celdas
let espacioCell = 1; // en vh


/*
// Paso vh a px
let scrAncho = screen.width;
let scrAlto = screen.height;
let vhx = Math.trunc(scrAlto / 100);
let btnLado = vhx * 4;
let body;
*/

// Juego
let partidaEnCurso = 0; // 0 = no hay partida en curso  1 = hay partida en curso

// Celda clicada
let celdaClic = -1;     // celda clicada
let celdaClicVlr = -1;  // valor de la celda clicada

// Celda seleccionada
let celdaSel = -1;    // celda seleccionada
let celdaSelAnt = -1; // celda seleccionada anterior
let celdaSelVlr = -1; // valor de la celda seleccionada


// Celdas con valores iguales
let celdaIguVal = 0;    // Dato seleccionado 0 ninguno
let celdaIguAct = "V";  // visualizar ="V"  Ocultar="O"  selección de iguales
let igualContenidoAct = false;


// Celdas condicionantes
let cCAct = false;        // celda condicionada no activada    
let cCOperando = 0; // celdas condicionadas operando

let celdaCcAnt = -1; // celda condicionada anterior

// Visualizar error
let avisoErrAct = false; // Avisar en caso de introducir un numero erroneo en la celda

// Falta una celda para completar la zona
let falta1Act = false;

// Borrador true = activado
let borradorAct = false;

// OPeración actual
let operAct = 0;    //Tipo de operacion actual


// Marcas de lapiz
let mLAct = false;
let mLsAct = false;

let celdaMLAct = -1; // celda con marcas de lapiz desactivada
// Control
let sel1;
let sel2;
let sel3;

let nvlDificultad;
let nvlDestreza;

let ContarIguales;
let cIguales=[0,0,0,0,0,0,0,0,0];

let mUnicos;
let mLpz;


let cMlIguLon=[0,0,0,0,0,0,0,0,0];  // Número de marcas de lapiz en la celda
// Cronometro
let tiempoInicial;
let intervalo;
let nMlLon =[]; // Lontitud de las Marcas de lapiz


let cfgClrAct;
let IzqDch="D"; // Izquierda derecha

function cambiarID() {
  if (partidaEnCurso == 1) {
    alert("No se puede cambiar de posición con una partida en curso");
    return;
  }
  //alert("cambiarID");
  cnt = document.getElementById("cntId");
  inf = document.getElementById("infId");
  cnt.remove();
  inf.remove();
  if (IzqDch == "D") {
     IzqDch = "I";
  } else {
     IzqDch = "D";
  }
  
  empezar();
}  

window.onload = function() {
  empezar();
}

window.onload = function() {  
   // Configuración de color
   if (nClr == undefined) {  
   nClr = 0; // Color por defecto
   }
    
   //cfgClrAct = ClrActs[nClr]

   empezar();
}

function empezar() {
   let body = document.getElementsByTagName("body")[0];  

   // Comunes
   // Crear el div contenedor y agregarlo al body
   let cnt = document.createElement('div');
   cnt.id = 'cntId';
   cnt.style.width = '108vh';
   cnt.style.height = '95vh';
   cnt.style.backgroundColor = "white"; // Color de fondo para visualizar el div
   
   document.body.appendChild(cnt);

   // Crear el primer div hijo (jgo) y agregarlo a cnt
   let jgo = document.createElement('div');
   jgo.id = 'jgoId';
   jgo.style.width = '108vh';
   jgo.style.height = '84vh';
   jgo.style.backgroundColor = 'white'; // Color de fondo para visualizar el div
   jgo.style.display = 'flex'; // Esto hará que los div hijos se muestren uno al lado del otro
   //jgo.style.justifyContent = 'space-between'; // Esto añadirá una separación entre los div hijos
   //jgo.style.border = '1px solid navy'; // Añadir borde
   cnt.appendChild(jgo);

   // Crear el primer div hijo de jgo (ctt) y agregarlo a jgo
   if (IzqDch == "D") {
      let ctt = document.createElement('div');
      ctt.id = 'cttId';
      ctt.style.width = '77vh';
      ctt.style.height = '84vh';
      ctt.style.backgroundColor = 'white'; // Color de fondo para visualizar el div
     
      jgo.appendChild(ctt);

      // Crear el primer div hijo de ctt (tbr) y agregarlo a ctt
      let tbr = document.createElement('div');
      tbr.id = 'tbrId';
      tbr.style.width = '77vh';
      tbr.style.height = '77vh';
      tbr.style.backgroundColor = fondoTbrClr; // Color de fondo para visualizar el div
      tbr.style.border = '1px solid navy'; // Añadir borde
      CrearTablero(tbr);

      ctt.appendChild(tbr);

      // Crear el segundo div hijo de ctt (tcd) y agregarlo a ctt
      let tcd = document.createElement('div');
      tcd.id = 'tcdId';
      tcd.style.width = '77vh';
      tcd.style.height = '6vh';
      tcd.style.backgroundColor = fondoTcdClr; // Color de fondo para visualizar el div
      tcd.style.marginTop = '1vh'; // Añadir un margen superior para crear una separación entre tbr y tcd
      tcd.style.border = '1px solid navy'; // Añadir borde
      dibujarTcd(tcd,cnt, body);

      ctt.appendChild(tcd);

      // Crear el segundo div hijo de jgo (ctl) y agregarlo a jgo
      let ctl = document.createElement('div');
      ctl.id = 'ctlId';
      ctl.style.width = '30vh';
      ctl.style.height = '84vh';
      ctl.style.backgroundColor = fondoCtlClr; // Color de fondo para visualizar el div
      ctl.style.border = '1px solid navy'; // Añadir borde
      
      crearControles(ctl);

      jgo.appendChild(ctl);

   } else if (IzqDch == "I") {

      // Crear el primer div hijo de jgo (ctl) y agregarlo a jgo
      let ctl = document.createElement('div');
      ctl.id = 'ctlId';
      ctl.style.width = '30vh';
      ctl.style.height = '84vh';
      ctl.style.backgroundColor = 'white'; // Color de fondo para visualizar el div
      ctl.style.border = '1px solid navy';
      crearControles(ctl);

      jgo.appendChild(ctl);
   
      // Crear el segundo div hijo de jgo (ctt) y agregarlo a jgo
      let ctt = document.createElement('div');
      ctt.id = 'cttId';
      ctt.style.width = '77vh';
      ctt.style.height = '84vh';
      ctt.style.backgroundColor = 'white'; // Color de fondo para visualizar el div
     
      jgo.appendChild(ctt);
   
      // Crear el primer div hijo de ctt (tbr) y agregarlo a ctt
      let tbr = document.createElement('div');
      tbr.id = 'tbrId';
      tbr.style.width = '77vh';
      tbr.style.height = '77vh';
      tbr.style.backgroundColor = 'white'; // Color de fondo para visualizar el div
      tbr.style.border = '1px solid navy'; // Añadir borde
      CrearTablero(tbr);

      ctt.appendChild(tbr);
   
      // Crear el segundo div hijo de ctt (tcd) y agregarlo a ctt
      let tcd = document.createElement('div');
      tcd.id = 'tcdId';
      tcd.style.width = '77vh';
      tcd.style.height = '6vh';
      tcd.style.backgroundColor = 'white'; // Color de fondo para visualizar el div
      tcd.style.marginTop = '1vh'; // Añadir un margen superior para crear una separación entre tbr y tcd
      tcd.style.border = '1px solid navy'; // Añadir borde
      dibujarTcd(tcd,cnt, body);
      
      ctt.appendChild(tcd);
   
   }

   
// Crear el segundo div hijo (inf) y agregarlo a cnt
   let inf = document.createElement('div');
   inf.id = 'infId';
   inf.className = 'infCls';
   //inf.style.width = '108vh';
   //inf.style.height = '10vh';
   inf.style.backgroundColor = fondoInfClr; // Color de fondo para visualizar el div
   //inf.style.marginTop = '1vh'; // Añadir un margen superior para crear una separación entre jgo e inf
   inf.style.border = '1px solid navy'; // Añadir borde
   crearVenInfo(inf,body);
    cnt.appendChild(inf);
    body.appendChild(cnt);


   Entrada();
}

function Entrada() {  
 

 
}

function CrearTablero(tbr) {
  // Definir las regiones del tablero
  reg1 = document.createElement("div");
  reg1.id = "reg1Id";
  reg1.className = "regCls";
  reg1.appendChild(crearTabla(0));

  reg2 = document.createElement("div");
  reg2.className = "regCls";
  reg2.appendChild(crearTabla(1));

  reg3 = document.createElement("div");
  reg3.className = "regCls";
  reg3.appendChild(crearTabla(2));

  reg4 = document.createElement("div");
  reg4.className = "regCls";
  reg4.appendChild(crearTabla(3));

  reg5 = document.createElement("div");
  reg5.className = "regCls";
  reg5.appendChild(crearTabla(4));

  reg6 = document.createElement("div");
  reg6.className = "regCls";
  reg6.appendChild(crearTabla(5));

  reg7 = document.createElement("div");
  reg7.className = "regCls";
  reg7.appendChild(crearTabla(6));

  reg8 = document.createElement("div");
  reg8.className = "regCls";
  reg8.appendChild(crearTabla(7));

  reg9 = document.createElement("div");
  reg9.className = "regCls";
  reg9.appendChild(crearTabla(8));

  let fil1 = document.createElement("div");
  fil1.className = "filCls";

  // Columnas
  col1 = document.createElement("div");
  col1.className = "colCls";
  

  let lsV1Cls = document.createElement("div");
  lsV1Cls.className = "lsVCls";

  let lsV2Cls = document.createElement("div");
  lsV2Cls.className = "lsVCls";

  let lsV3Cls = document.createElement("div");
  lsV3Cls.className = "lsVCls";

  let lsV4Cls = document.createElement("div");
  lsV4Cls.className = "lsVCls";

  let lsV5Cls = document.createElement("div");
  lsV5Cls.className = "lsVCls";

  let lsV6Cls = document.createElement("div");
  lsV6Cls.className = "lsVCls";

  //-------------

  let lsH1Cls = document.createElement("div");
  lsH1Cls.className = "lsHCls";

  let lsH2Cls = document.createElement("div");
  lsH2Cls.className = "lsH2Cls";

  let lsH3Cls = document.createElement("div");
  lsH3Cls.className = "lsHCls";

  let lsH4Cls = document.createElement("div");
  lsH4Cls.className = "lsH4Cls";

  let lsH5Cls = document.createElement("div");
  lsH5Cls.className = "lsHCls";

  let lsH6Cls = document.createElement("div");
  lsH6Cls.className = "lsHCls";

  let lsH7Cls = document.createElement("div");
  lsH7Cls.className = "lsH2Cls";

  let lsH8Cls = document.createElement("div");
  lsH8Cls.className = "lsHCls";

  let lsH9Cls = document.createElement("div");
  lsH9Cls.className = "lsH4Cls";

  let lsHACls = document.createElement("div");
  lsHACls.className = "lsHCls";

  //tbr = document.getElementById("tbrId");
  tbr.appendChild(reg1);
  tbr.appendChild(lsV1Cls);
  tbr.appendChild(reg2);
  tbr.appendChild(lsV2Cls);
  tbr.appendChild(reg3);

  tbr.appendChild(lsH1Cls);
  tbr.appendChild(lsH2Cls);
  tbr.appendChild(lsH3Cls);
  tbr.appendChild(lsH4Cls);
  tbr.appendChild(lsH5Cls);
  tbr.appendChild(reg4);
  tbr.appendChild(lsV3Cls);
  tbr.appendChild(reg5);
  tbr.appendChild(lsV4Cls);
  tbr.appendChild(reg6);

  tbr.appendChild(lsH6Cls);
  tbr.appendChild(lsH7Cls);
  tbr.appendChild(lsH8Cls);
  tbr.appendChild(lsH9Cls);
  tbr.appendChild(lsHACls);

  tbr.appendChild(reg7);
  tbr.appendChild(lsV5Cls);
  tbr.appendChild(reg8);
  tbr.appendChild(lsV6Cls);
  tbr.appendChild(reg9);
  
  let contenedor = document.getElementById("cntId");
  contenedor.appendChild(tbr);
}

function crearTabla(r) {
  // Tablero de juego
  let tabla = document.createElement("table");
  //tabla.id = "tablaId";
  tabla.className = "tablaCls";
  tabla.style.fontSize = "3vh";
  tabla.style.borderSpacing = espacioCell + "vh";  
  tabla.style.width = "100%";
  tabla.style.height = "100%";

  //tabla.style.marginLeft = "0.5vh";
  //tabla.style.marginTop = "0.5vh";

  //tabla.style.border="1px solid navy";
  //table.style.border=  ancBrdTbl + ' ' +  tpoBrdTbl + ' ' + clrBrdTbl;

  let tblBody = document.createElement("tbody");

  let celda;

  // Crear las filas y las celdas
  for (let i = 0; i < 3; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      celda = document.createElement("td");
      //tbr.style.borderSpacing

      // Tamaño de celda 
      let num = (76 / 3 - 4 * espacioCell) / 3;
      //alert(num);
      let lon = Math.trunc(num * 10) / 10 + "vh";
      
      celda.style.width = lon;
      celda.style.height = lon;
      
      celda.style.borderRadius = "5px 5px 5px 5px";
      celda.style.textAlign = "center";
      
      // Color de usuario    
      celda.style.backgroundColor = celdaUsrClr // "#FFFFFF";
      celda.addEventListener("click", function () {
        fcTabla(this);
      });

      // Barra vertical
      if (j == 2) {
        celda.style.borderRight = "10px";
      }

      celda.id = "c" + nuevoId(r, 3 * i + j) + "Id";
      celda.style.border = "1px solid navy";

      //celda.innerHTML=""+nuevoId(r,3*i+j);
      row.appendChild(celda);
    }
    tblBody.appendChild(row);
  }
  tabla.appendChild(tblBody);
  
  return tabla;
}

// id de tabla ún
function nuevoId(r, j) {
  let ind;
  if (r == 0) {
    ind = region1[j];
  }
  if (r == 1) {
    ind = region2[j];
  }
  if (r == 2) {
    ind = region3[j];
  }
  if (r == 3) {
    ind = region4[j];
  }
  if (r == 4) {
    ind = region5[j];
  }
  if (r == 5) {
    ind = region6[j];
  }
  if (r == 6) {
    ind = region7[j];
  }
  if (r == 7) {
    ind = region8[j];
  }
  if (r == 8) {
    ind = region9[j];
  }

  return ind;
}

function crearControles(ctl) {
  // POSICIONAMIENTO DE LOS BOTONES
    let controles=document.createElement("table");
    controles.id="controlesId";
    controles.style.height="5vh";
    controles.style.width="70%";     
    controles.style.borderRadius="5px 5px 5px 5px";
  
    controles.style.borderSpacing = espacioCell + "vh";
    controles.style.margin ="auto";
    let linea1 = document.createElement("tr");
    let c11 = document.createElement("td");
    let c12 = document.createElement("td");
    
    let linea2 = document.createElement("tr");
    let c21 = document.createElement("td");
    let c22 = document.createElement("td");
      
    let linea3 = document.createElement("tr");  
    let c31 = document.createElement("td"); 
    let c32 = document.createElement("td");

    let linea4 = document.createElement("tr");
    let c41 = document.createElement("td");
    let c42 = document.createElement("td");

    let linea5 = document.createElement("tr");
    let c51 = document.createElement("td");
    let c52 = document.createElement("td");

    let linea6 = document.createElement("tr");
    let c61 = document.createElement("td");
    let c62 = document.createElement("td");

    let linea7 = document.createElement("tr");
    let c71 = document.createElement("td");
    let c72 = document.createElement("td");

    let linea8 = document.createElement("tr");
    let c81 = document.createElement("td");
    let c82 = document.createElement("td");

    let linea9 = document.createElement("tr");
    let c91 = document.createElement("td");
    let c92 = document.createElement("td");

   
    // CONTROLES
    // Nueva partida
    var np=document.createElement("button");  
    np.id="npId";
    np.className="btnCls";
    np.title="Nueva partida";    
    np.style.border="4px solid green";
    np.addEventListener("click", function(){fNuevaPartida();});
    
    var imagen1 =document.createElement("img");
    imagen1.alt="Nueva partida";
    imagen1.src="images/Np1.jpeg";
    imagen1.className="imgCls";
    np.appendChild(imagen1);
    
    // Empezar de nuevo
    var empezar=document.createElement("button");
    empezar.id="empezarId";
    empezar.className="btnCls";
    empezar.title="Reiniciar la partida";
    empezar.addEventListener("click", function(){ fEmpezar();});
    empezar.style.border="4px solid green";

    var imagen1 =document.createElement("img");
    imagen1.alt="";
    imagen1.src="images/Izda1.jpeg";    //empezar.png";
    imagen1.className="imgCls";
    empezar.appendChild(imagen1);
    
    c11.appendChild(np);
    linea1.appendChild(c11);
    controles.appendChild(linea1);
    c12.appendChild(empezar);
    linea1.appendChild(c12);
    controles.appendChild(linea1);
    
    ctl.appendChild(controles);


    var eliminarPartida=document.createElement("button");
    eliminarPartida.id="eliminarPartidaId";
    eliminarPartida.className="btnCls";
    eliminarPartida.title="eliminar Partida";
    eliminarPartida.addEventListener("click", function(){ fEliminarPartida();});
    eliminarPartida.style.border="4px solid green";
    
    var imagen1 =document.createElement("img");
    imagen1.alt="";
    imagen1.src="images/eliimina.jpeg";
    imagen1.className="imgCls";
    
    //eliminarPartida
    eliminarPartida.appendChild(imagen1);
    //centrar.appendChild(eliminarPartida);
   

    // Presentar solución
   var solve=document.createElement("button");
   solve.id="solveId";
   solve.className="btnCls";
   solve.title="Resolver sudoku";
   solve.addEventListener("click", function(){fVisSolSdk();});
   solve.style.border="4px solid green";
   
   var imagen1 =document.createElement("img");
   imagen1.alt="";
   imagen1.src="images/bombilla.jpg";
   imagen1.className="imgCls";
   
   //solve
   solve.appendChild(imagen1);
   
   c81.appendChild(eliminarPartida);  
   linea8.appendChild(c81);
   c82.appendChild(solve);
   linea8.appendChild(c82);
   controles.appendChild(linea8);
   ctl.appendChild(controles);
   

    // Linea 2 con dos contrloles
    // Aviso de error
    var aviso=document.createElement("button");
    aviso.id="avisoId";
    aviso.className="btnCls";
    aviso.title="aviso de error";
    aviso.addEventListener("click", function(){ fAviso();});
    aviso.style.border="4px solid red";

    var imagen =document.createElement("img");
    imagen.alt="";
    imagen.src="images/Aviso.png";
    imagen.id ="avisoId";
    imagen.className="imgCls";

    aviso.appendChild(imagen);
    //centrar.appendChild(aviso);
 
 
    // Falta una casilla para completar la zona
    var falta=document.createElement("button");
    falta.id="faltaId";
    falta.className="btnCls";
    falta.title="falta una celda para completar la zona";
    falta.addEventListener("click", function(){ fFalta();});
    falta.style.border="4px solid red";

    var imagen1 =document.createElement("img");
    imagen1.alt="";
    imagen1.src="images/falta1.png";
    imagen1.className="imgCls";
  
    falta.appendChild(imagen1);
    
    c21.appendChild(aviso);
    linea2.appendChild(c21);
    controles.appendChild(linea2);
    c22.appendChild(falta);
    linea2.appendChild(c22);
    controles.appendChild(linea2);
    ctl.appendChild(controles);

  /*
  var unicos=document.createElement("button");
  unicos.id="unicosId";
  unicos.className="btnCls";
  unicos.title="Celdas con candidatos únicos";
  unicos.addEventListener("click", function(){ fUnicos();});
 
  var imagen1 =document.createElement("img");
  imagen1.alt="";
  imagen1.src="images/unicos.png";
  imagen1.className="imgCls";
  unicos.appendChild(imagen1);
 
  c31.appendChild(iguales);  
  linea3.appendChild(c31);
  c32.appendChild(unicos);
  linea3.appendChild(c32);
  controles.appendChild(linea3);
  ctl.appendChild(controles);
  */

  // Cuarta fila 
  // Visualizar todos errores 
  var visErr=document.createElement("button");
  visErr.id="visErrId";
  visErr.className="btnCls";
  visErr.title="Visualizar errores";
  visErr.addEventListener("click", function(){ fVisErr();});
  visErr.style.border="4px solid red";

  var imagen1 =document.createElement("img");
  imagen1.alt="";
  imagen1.src="images/errores.png";
  imagen1.className="imgCls";  
  visErr.appendChild(imagen1);

 
  // Borrador
  var borrador=document.createElement("button");
  borrador.id="borradorId";
  borrador.className="btnCls";
  borrador.title="Borrador";
  borrador.addEventListener("click", function(){ fBorrador();});
  borrador.style.border="4px solid red";

  var imagen1 =document.createElement("img");
  imagen1.alt="";
  imagen1.src="images/borra.png";
  imagen1.className="imgCls";
  
  borrador.appendChild(imagen1);
  c41.appendChild(visErr);  
  linea4.appendChild(c41);
  c42.appendChild(borrador);
  linea4.appendChild(c42);
  controles.appendChild(linea4);
  ctl.appendChild(controles);
  

//Marcas de Lapiz
var mL=document.createElement("button");
mL.id="mLId";
mL.className="btnCls";
mL.title="Mostrar Marcas de Lápiz";
mL.addEventListener("click", function(){ fVisML();});
mL.style.border="4px solid red";

var imagen1 =document.createElement("img");
imagen1.alt="";
imagen1.src="images/Lapiz2.png";
imagen1.className="imgCls";

//mL
mL.appendChild(imagen1);
 
 //CC
  var cc=document.createElement("button");
  cc.id="ccId";
  cc.className="btnCls";
  cc.title="Celdas condicionantes";
  cc.addEventListener("click", function(){ fCc();});
  cc.style.border="4px solid red";
 
  var imagen1 =document.createElement("img");
  imagen1.alt="";
  imagen1.src="images/ccX.png";
  imagen1.className="imgCls";
  cc.appendChild(imagen1);
  
 
  c51.appendChild(mL);  
  linea5.appendChild(c51);
  c52.appendChild(cc);
  linea5.appendChild(c52);
  controles.appendChild(linea5);
  ctl.appendChild(controles);
  
  
  /*
  var altavoz=document.createElement("button");
  altavoz.id="altavozId";
  altavoz.className="btnCls";
  altavoz.title="altavoz";
  altavoz.addEventListener("click", function(){ fAltavoz();});
  
 
  var imagen1 =document.createElement("img");
  imagen1.alt="Sonido";
  imagen1.src="images/AltavozNo.png";
  imagen1.className="imgCls";
  altavoz.appendChild(imagen1);
  
     
 // Notas
 var notas=document.createElement("button");
 notas.id="notasId";
 notas.className="btnCls";
 notas.title="Notas";
 notas.addEventListener("click", function(){ fNotas();});
 
 var imagen1 =document.createElement("img");
 imagen1.alt="";
 imagen1.src="images/Notas.png";
 imagen1.className="imgCls";
  
 notas.appendChild(imagen1);
 
 
  c61.appendChild(altavoz);  
  linea6.appendChild(c61);
  c62.appendChild(notas);
  linea6.appendChild(c62);
  controles.appendChild(linea6);
  ctl.appendChild(controles);
  */
/*
  // Datos
  var Datos=document.createElement("button");
  Datos.id="DatosId";
  Datos.className="btnCls";
  Datos.title="Datos";
  Datos.addEventListener("click", function(){ fDatos();});
  Datos.style.border="4px solid navy";

  var imagen1 =document.createElement("img");
  imagen1.alt="";
  imagen1.src="images/Datos.png";
  imagen1.className="imgCls";                                                                                                                   
 
  //Datos
  Datos.appendChild(imagen1);
  
  
 
 
  //Menu
 var menu=document.createElement("button");
 menu.id="menuId";
 menu.className="btnCls";
 menu.title="Menú";
 menu.addEventListener("click", function(){ fMenu();});
 menu.style.border="4px solid navy";
 
 var imagen1 =document.createElement("img");
 imagen1.alt="";
 imagen1.src="images/menu.png";
 imagen1.className="imgCls";
 
 //menu
 menu.appendChild(imagen1);
 
 c71.appendChild(Datos);  
 linea7.appendChild(c71);
 c72.appendChild(menu);
 linea7.appendChild(c72);
 controles.appendChild(linea7);
 ctl.appendChild(controles);
*/
  
 // Ayuda
  //var centrar= document.createElement("p")
  var ayuda=document.createElement("button");
  ayuda.id="ayudaId";
  ayuda.className="btnCls";
  ayuda.title="ayuda";
  ayuda.addEventListener("click", function(){ fAyuda();});
  ayuda.style.border="4px solid navy";

  ayuda.width="35px";
  ayuda.height="35px"
  
  var imagen1 =document.createElement("img");
  imagen1.alt="";
  imagen1.src="images/Ayuda.png";
  imagen1.className="imgCls";
 
  //Ayuda
  ayuda.appendChild(imagen1);

 
 
//Salida
var salida=document.createElement("button");
salida.id="salidaId";
salida.className="btnCls";
salida.title="salida";
salida.addEventListener("click", function(){fSalida();});
salida.style.border="4px solid navy";

var imagen1 =document.createElement("img");
imagen1.alt="";
imagen1.src="images/Salida.jpeg";
imagen1.className="imgCls";

//salida
salida.appendChild(imagen1);

  c91.appendChild(ayuda);  
  linea9.appendChild(c91);
  c92.appendChild(salida);
  linea9.appendChild(c92);
  controles.appendChild(linea9);
  ctl.appendChild(controles);
  
  //menu   
  let menuP =document.createElement("div");
  menuP.id = "minuPId";
  menuP.className = "menuPCls";
  sel3 = document.createElement("select");
  sel3.id = "sel3Id";
  sel3.className = "sel3Cls";
  //sel3.onchange="menuOpcion(this)";
  sel3.innerHTML = "Menu de la aplicación";
  sel3.style.width = "90%";
  sel3.style.height = "100%";
  sel3.style.marginLeft = "5%";
  sel3.style.backgroundColor = "white";
  sel3.style.color = "navy";
  sel3.style.border = "4px solid navy";
  sel3.style.borderRadius = "5px 5px 5px 5px";
  sel3.style.textAlign = "center";
  sel3.style.fontSize = "2vh";
  sel3.style.fontWeight = "bold";
  sel3.style.marginTop = "1px";
  sel3.style.marginBottom = "15px";
  sel3.style.padding = "5px";
  sel3.style.borderSpacing = espacioCell + "vh";

  sel3.options[0] = new Option("Menú", 0);
  sel3.options[1] = new Option("Sdks guardados", "1");
  sel3.options[2] = new Option("Nuevo sudoku", "2");
  sel3.options[3] = new Option("Usuarios", "3");
  sel3.options[4] = new Option("Configuración", "4");
  sel3.options[5] = new Option("Imprimir Sdk", "5");

  menuP.appendChild(sel3);
  ctl.appendChild(menuP);


  // Nivel de destreza
  let destreza =document.createElement("div");
  destreza.id = "destrezaId";
  destreza.className = "destrezaCls";
  sel1 = document.createElement("select");
  sel1.id = "sel1Id";
  sel1.className = "sel1Cls";
  sel1.innerHTML = "Nivel de destreza";
  sel1.style.width = "90%";
  sel1.style.height = "100%";
  sel1.style.marginLeft = "5%";
  sel1.style.backgroundColor = "white";
  sel1.style.color = "navy";
  sel1.style.border = "4px solid navy";
  sel1.style.borderRadius = "5px 5px 5px 5px";
  sel1.style.textAlign = "center";
  sel1.style.fontSize = "2vh";
  sel1.style.fontWeight = "bold";
  sel1.style.marginTop = "1px";
  sel1.style.marginBottom = "15px";
  sel1.style.padding = "5px";
  sel1.style.borderSpacing = espacioCell + "vh";
  sel1.options[0] = new Option("Aprendiz", "1");
  sel1.options[1] = new Option("Experto", "2");
  sel1.options[2] = new Option("Maestro", "3");

  destreza.appendChild(sel1);
  ctl.appendChild(destreza);

  // Nivel de dificultad
  let dificultad =document.createElement("div");
  dificultad.id = "dificultadId";
  dificultad.className = "dificultadCls";
  sel2 = document.createElement("select");
  sel2.id = "sel2Id";
  sel2.className = "sel2Cls";
  sel2.innerHTML = "Nivel de dificultad";
  sel2.style.width = "90%";
  sel2.style.height = "100%";
  sel2.style.marginLeft = "5%";
  sel2.style.backgroundColor = "white";
  sel2.style.color = "navy";
  sel2.style.border = "4px solid navy";
  sel2.style.borderRadius = "5px 5px 5px 5px";
  sel2.style.textAlign = "center";
  sel2.style.fontSize = "2vh";
  sel2.style.fontWeight = "bold";
  sel2.style.marginTop = "2px";
  sel2.style.marginBottom = "25px";
  sel2.style.padding = "5px";
  sel2.style.borderSpacing = espacioCell + "vh";
  sel2.options[0] = new Option("Muy facil", "1");
  sel2.options[1] = new Option("Facil", "2");
  sel2.options[2] = new Option("Nomal", "3");
  sel2.options[3] = new Option("Dificil", "1");
  sel2.options[4] = new Option("Muy dificil", "2");
  sel2.options[5] = new Option("Extremo", "3");
  
  dificultad.appendChild(sel2);
  ctl.appendChild(dificultad);
 

  // Cambiar colores  
  let actClr =document.createElement("div");
  actClr.id = "actClrId";
  actClr.className = "actClrCls";

  selc = document.createElement("select");
  selc.id = "selcId";
  selc.className = "selcCls";
  
  selc.innerHTML = "Menu de la aplicación";
  selc.style.width = "90%";
  selc.style.height = "100%";
  selc.style.marginLeft = "5%";
  selc.style.backgroundColor = "white";
  selc.style.color = "navy";
  selc.style.border = "4px solid navy";
  selc.style.borderRadius = "5px 5px 5px 5px";
  selc.style.textAlign = "center";
  selc.style.fontSize = "2vh";
  selc.style.fontWeight = "bold";
  selc.style.marginTop = "1px";
  selc.style.marginBottom = "15px";
  selc.style.padding = "5px";
  selc.style.borderSpacing = espacioCell + "vh";
  selc.onchange = function(){cambiarArcColor()};
  let NumClrs = ClrActs.length;
  //selc.options[0] = new Option("Act Colores", 0);

  for (let i = 0; i < NumClrs; i++){       
    selc.options[i] = new Option(ClrActs[i][14]);
  }

  actClr.appendChild(selc);
  ctl.appendChild(actClr); 

  //definirContrlClr(); 
  let defClr =document.createElement("div");
  defClr.id = "defClrId";
  defClr.className = "defClrCls";

  selColor = document.createElement("select");
  selColor.id = "selColorId";
  selColor.className = "selColorCls";
  
  selColor.innerHTML = "Definir colores del programa";
  selColor.style.width = "90%";
  selColor.style.height = "100%";
  selColor.style.marginLeft = "5%";
  selColor.style.backgroundColor = "white";
  selColor.style.color = "navy";
  selColor.style.border = "4px solid navy";
  selColor.style.borderRadius = "5px 5px 5px 5px";
  selColor.style.textAlign = "center";
  selColor.style.fontSize = "2vh";
  selColor.style.fontWeight = "bold";
  selColor.style.marginTop = "1px";
  selColor.style.marginBottom = "15px";
  selColor.style.padding = "5px";
  selColor.style.borderSpacing = espacioCell + "vh";
  selColor.onchange = function(){defColor(selColor.selectedIndex)};
  //let NumClrs = ClrActs.length;
  
  selColor.options[0] = new Option("Def. Colores", 0);

  selColor.options[1] = new Option("Fondo tablero", "1");
  selColor.options[2] = new Option("Fondo controles", "2"); 
  selColor.options[3] = new Option("Fondo teclado", "3");
  selColor.options[4] = new Option("Fondo información", "4");


  defClr.appendChild(selColor);
  ctl.appendChild(defClr); 
     
}
//function comprobarSi
function defColor(n) {
  alert("Definir color opción: " + n);
}

function cambiarArcColor() {  
  var select = document.getElementById('selcId');
  select.addEventListener('change',
    function(){var selectedOption = this.options[select.selectedIndex];
      console.log(selectedOption.value + ': ' + selectedOption.text);
      });

   let x = document.getElementById("selcId");
 /*   if (x.selectedIndex==0){
    return
  } */

  nClr = x.selectedIndex;
  //alert("Cambiar color: " + nClr);
  ConfigClr();
  fLimpiar();
}

function definirContrlClr() {
  // Definir colores  
  let defClr =document.createElement("div");
  defClr.id = "defClrId";
  defClr.className = "defClrCls";

  selColor = document.createElement("select");
  selColor.id = "selColorId";
  selColor.className = "selColorCls";
  
  selColor.innerHTML = "Definir colores del programa";
  selcolor.style.width = "90%";
  selcolor.style.height = "100%";
  selcolor.style.marginLeft = "5%";
  selcolor.style.backgroundColor = "white";
  selcolor.style.color = "navy";
  selcolor.style.border = "4px solid navy";
  selcolor.style.borderRadius = "5px 5px 5px 5px";
  selcolor.style.textAlign = "center";
  selcolor.style.fontSize = "2vh";
  selcolor.style.fontWeight = "bold";
  selcolor.style.marginTop = "1px";
  selcolor.style.marginBottom = "15px";
  selcolor.style.padding = "5px";
  selcolor.style.borderSpacing = espacioCell + "vh";
  selcolor.onchange = function(){cambiarArcColor()};
  let NumClrs = ClrActs.length;
  
  selcolor.options[0] = new Option("Def. Colores", 0);
/* 
  for (let i = 1; i < NumClrs; i++){       
    selcolor.options[i] = new Option(ClrActs[i][14]);
  }
 */
  selColor.options[1] = new Option("Color fondo panel tablero", "1");
  selColor.options[2] = new Option("Color fondo panel de controles", "2"); 
  selColor.options[3] = new Option("Color fondo panel de teclado", "3");
  selColor.options[4] = new Option("Color fondo panel de información", "4");   
  }
function dibujarTcd(tcd,cnt,inf,body) {  
  tabla1 = document.createElement("table");
  tabla1.id = "tabla1Id";
  tabla1.className = "tabla1Cls";
  tabla1.style.backgroundColor = "white";
  tabla1.style.color = "blue"; 
  tabla1.style.marginTop="0.5vh";
  tabla1.style.height="3.5vh";

  tbl1Body = document.createElement("tbody");
 
  // Crea las filas de la tabla
  linea = document.createElement("tr");

  let tecla0 = document.createElement("td");
  tecla0.id = "tecla0Id";
  tecla0.className = "teclaCls";
  tecla0.style.textAlign = "center";
  tecla0.style.width = "6vh";
  tecla0.style.border = "1px solid navy";

  linea.appendChild(tecla0);

  let btn0 = document.createElement("button");
  btn0.id = "btn0Id";
  btn0.className = "btn0Cls";
  btn0.style.width = "6vh";
  btn0.style.height = "4vh";
  btn0.style.backgroundColor = "white";   //celdaUsrClr;
  btn0.style.color = "blue";
  btn0.style.border = "1px solid navy";
  btn0.style.borderRadius = "5px 5px 5px 5px";
  btn0.style.fontSize="2.5vh";
  btn0.innerHTML = "Info";
  btn0.addEventListener("click", function () {
    fVisVen(inf);
  });
  tecla0.appendChild(btn0)

  for (let j = 1; j < 10; j++) {
    // Crea un elemento <td> y un nodo de texto, haz que el nodo de
    // texto sea el contenido de <td>, ubica el elemento <td> al final
    // de la hilera de la tabla
 
    tecla = document.createElement("td");
    tecla.id = "tecla" + j + "Id";
    tecla.className = "teclaCls";
    tecla.style.textAlign = "center";
    tecla.style.width = "7vh"; 
    tecla.style.height = "4vh"; //celda.style.height;
    
    tecla.style.backgroundColor = celdaUsrClr;
    textoTecla = document.createTextNode(j);
    tecla.style.border = "1px solid navy";
    tecla.style.borderRadius = "5px 5px 5px 5px";
    
    tecla.style.fontSize="3vh";
    tecla.appendChild(textoTecla);
         
    tecla.addEventListener("click", function () {
      fcTabla0(this);
    });

    linea.appendChild(tecla);
  }

  let tecla10 = document.createElement("td");
  tecla10.id = "tecla10Id";
  tecla10.className = "teclaCls";
  tecla10.style.textAlign = "center";
  tecla0.style.backgroundColor = "white"; 
  tecla10.style.width = "6vh";
  linea.appendChild(tecla10);

  let btn10 = document.createElement("button");
  btn10.id = "btn0Id";
  btn10.className = "btn0Cls";
  btn10.style.width = "6vh";
  btn10.style.height = "4vh";
  btn10.style.backgroundColor = "white";   //celdaUsrClr;
  btn10.style.color = "blue";
  btn10.style.border = "1px solid navy";
  btn10.style.borderRadius = "5px 5px 5px 5px";
  btn10.style.fontSize="2.5vh";
  btn10.innerHTML = "Cfg";  
  btn10.addEventListener("click", function () {
    fVisVen("CfgClrs.html");  
  });

  //fVisIndex(this);

  tecla10.appendChild(btn10)
   // agrega la hilera al final de la tabla (al final del elemento tblbody)
   tbl1Body.appendChild(linea);
   tabla1.appendChild(tbl1Body);   
   //Teclado.appendChild(tabla1);   
   //tcd = document.getElementById("tcdId");
   tcd.appendChild(tabla1);

   // cnt = document.getElementById("cntId");
   //fVisInf(btn0,cnt,inf);
   //cnt.appendChild(inf);
   cnt.appendChild(tcd);

   //body = appendChild(cnt);
  
   
  }

function fVisInf(inf) {
  //let x = document.getElementById("infId"); 
  alert("Información"); 
  if (inf.style.visibility == "hidden") {
    inf.style.visibility = "visible";
    } else {  
      inf.style.visibility = "hidden"; 
    } 
}

function fVisIndex() { 
  window.close(this);
  const ventana = window.open("index.html");  
  ventana.opener = null;  
}

// Ir a una pagina y volver a la anterior
function fVisVen(name) { 
 // window.close(this);
  const ventana = window.open(name) //"index.html");  
  ventana.opener = null;  
}

function guardarConfig() {
  alert("Guardar configuración");
}

function crearVenInfo(inf,body){
  // Crea el panel de información
  let btnGc= document.createElement("button");
  btnGc.id = "btnGcId";
  btnGc.className = "btnGcCls";

  btnGc.style.width = "4vh";
  btnGc.style.height = "8vh";
  btnGc.style.backgroundColor = "white";   //celdaUsrClr;
  btnGc.style.color = "blue";
  btnGc.style.border = "1px solid navy";
  btnGc.style.borderRadius = "5px 5px 5px 5px";
  btnGc.style.fontSize="2vh";
  btnGc.style.marginTop="1vh";
  btnGc.innerHTML = "G";

  btnGc.style.marginLeft="0.5vh";
  btnGc.style.marginRight="0.5vh";
  btnGc.addEventListener("click", function () {
    guardarConfig();
  });
  inf.appendChild(btnGc);
  body.appendChild(inf);

   // Nuevo control de celdas con igual contenido
   ContarIguales = document.createElement("div");
   ContarIguales.display= "flex";    
   ContarIguales.title = "Celdas con igual contenido";
   ContarIguales.style.border = "2px solid blue";  
   ContarIguales.style.width="33.2vh";   
   ContarIguales.style.height="8vh";
   ContarIguales.style.borderRadius= "4px";
   ContarIguales.style.marginTop="1vh";
   ContarIguales.style.fontSize="2.3vh";
   let tblCic = document.createElement("table");
   tblCic.style.color = "blue";
   tblCic.style.marginLeft="0.5vh";
   tblCic.style.backgroundColor = fondoInfClr;

  let tblCicBody = document.createElement("tbody");
  
  // Crea las filas de la tabla
  let lineaCic = document.createElement("tr");
  lineaCic.className = "lineaCiCls";

  let celdaCic1 = document.createElement("td");
  celdaCic1.className = "celdaCls";
  celdaCic1.style.textAlign = "left";  
  celdaCic1.style.width = "3vh";
  celdaCic1.style.height = "3vh";
  celdaCic1.innerHTML = "1";

  let celdaCic2 = document.createElement("td");
  celdaCic2.className="celdaCls";
  celdaCic2.innerHTML = "2";

  let celdaCic3 = document.createElement("td");
  celdaCic3.className="celdaCls";
  celdaCic3.innerHTML = "3";

  let celdaCic4 = document.createElement("td");
  celdaCic4.className="celdaCls";
  celdaCic4.innerHTML = "4";

  let celdaCic5 = document.createElement("td");
  celdaCic5.className="celdaCls";
  celdaCic5.innerHTML = "5";

  let celdaCic6 = document.createElement("td");
  celdaCic6.className="celdaCls";
  celdaCic6.innerHTML = "6";

  let celdaCic7 = document.createElement("td");
  celdaCic7.className="celdaCls";
  celdaCic7.innerHTML = "7";

  let celdaCic8 = document.createElement("td");
  celdaCic8.className="celdaCls";
  celdaCic8.innerHTML = "8";

  let celdaCic9 = document.createElement("td");
  celdaCic9.className="celdaCls";
  celdaCic9.innerHTML = "9";

  lineaCic.appendChild(celdaCic1);
  lineaCic.appendChild(celdaCic2);
  lineaCic.appendChild(celdaCic3);
  lineaCic.appendChild(celdaCic4);
  lineaCic.appendChild(celdaCic5);
  lineaCic.appendChild(celdaCic6);
  lineaCic.appendChild(celdaCic7);
  lineaCic.appendChild(celdaCic8);
  lineaCic.appendChild(celdaCic9);
  
  tblCicBody.appendChild(lineaCic);  

  tblCic.appendChild(tblCicBody);
  ContarIguales.appendChild(tblCic);
  inf.appendChild(ContarIguales);
  body.appendChild(inf);

  // Crea las filas de la tabla
  let lineaCiY = document.createElement("tr");
  lineaCiY.className = "lineaCiCls";

  let celdaCiY1 = document.createElement("td");
  celdaCiY1.id = "celdaCiY1Id";
  celdaCiY1.className = "celdaCls";
  celdaCiY1.style.textAlign = "left";  
  celdaCiY1.style.width = "3vh";
  celdaCiY1.style.height = "3vh";
  celdaCiY1.innerHTML = 0;

  let celdaCiY2 = document.createElement("td");
  celdaCiY2.id = "celdaCiY2Id";
  celdaCiY2.className = "celdaCls";
  celdaCiY2.innerHTML = 0;

  let celdaCiY3 = document.createElement("td");
  celdaCiY3.id = "celdaCiY3Id";
  celdaCiY3.className = "celdaCls";
  celdaCiY3.innerHTML = 0;

  let celdaCiY4 = document.createElement("td");
  celdaCiY4.id = "celdaCiY4Id";
  celdaCiY4.className = "celdaCls";
  celdaCiY4.innerHTML = 0;

  let celdaCiY5 = document.createElement("td");
  celdaCiY5.id = "celdaCiY5Id";
  celdaCiY5.className = "celdaCls";
  celdaCiY5.innerHTML = 0;

  let celdaCiY6 = document.createElement("td");
  celdaCiY6.id = "celdaCiY6Id";
  celdaCiY6.className = "celdaCls";
  celdaCiY6.innerHTML = 0;

  let celdaCiY7 = document.createElement("td");
  celdaCiY7.id = "celdaCiY7Id";
  celdaCiY7.className = "celdaCls";
  celdaCiY7.innerHTML = 0;

  let celdaCiY8 = document.createElement("td");
  celdaCiY8.id = "celdaCiY8Id";
  celdaCiY8.className = "celdaCls";
  celdaCiY8.innerHTML = 0;

  let celdaCiY9 = document.createElement("td");
  celdaCiY9.id = "celdaCiY9Id";
  celdaCiY9.className = "celdaCls";
  celdaCiY9.innerHTML = 0;

  lineaCiY.appendChild(celdaCiY1);
  lineaCiY.appendChild(celdaCiY2);
  lineaCiY.appendChild(celdaCiY3);
  lineaCiY.appendChild(celdaCiY4);
  lineaCiY.appendChild(celdaCiY5);
  lineaCiY.appendChild(celdaCiY6);
  lineaCiY.appendChild(celdaCiY7);
  lineaCiY.appendChild(celdaCiY8);
  lineaCiY.appendChild(celdaCiY9);

  tblCicBody.appendChild(lineaCiY);

  //ContarIguales.style.marginRight = "0.5vh";
  tblCic.appendChild(tblCicBody);  
  ContarIguales.appendChild(tblCic);

  inf.appendChild(ContarIguales);

  //---------------------------------
 
 // Nuevo control Cronometro
  let crono = document.createElement("div");
  crono.id= "cronoId";
  crono.className = "cronoCls";
  crono.style.display="flex";
  crono.title = "Cronometro"
  crono.style.width="29vh";
  crono.style.height="8vh";
  crono.style.border="1px solid navy"
  crono.style.marginLeft="0.5vh";
  crono.style.marginRight="0.5vh";
  crono.style.marginTop="1vh";  
  crono.style.backgroundColor=fondoInfClr;

  let ctrlsIzda = document.createElement("div");
  ctrlsIzda.style.display="flex";

  ctrlsIzda.title = "Inicio y fin del cronometro";
  
  ctrlsIzda.style.width="7vh";
  ctrlsIzda.style.height="6vh";
  ctrlsIzda.style.marginTop="0vh";
  ctrlsIzda.style.marginLeft="0.5vh";  
  
  ctrlsIzda.style.backgroundColor="white";

  let tblCtrlsI= document.createElement("table");  
  tblCtrlsI.id="tblCtrlsIzId";
  tblCtrlsI.className="tblCtrlsIzCls";
  tblCtrlsI.style.color="navy";

  let tblCtrlsBodyI = document.createElement("tbody")
  let trCtrls1 = document.createElement("tr");
  let uno = document.createElement("td");
  let trCtrls2 = document.createElement("tr");
  let dos = document.createElement("td");

  let start = document.createElement("button");     
  start.id="startId";
  start.style.width="6vh";
  start.style.height="2.5vh";
  start.style.color = "darkgreen";
  start.textContent="Inicio";
  start.style.marginTop="0.5vh";
  start.style.marginLeft="0.25vh";
  start.style.fontSize="1.6vh";
  start.style.backgroundColor=fondoInfClr;
  start.addEventListener("click", iniciarCrono);

  let stop = document.createElement("button");
  stop.id="stopId";
  stop.className="startCls";
  stop.style.width="6vh";
  stop.style.height="2.5vh";
  stop.style.color = "red";
  stop.textContent="Final";
  stop.style.marginTop="0.5vh";
  stop.style.marginLeft="0.25vh";  
  stop.style.fontSize="1.6vh";
  stop.style.backgroundColor=fondoInfClr;
  //stop.addEventListener("click", finalizarCrono);

  uno.appendChild(start);
  dos.appendChild(stop);

  trCtrls1.appendChild(uno);
  trCtrls2.appendChild(dos);
  
  tblCtrlsBodyI.appendChild(trCtrls1);
  tblCtrlsBodyI.appendChild(trCtrls2);
  tblCtrlsI.appendChild(tblCtrlsBodyI);
  
  ctrlsIzda.appendChild(tblCtrlsI);
  ctrlsIzda.style.backgroundColor=fondoInfClr;
    
  // Pantalla del ctrls
  let Pant = document.createElement("div");
  Pant.style.display = "flex";
  Pant.style.width="13.5vh";
  Pant.style.height="4vh";
  Pant.style.marginTop="2vh";
  //Pant.style.marginLeft="0.5vh";
  

  let tblPant= document.createElement("table");
  tblPant.id="tblPantId";
  tblPant.className="tblPantCls";
  tblPant.title = "Tiempo transcurrido";
  

  //tblPant.style.marginLeft="1vh";
  tblPant.style.width="16vh";

  let tblPantBody=document.createElement("tBody");
  let trPant = document.createElement("tr");
  let tdPant = document.createElement("td");
  tdPant.style.width="4vh";

  let tdHH = document.createElement("button");
  tdHH.style.width="4vh";
  tdHH.style.height="3.5vh";
  tdHH.style.border="1px solid navy";
  tdHH.style.backgroundColor="white";
  tdHH.style.color="navy";
  tdHH.innerHTML="00";
  tdHH.style.marginRight="0vh";

  let tdMM = document.createElement("button");
  tdMM.style.width="4vh";
  tdMM.style.height="3.5vh";
  tdMM.style.border="1px solid navy";
  tdMM.style.backgroundColor="white";
  tdMM.style.color="navy";
  tdMM.innerHTML="00";
  tdMM.style.marginRight="0.5vh";

  let tdSS = document.createElement("button");
  tdSS.style.width="4vh";
  tdSS.style.height="3.5vh";
  tdSS.style.border="1px solid navy";
  tdSS.style.backgroundColor="white";
  tdSS.style.color="navy";
  tdSS.innerHTML="00";

  tdPant.appendChild(tdHH);
  tdPant.appendChild(tdMM);
  tdPant.appendChild(tdSS);
  
  trPant.appendChild(tdPant);
 
  tblPantBody.appendChild(trPant);
  tblPant.appendChild(tblPantBody);
  Pant.appendChild(tblPant);

 

  let ctrlsDcha = document.createElement("div");
 /* ctrlsDcha.id= "ctrlsDrId";*/
  ctrlsDcha.className = "ctrlsDrCls";
  ctrlsDcha.style.display="flex";
  ctrlsDcha.title = "Inicio y fin de la pausa";
  
  //ctrlsDcha.style.marginLeft="0.5vh";  
  ctrlsDcha.style.width="9vh";
  ctrlsDcha.style.height="6vh";
  
  let tblCtrlsD= document.createElement("table");  
  tblCtrlsD.id="tblCtrlsDrId";
  tblCtrlsD.className="tblCtrlsDrCls";
  tblCtrlsD.style.color="navy";

  let tblCtrlsBodyD = document.createElement("tbody")
  let trCtrls3 = document.createElement("tr");
  let tri = document.createElement("td");
  let trCtrls4 = document.createElement("tr");
  let cua = document.createElement("td");


  let seguir = document.createElement("button");
  seguir.style.width="7vh";
  seguir.style.height="2.5vh";
  seguir.style.color = "darkgreen";
  seguir.textContent="Cont.";
  seguir.style.marginTop="0.5vh";
  seguir.style.marginLeft="0vh";
  seguir.style.fontSize="1.6vh";
  seguir.style.backgroundColor=fondoInfClr;
  //start.addEventListener("click", finalizarPausa);
  
  let pausa = document.createElement("button");
  pausa.id="pausaId";
  pausa.className="pausaCls";
  pausa.style.width="7vh";
  pausa.style.height="2.5vh";
  pausa.style.color = "red";
  pausa.textContent="Pausa";
  pausa.style.marginTop="0.5vh";
  pausa.style.marginLeft="0vh";
  pausa.style.fontSize="1.6vh";
  pausa.style.backgroundColor=fondoInfClr;
  //sstart.addEventListener("click", iniciarPausa);

  ctrlsDcha.style.marginLeft="0vh";  
  ctrlsDcha.style.width="8vh";
  ctrlsDcha.style.height="7vh";
  ctrlsDcha.style.marginRight="0vh";
  //ctrlsDcha.style.border="1px solid navy";

  tri.appendChild(seguir);
  cua.appendChild(pausa);

  trCtrls3.appendChild(tri);
  trCtrls4.appendChild(cua);

  tblCtrlsBodyD.appendChild(trCtrls3);
  tblCtrlsBodyD.appendChild(trCtrls4);
  tblCtrlsD.appendChild(tblCtrlsBodyD);

  ctrlsDcha.appendChild(tblCtrlsD);
  
  crono.appendChild(ctrlsIzda);  
  crono.appendChild(Pant);
  crono.appendChild(ctrlsDcha);
  inf.appendChild(crono);
  body.appendChild(inf);
  

  // igual longitud de mLp por celda
  let NumMlCld = document.createElement("div");
  NumMlCld.display= "flex";    
  NumMlCld.title = "Celdas con igual número de marcas de lapiz";
  NumMlCld.style.border = "1px solid blue";  
  NumMlCld.style.width="33vh";
  NumMlCld.style.height="8vh";
  NumMlCld.style.borderRadius= "4px";
  NumMlCld.style.marginLeft="0.5vh";
  NumMlCld.style.marginTop="1vh";
  NumMlCld.style.paddingLeft="0.5vh";
  NumMlCld.style.fontSize="2.3vh";
 
  let tblCil = document.createElement("table");
  tblCil.style.color = "blue";
  tblCil.style.backgroundColor = fondoInfClr;

 let tblCilBody = document.createElement("tbody");
 
 // Crea las filas de la tabla
 let lineaCil = document.createElement("tr");
 lineaCil.className = "lineaCiCls";

 let celdaCil1 = document.createElement("td");
 celdaCil1.className = "celdaCls";
 celdaCil1.style.textAlign = "left";  
 celdaCil1.style.width = "3vh";
 celdaCil1.style.height = "3vh";
 celdaCil1.innerHTML = "1";

 let celdaCil2 = document.createElement("td");
 celdaCil2.className="celdaCls";
 celdaCil2.innerHTML = "2";

 let celdaCil3 = document.createElement("td");
 celdaCil3.className="celdaCls";
 celdaCil3.innerHTML = "3";

 let celdaCil4 = document.createElement("td");
 celdaCil4.className="celdaCls";
 celdaCil4.innerHTML = "4";

 let celdaCil5 = document.createElement("td");
 celdaCil5.className="celdaCls";
 celdaCil5.innerHTML = "5";

 let celdaCil6 = document.createElement("td");
 celdaCil6.className="celdaCls";
 celdaCil6.innerHTML = "6";

 let celdaCil7 = document.createElement("td");
 celdaCil7.className="celdaCls";
 celdaCil7.innerHTML = "7";

 let celdaCil8 = document.createElement("td");
 celdaCil8.className="celdaCls";
 celdaCil8.innerHTML = "8";

 let celdaCil9 = document.createElement("td");
 celdaCil9.className="celdaCls";
 celdaCil9.innerHTML = "9";

 lineaCil.appendChild(celdaCil1);
 lineaCil.appendChild(celdaCil2);
 lineaCil.appendChild(celdaCil3);
 lineaCil.appendChild(celdaCil4);
 lineaCil.appendChild(celdaCil5);
 lineaCil.appendChild(celdaCil6);
 lineaCil.appendChild(celdaCil7);
 lineaCil.appendChild(celdaCil8);
 lineaCil.appendChild(celdaCil9);
 
 tblCilBody.appendChild(lineaCil);  

 tblCil.appendChild(tblCilBody);
 NumMlCld.appendChild(tblCil);
 inf.appendChild(NumMlCld);

 body.appendChild(inf);

 // Crea las filas de la tabla
 let lineaCilY = document.createElement("tr");
 lineaCilY.className = "lineaCiCls";

 let celdaCilY1 = document.createElement("td");
 celdaCilY1.id = "celdaCilY1Id";
 celdaCilY1.className = "celdaCls";
 celdaCilY1.style.textAlign = "left";  
 celdaCilY1.style.width = "3vh";
 celdaCilY1.style.height = "3vh";
 celdaCilY1.innerHTML = 0;

 let celdaCilY2 = document.createElement("td");
 celdaCilY2.id = "celdaCilY2Id";
 celdaCilY2.className = "celdaCls";
 celdaCilY2.innerHTML = 0;

 let celdaCilY3 = document.createElement("td");
 celdaCilY3.id = "celdaCilY3Id";
 celdaCilY3.className = "celdaCls";
 celdaCilY3.innerHTML = 0;

 let celdaCilY4 = document.createElement("td");
 celdaCilY4.id = "celdaCilY4Id";
 celdaCilY4.className = "celdaCls";
 celdaCilY4.innerHTML = 0;

 let celdaCilY5 = document.createElement("td");
 celdaCilY5.id = "celdaCilY5Id";
 celdaCilY5.className = "celdaCls";
 celdaCilY5.innerHTML = 0;

 let celdaCilY6 = document.createElement("td");
 celdaCilY6.id = "celdaCilY6Id";
 celdaCilY6.className = "celdaCls";
 celdaCilY6.innerHTML = 0;

 let celdaCilY7 = document.createElement("td");
 celdaCilY7.id = "celdaCilY7Id";
 celdaCilY7.className = "celdaCls";
 celdaCilY7.innerHTML = 0;

 let celdaCilY8 = document.createElement("td");
 celdaCilY8.id = "celdaCilY8Id";
 celdaCilY8.className = "celdaCls";
 celdaCilY8.innerHTML = 0;

 let celdaCilY9 = document.createElement("td");
 celdaCilY9.id = "celdaCilY9Id";
 celdaCilY9.className = "celdaCls";
 celdaCilY9.innerHTML = 0;

 lineaCilY.appendChild(celdaCilY1);
 lineaCilY.appendChild(celdaCilY2);
 lineaCilY.appendChild(celdaCilY3);
 lineaCilY.appendChild(celdaCilY4);
 lineaCilY.appendChild(celdaCilY5);
 lineaCilY.appendChild(celdaCilY6);
 lineaCilY.appendChild(celdaCilY7);
 lineaCilY.appendChild(celdaCilY8);
 lineaCilY.appendChild(celdaCilY9);

 tblCilBody.appendChild(lineaCilY);

 //NumMlCld.margin = "1vh";
 tblCil.appendChild(tblCilBody);  
 NumMlCld.appendChild(tblCil);
 inf.appendChild(NumMlCld);

 let btnID= document.createElement("button");
  btnID.id = "btnIDId";
  btnID.className = "btnIDCls";

  btnID.style.width = "4vh";
  btnID.style.height = "8vh";
  btnID.style.backgroundColor = "white";   //celdaUsrClr;
  btnID.style.color = "blue";
  btnID.style.border = "1px solid navy";
  btnID.style.borderRadius = "5px 5px 5px 5px";
  btnID.style.fontSize="2vh";
  btnID.innerHTML = "ID";
  btnID.style.marginLeft="0.5vh";
  btnID.style.marginTop="1vh";
  btnID.addEventListener("click", function () {
    cambiarID();
  });
  inf.appendChild(btnID);
  body.appendChild(inf);

}
function iniciarCrono() {
}


function ConfigColores() {

}

// CONTROLES
function fNuevaPartida() {
  
    if (partidaEnCurso==1) {
      alert("Elimine la partida actal antes de solicitar una nueva");
      return
    }  
    ConfigClr(); 
      
    tbr = document.getElementById("tbrId");
    tbr.style.backgroundColor = fondoTbrClr;

    // cambiar color las teclas
    document.getElementById("tecla1Id").backgroundColor = celdaUsrClr;
    document.getElementById("tecla2Id").backgroundColor = celdaUsrClr;
    document.getElementById("tecla3Id").backgroundColor = celdaUsrClr;
    document.getElementById("tecla4Id").backgroundColor = celdaUsrClr;
    document.getElementById("tecla5Id").backgroundColor = celdaUsrClr;
    document.getElementById("tecla6Id").backgroundColor = celdaUsrClr;
    document.getElementById("tecla7Id").backgroundColor = celdaUsrClr;
    document.getElementById("tecla8Id").backgroundColor = celdaUsrClr;
    document.getElementById("tecla9Id").backgroundColor = celdaUsrClr;


    
    var Num = sdks.length;
    var ale =Math.floor(Math.random() * Num);
    sdkIni=sdks[ale];
  
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {        
        let dto =sdkIni.charAt(9*i+j);        
        celda =document.getElementById("c"+(9*i+j)+"Id");
        if  (dto==0) {
          //textoCelda = document.createTextNode("");     
          celda.style.color=celdaUsrTxtClr;                             
          celda.style.backgroundColor=celdaUsrClr;                      
        }                   
        else if (dto!== 0) {                   
          celda.style.backgroundColor=celdaDtoClr;         
          celda.style.color=celdaDtoTxtClr;           
        }
            
        if (dto !=0) {
          celda.innerHTML=dto;
        }
      
      }       
    }  
  
    // Partida cargada
    partidaEnCurso=1;
  
    // cambiarID, D -> d
    let btnId =document.getElementById("btnIDId");
    btnId.style.backgroundColor = "lightgray";

    
    // Es valido el sudoku
    sdkUsr=sdkIni;
       
    // Solucionar el sudoku
    solucionar(sdkIni);
    
    // Validar el sudoku
    validarSudoku() 

   // Opción de destreza elegido
   nvlDestreza=sel1.options[sel1.selectedIndex].text;
   
   // Opción de dificultad elegido
   nvlDificultad=sel2.options[sel2.selectedIndex].text;
   
   // Actualizar el cuadro numerico de celdas con igual numero
   //actNumMlCld();  
   
   actVenInfo();
}

// Validación del sudoku
function validarSudoku() {
  // Comprobar si tiene solucion, no si es unica
  // por lineas columnas y regiones cumple?
}

function fVisSolSdk() {
  if (partidaEnCurso == 1) {
    for (let i = 0; i < 81; i++) {
      document.getElementById("c" + i + "Id").innerHTML = sdkSol.charAt(i);
    }
    return;
  }
}

function fResolver() {  
  sudokoSolver(sdkIni);
}

function sudokoSolver(sdkIni) {  
  alert(sdkSol);
  var sdkSol = sdkIni.split("");
  alert(sdkSol);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sdkSol[i][j] == ".") {
        for (let k = 1; k <= 9; k++) {
          if (isValid(sdkSol, i, j, k)) {
            sdkSol[i][j] = `${k}`;
            if (sudokoSolver(sdkSol)) {
              return true;
            } else {
              sdkSol[i][j] = ".";
            }
          }
        }
        return false;
      }
    }
  }

  return true;
}


function fEmpezar() {
  if  (partidaEnCurso==0) {    
    return
  }
  if (confirm("Desea empezar de nuevo")) {
    for (let i = 0; i < 81; i++) {
      if (sdkIni[i] == "0") {
        document.getElementById("c" + i + "Id").style.backgroundColor = celdaUsrClr;                                                                                
        document.getElementById("c" + i + "Id").innerHTML = "";
      } else {
        document.getElementById("c" + i + "Id").style.backgroundColor = celdaDtoClr;
        //document.getElementById("c" + i + "Id").innerHTML = sdkIni[i];
      }
      
    }            
  }
}   


// Limpiar tablero de colores de fondos de celdas

function fLimpiar() {
  if  (partidaEnCurso==0) {    
    return
  }
  // Tablero
  for (let i = 0; i < 81; i++) {
    if (sdkIni[i] == "0") {
      document.getElementById("c" + i + "Id").style.backgroundColor = celdaUsrClr;  
      document.getElementById("c" + i + "Id").style.color = celdaUsrTxtClr;                                                                              
    } else {
      document.getElementById("c" + i + "Id").style.backgroundColor = celdaDtoClr;
      document.getElementById("c" + i + "Id").style.color = celdaDtoTxtClr;
      document.getElementById("c" + i + "Id").innerHTML = sdkIni[i];
    }                 
  }

  // Teclado
  document.getElementById("tcdId").backgroundColor =fondoTcdClr;
  for (let i = 0; i < 9; i++) {
    document.getElementById("tecla" + (i+1) + "Id").backgroundColor =celdaTcdClr;
    document.getElementById("tecla" + (i+1) + "Id").color =celdaTcdTxtClr;
  }
 }   


function fAviso() {
  if  (partidaEnCurso==0) {
    return;
  }
  
  //document.getElementById("avisoId").style.backgroundColor = "#ffffff"; 

  if (avisoErrAct==true) {
    avisoErrAct = false;
    document.getElementById("avisoId").style.backgroundColor = "white";
  }
  else {
    avisoErrAct = true;
    document.getElementById("avisoId").style.backgroundColor = "yellow";
  } 
}

function fFalta() {
  if  (partidaEnCurso==0) {
    return;
  }
  
  document.getElementById("faltaId").style.backgroundColor = "#ffffff"; 
  if (falta1Act) {
    falta1Act = false;
  }
  else {
    falta1Act = true;
    document.getElementById("faltaId").style.backgroundColor = "yellow";
  } 
}

// ACTIVAR / DESACTIVAR CELDAS CONDICIONANTES
function fCc() {
  // Activar desactivar el pulsador
  if  (partidaEnCurso==0) {
    return;
  }

  // cCAct = true activada false desactivada
  if (cCAct == true) {      
    cCAct = false;
    document.getElementById("ccId").style.backgroundColor = "white"; 
    fBorCc();       
    //Recuperrar controles 
    /*
    if (document.getElementById("borradorId").style.backgroundColor == "orange") {
      borradorAct = true;
      document.getElementById("borradorId").style.backgroundColor = "yellow";
    }
    */    
  } else {
    cCAct = true;
    document.getElementById("ccId").style.backgroundColor = "yellow";
    // Desactivar controles
    if (borradorAct==true) {
      borradorAct = false;
      document.getElementById("borradorId").style.backgroundColor = "white"  //"orange";
    }    
  }
}

// CELDAS CONDICIONANTES 
function fVisCc() {
  if  (partidaEnCurso==0) {
    return;
  } 
  
  celdaCcAnt=celdaClic;
  var f = Math.trunc(celdaClic / 9);

	//Fila
  for (let i = 0; i < 9; i++) {
    let celdaid = "c" + filas[f][i] + "Id";    
    document.getElementById(celdaid).style.backgroundColor = celdaCcClr;
    document.getElementById(celdaid).style.color = "green";
    document.getElementById(celdaid).style.fontSize = "4vh";  
   } 
    
	
	//Columna    
    var c = celdaClic - 9 * f;
    var cols = [
    columna1,
    columna2,
    columna3,
    columna4,
    columna5,
    columna6,
    columna7,
    columna8,
    columna9,
  ];

  for (let i = 0; i < 9; i++) {
    let celdaid = "c" + cols[c][i] + "Id";     
      document.getElementById(celdaid).style.backgroundColor = celdaCcClr;
      document.getElementById(celdaid).style.color = "green";
      document.getElementById(celdaid).style.fontSize = "4vh";      
    }

	// Regiones
  if (contiene(region1,celdaClic)) {
		r = 0;      
	} else if (contiene(region2,celdaClic)) {
		r = 1;
	} else if (contiene(region3,celdaClic)) {
		r = 2;
	} else if (contiene(region4,celdaClic)) {
		r = 3;
	} else if (contiene(region5,celdaClic)) {
		r = 4;
	} else if (contiene(region6,celdaClic)) {
		r = 5;
	} else if (contiene(region7,celdaClic)) {
		r = 6;
	} else if (contiene(region8,celdaClic)) { 
		r = 7;
	} else if (contiene(region9,celdaClic)) {
		r = 8;
	}

    for (let i = 0; i < 9; i++) {
      let celdaid = "c" + regiones[r][i] + "Id";          
      document.getElementById(celdaid).style.backgroundColor = celdaCcClr;
      document.getElementById(celdaid).style.color = "green";
      document.getElementById(celdaid).style.fontSize = "4vh";         
    }                                                       
  }

function fBorCc() {
    if  (partidaEnCurso==0) {
      return;
    }
    let celda = celdaCcAnt;
    var f = Math.trunc(celda / 9);
  
    //Fila
    for (let i = 0; i < 9; i++) {
      let celdaid = "c" + filas[f][i] + "Id";   
      if (sdkIni[filas[f][i]] == "0") {       
            document.getElementById(celdaid).style.backgroundColor = celdaUsrClr;
            document.getElementById(celdaid).style.color = "navy";   
            document.getElementById(celdaid).style.fontSize = "2.5vh"; 
        }  else {
            document.getElementById(celdaid).style.backgroundColor = celdaDtoClr;
            document.getElementById(celdaid).style.color = "red";   
            document.getElementById(celdaid).style.fontSize = "2.5vh"; 
        }
      }
                           
    
    //Columna    
      var c = celda - 9 * f;
      var cols = [
      columna1,
      columna2,
      columna3,
      columna4,
      columna5,
      columna6,
      columna7,
      columna8,
      columna9,
    ];
  
    for (let i = 0; i < 9; i++) {
      let celdaid = "c" + cols[c][i] + "Id";
      if (sdkIni[cols[c][i]] == "0") {       
        document.getElementById(celdaid).style.backgroundColor = celdaUsrClr;
        document.getElementById(celdaid).style.color = "navy";   
        document.getElementById(celdaid).style.fontSize = "2.5vh"; 
    }  else {
        document.getElementById(celdaid).style.backgroundColor = celdaDtoClr;
        document.getElementById(celdaid).style.color = "red";   
        document.getElementById(celdaid).style.fontSize = "2.5vh"; 
    }
    } 
    let r=-1;
  
    if (contiene(region1,celda)) {
      r = 0;      
    } else if (contiene(region2,celda)) {
      r = 1;
    } else if (contiene(region3,celda)) {
      r = 2;
    } else if (contiene(region4,celda)) {
      r = 3;
    } else if (contiene(region5,celda)) {
      r = 4;
    } else if (contiene(region6,celda)) {
      r = 5;
    } else if (contiene(region7,celda)) {
      r = 6;
    } else if (contiene(region8,celda)) { 
      r = 7;
    } else if (contiene(region9,celda)) {
      r = 8;
    }
  
  
      for (let i = 0; i < 9; i++) {
        let celdaid = "c" + regiones[r][i] + "Id";
        if (sdkIni[regiones[r][i]] == "0") {       
          document.getElementById(celdaid).style.backgroundColor = celdaUsrClr;
          document.getElementById(celdaid).style.color = "navy";   
          document.getElementById(celdaid).style.fontSize = "2.5vh"; 
      }  else {
          document.getElementById(celdaid).style.backgroundColor = celdaDtoClr;
          document.getElementById(celdaid).style.color = "red";   
          document.getElementById(celdaid).style.fontSize = "2.5vh"; 
      }             
                  
      }
      celdaCcAnt=-1;
  }
                                                          

/*
function DibuBorrarCc(tipo) {
    //alert("DibuBorrarCeldasCondicionantes");
    for (let i = 0; i < 81; i++) {
      if (sdkIni[i] == "0") {
        document.getElementById("c" + i + "Id").style.backgroundColor = celdaUsrClr;
      } else {
        document.getElementById("c" + i + "Id").style.backgroundColor = celdaDtoClr;
      }
    }
  }
*/


// Visualizar/Ocultar valores iguales
// valor = contenido de la celda a visualizar /Ocultar
function visValor(valor) {
  if (celdaIguAct == "V") {
    visualizarIgu(valor);
    //alert(valor);
    estadoIgu();
  } else if (celdaIguAct == "O") {
    ocultarIgu(valor);
  }
}

function visualizarIgu(valor) {
  // Guardar para ocultar
  celdaIguVal = valor;

  // Recorrer el tablero
  for (let i = 0; i < 81; i++) {
    var cellValue = document.getElementById("c" + i + "Id").innerHTML;
    if (cellValue == valor) {
      document.getElementById("c" + i + "Id").style.backgroundColor =
        celdaIguClr;
      document.getElementById("c" + i + "Id").style.fontSize = "4vh";
    }
  }
}

function ocultarIgu(valor) {
  for (let i = 0; i < 81; i++) {
    var cellValue = document.getElementById("c" + i + "Id").innerHTML;
    if (cellValue == valor) {
      if (sdkIni[i] != "0") {
      document.getElementById("c" + i + "Id").style.backgroundColor =
        celdaDtoClr;
      document.getElementById("c" + i + "Id").style.fontSize = "2.5vh";
       } else {
        document.getElementById("c" + i + "Id").style.backgroundColor =
          celdaUsrClr;
        document.getElementById("c" + i + "Id").style.fontSize = "2.5vh";
       }
    }
  }

  celdaIguAct = "V";
} 

function estadoIgu() {
  // Control estado de la visualización
  if (celdaIguAct == "V") {
    celdaIguAct = "O";
  } else if (celdaIguAct == "O") {
    celdaIguAct = "V";
  }
}


/* // Interrptor ML

function fMLapiz() {
  if (mLAct == false) {
    desactivarOper();
    mLAct = true;
    document.getElementById("mLId").style.color = "#ffff00";
    operAct = 3;
  } else {
    mLAct = false;
    document.getElementById("mLId").style.color = "#ffffff";
    operAct = 0;
  }
  return;
}
 */

function fVisML() {
  fMLapizs();
  
  if (mLAct==false) {
    mLAct=true;  
    document.getElementById("mLId").style.backgroundColor="yellow";
    // VISUALIZAR ML
    for (let i = 0; i < 81; i++) {
      if (document.getElementById("c" + i + "Id").innerHTML=="") {
        document.getElementById("c" + i + "Id").style.fontSize="1.5vh";
        document.getElementById("c" + i + "Id").innerHTML=mLpz[i];
      }
    }     
  } else {
  // OCULTAR 
    mLAct = false;  
    document.getElementById("mLId").style.backgroundColor="white";
    for (let i = 0; i < 81; i++) {
      if (sdkIni[i] == "0")  {
        document.getElementById("c" + i + "Id").style.fontSize="2.5vh";
        document.getElementById("c" + i + "Id").innerHTML="";
      }
    }
  }}

function numMlCelda() {
  let nMlCld =[];
 
  // Contar el número de mL por celda
  for (let i = 0; i < 81; i++) {
    if (sdkUsr[i] == "0") {
      nMlCld[i] = mLpz[i].length;  
    } else {   
      //Datos de celdas fijas
      nMlCld[i] = 0;  
    }
  }

  for (let i = 1; i < 9; i++) {
    for (let j = 0; j < 81; j++) {
      if (nMlCld[j] == i) {
        //if (mLpz[j].length == i) {
          nMlLon[i]++;
       }
     }
  }   
}



function fMLapizs() {  
  let fs=[];
  for (let k = 0; k < 9; k++) { 
    fs[k]="";
    val="";
    
    for (let j = 0; j < 9; j++) {        
      let val = document.getElementById("c" + (9*k+j)+ "Id").innerHTML;            
      if (val !="") {
        fs[k] += val;        
      }
    }
    
  }

  let cs=[];
  for (let k = 0; k < 9; k++) { 
    cs[k]="";
    val="";
    for (let j = 0; j < 9; j++) {        
      let val = document.getElementById("c" + columnas[k][j] + "Id").innerHTML;            
      if (val !="") {
        cs[k] += val;        
      }
    }
    
  }
  
  let rs=[];
  for (let k = 0; k < 9; k++) { 
    rs[k]="";
    val="";
    for (let j = 0; j < 9; j++) {        
      let val = document.getElementById("c" + regiones[k][j] + "Id").innerHTML;            
      if (val !="") {
        rs[k] += val;        
      }
    }
  }
  
  // construir las mL
  mLpz = [];
  for (let i = 0; i < 81; i++) {   
    indiceToFCR(i);
    // ordenar y eliminar repes
    let x =fs[filaX] + cs[columnaX] + rs[regionX];
    let y = eliminarRepetidos(x) 
    let z = "";
    
    for (let j = 1; j <= 9; j++) {      
      if (y.includes(j)) {
        //alert("no: " + j);
      } else {
        z +=j;
        //alert("si: " +j);
      }
    }
    mLpz[i] = z
  }
}


function eliminarRepetidos(cadena) {
  return cadena.split('').filter((letra, index, self) => self.indexOf(letra) === index).join('');
}

function desactivarOper() {
  document.getElementById("borradorId").style.backgroundColor = "white";
  borradorAct = false;

  document.getElementById("ccId").style.backgroundColor = "white";
  cCAct = false;

  document.getElementById("mLId").style.backgroundColor = "white";
  mLAct = false;

  //document.getElementById("mLsId").style.color = "white";
  mLsAct = false;

  //document.getElementById("igualContenidoId").style.color = "white";
  //igualContenidoAct = false;

  fLimpiarTablero();
}

function fOperaciones() {
  if (mLsAct == true) {
    for (let i = 0; i < 81; i++) {
      if (document.getElementById("c" + i + "Id").innerHTML == "") {
        celdaClic = i;
        fMLCelda(celdaClic);
      }
    }
  } else {
    for (let i = 0; i < 81; i++) {
      celdaClic = i;
      if (sdkUsr.charAt(celdaClic) == "0") {
        document.getElementById("c" + celdaClic + "Id").innerHTML = "";
      }
    }
  }
}
function fLimpiarTablero() {
  for (let i = 0; i < 81; i++) {
    if (sdkIni[i] == "0") {
      document.getElementById("c" + i + "Id").style.backgroundColor =
        celdaUsrClr;
    } else {
      document.getElementById("c" + i + "Id").style.backgroundColor =
        celdaDtoClr;
    }
    if (sdkUsr[i] == "0") {
      document.getElementById("c" + i + "Id").innerHTML = "";
    }
  }
}

function actContarIguales() {
  if (partidaEnCurso == 0) {
    return;
  }  
  cIguales = [0, 0, 0, 0, 0, 0, 0, 0, 0];   
  for (let j = 0; j < 81; j++) {               
      let val = document.getElementById("c" + j + "Id").innerHTML;
    if (val == "") {
      } else {      
      cIguales[val-1]++;    
    }    
  }
  
  // visualizar 
  document.getElementById("celdaCiY1Id").innerHTML=cIguales[0];  
  document.getElementById("celdaCiY2Id").innerHTML=cIguales[1];
  document.getElementById("celdaCiY3Id").innerHTML=cIguales[2];
  document.getElementById("celdaCiY4Id").innerHTML=cIguales[3];
  document.getElementById("celdaCiY5Id").innerHTML=cIguales[4];
  document.getElementById("celdaCiY6Id").innerHTML=cIguales[5];
  document.getElementById("celdaCiY7Id").innerHTML=cIguales[6];
  document.getElementById("celdaCiY8Id").innerHTML=cIguales[7];
  document.getElementById("celdaCiY9Id").innerHTML=cIguales[8]; 
  
  //alert(cIguales);
}  

function actnMlLon() {
  if (partidaEnCurso == 0) {
    return;
  }  
    
  cMlIguLon = [0, 0, 0, 0, 0, 0, 0, 0, 0];   
  for (let j = 0; j < 81; j++) {                  
    if (sdkUsr[j] == "0")  {
      //alert(sdkUsr[j]);
      let val = document.getElementById("c" + j + "Id").innerHTML;
      let lon = val.length-1;
      cMlIguLon[lon]++;
    }    
  } 
  
  // visualizar 
  document.getElementById("celdaCilY1Id").innerHTML=cMlIguLon[0];  
  document.getElementById("celdaCilY2Id").innerHTML=cMlIguLon[1];
  document.getElementById("celdaCilY3Id").innerHTML=cMlIguLon[2];
  document.getElementById("celdaCilY4Id").innerHTML=cMlIguLon[3];
  document.getElementById("celdaCilY5Id").innerHTML=cMlIguLon[4];
  document.getElementById("celdaCilY6Id").innerHTML=cMlIguLon[5];
  document.getElementById("celdaCilY7Id").innerHTML=cMlIguLon[6];
  document.getElementById("celdaCilY8Id").innerHTML=cMlIguLon[7];
  document.getElementById("celdaCilY9Id").innerHTML=cMlIguLon[8];    
}

// SALIDA
function fSalida() {  
  if (confirm("Desea salir del rograma")) {
    window.close();
    } else {
      return
    }
} 

// Celdas y teclas
function fcTabla0(num) {
  //Tecla pulsada
  let tP=num.id.substring(5,6);
  fcTabla1(tP);  
}
  // evento click teclado: coloca dato Usr y cierra el teclado 
function fcTabla1(tP) {
  // Click en tecla
  if (partidaEnCurso==0) {
    return;
  }

  if (avisoErrAct==true) {
    if (tP == sdkSol[celdaClic]) {   
      //alert("Correcto");       
      //document.getElementById("c" + celdaClic+"Id").style.backgroundColor=celdaSelClr;
      document.getElementById("c" + celdaClic+"Id").style.backgroundColor=celdaSelClr;
      document.getElementById("c" + celdaClic+"Id").innerHTML=tP;                
      borradorAct = false;
      document.getElementById("borradorId").style.backgroundColor="white";
      sdkUsr = sdkUsr.substring(0,celdaClic) + tP + sdkUsr.substring(celdaClic+1,81);
    } else {          
      // Si error activar borrardor
      alert("Error, el error es maravilloso. Nos da la oportunidad de aprender. Es el momento de darte cuenta que nuestro razonamiento no ha sido correcto. ¿En que hemos fallado?. Analizalo ahora. Intentarlo de nuevo.");
      borradorAct = true;
      document.getElementById("borradorId").style.backgroundColor="yellow";
      document.getElementById("c" + celdaClic+"Id").style.backgroundColor= celdaErrClr;
      document.getElementById("c" + celdaClic+"Id").innerHTML=tP;      
      sdkUsr = sdkUsr.substring(0,celdaClic) + tP + sdkUsr.substring(celdaClic+1,81);        
    }        
  } else if (avisoErrAct==false) {  
        // Si no hay aviso de error, colocar el valor seleccionado
        //document.getElementById("c" + celdaClic + "Id").style.backgroundColor=celdaClicClr;        
        document.getElementById("c" + celdaClic + "Id").innerHTML=tP;                    
        sdkUsr = sdkUsr.substring(0,celdaClic) + tP + sdkUsr.substring(celdaClic+1,81);        
        alert(sdkUsr);
  }     

  // Comprobar si falta solo 1 celda
  if (falta1Act==true) {
    fFalta1();
  } 
  
  actVenInfo();
}

function actVenInfo() {
  actContarIguales();
 /*  fVisML();
  actnMlLon();
  fVisML(); */
}


  document.addEventListener("keypress",function(e) {
    if (contiene("123456789",e.key)) {    
      fcTabla1(e.key);      
    }
  }); 

// Si con dato seleccionar iguales
function fcTabla(cld) {
  // Click en celda
	if (partidaEnCurso==0) {
    return;
  }
	// selección
	// iguales.
	// cc.
	// Borrador.

  // x = INDICE de la tecla pulsada celdaClic
  let x = cld.id.substring(1, cld.id.length - 2);
  celdaClic = parseInt(x) || 0;   //????????    

	// BORRADOR
	if (borradorAct == true) {
		if (sdkIni[celdaClic] != "0") {
				alert("No se puede borrar un dato"); 
				borradorAct = false;
				document.getElementById("borradorId").style.backgroundColor = "white";           
				return
			}

		document.getElementById("c" + celdaClic + "Id").innerHTML = null;
		document.getElementById("c" + celdaClic + "Id").style.backgroundColor = celdaSelClr;
		sdkUsr = sdkUsr.substring(0,celdaClic) + "0" + sdkUsr.substring(celdaClic+1,81);        
		borradorAct = false;
		document.getElementById("borradorId").style.backgroundColor = "white";
		
		celdaSel = celdaClic;
    
    if (falta1Act==true) {
      fFalta1();
    } 
    
    actContarIguales();
    actnMlLon();
		return; 
	}


	// CELDAS CONDICIONANTES        
	if (sdkIni[celdaClic] == "0" && cCAct == true) {     
    if (celdaCcAnt != -1) {
      if (celdaCcAnt == celdaClic) {
        fBorCc();
        celdaCcAnt = -1; 
        cCAct = false;
        document.getElementById("ccId").style.backgroundColor = "white";
      }

			document.getElementById("c"+celdaSelAnt+"Id").style.backgroundColor=celdaUsrClr;
      fBorCc();
			celdaCcAnt = -1;			
		}	
			fVisCc();        
			celdaCcAnt = celdaClic;
	}
     
	// SELECCION CELDA USUARIO
	// Al clicar en una celda de usuario de selecciona para poder introducir, cambiar o borrar su valor
	if (sdkIni[celdaClic] == "0") {
		// Eliminar selección 
		if (celdaSelAnt == celdaClic) {
			document.getElementById("c"+celdaSelAnt+"Id").style.backgroundColor=celdaUsrClr;
			celdaSelAnt = -1;
			celdaSel = -1;
			return;
		}
		// Eliminar selección anterior
		if (celdaSelAnt != -1) {
			document.getElementById("c"+celdaSelAnt+"Id").style.backgroundColor=celdaUsrClr;
		}
		
    celdaSelAnt = celdaClic;
		celdaSel = celdaClic;
		document.getElementById(cld.id).style.backgroundColor=celdaSelClr;
		return;
    } 

		if (sdkIni[celdaClic] != "0") {
			// Si clicamos sobre un dato, seleccionar celdas con igual contenido           
      //Borrar seleccion de iguales anterior         
      if (celdaIguVal != 0)  {             
				if (celdaIguVal == document.getElementById("c" + celdaClic +"Id").innerHTML) {
          ocultarIgu(celdaIguVal);
          celdaIguVal=0;
          return;
        } else {
					ocultarIgu(celdaIguVal);
					visualizarIgu(document.getElementById("c"+celdaClic+"Id").innerHTML);
					celdaIguVal=document.getElementById("c"+celdaClic+"Id").innerHTML;
					return;
        }				
      }
			
      // Visualizar iguales 
      if (celdaClic != -1) {             
        celdaIguVal=document.getElementById("c"+celdaClic+"Id").innerHTML;            
        visualizarIgu(celdaIguVal);
      }
  }
}


function fFalta1() {
  if  (partidaEnCurso==0) {
    return;
  }

  // fila columna region
  indiceToFCR(celdaClic);
  //alert("filaX " + filaX + " columnaX " + columnaX + " regionX " + regionX);
  let cuenta = 0;
  let correctos = 0;
  let celdaX = 0;

  // Fila
  
  // Contar las casillas rellenas
  for (let i = 0; i < 9; i++) {
    if (document.getElementById("c" + filas[filaX][i] + "Id").innerHTML != "") {
      cuenta+=1;
    }
  }
  if (cuenta < 7) {
    // Arreglar las vueltas atras al borrar un valor
    for (let i = 0; i < 9; i++) {
      document.getElementById("c" + filas[filaX][i] + "Id").style.border = "1px solid navy";      
    }
  } else if (cuenta  == 7) {
    // Solo faltan dos casillas por rellenar
    // Funcionará si está activado el control -2
    // Avisará con el ancho del borde y rojo
    for (let i = 0; i < 9; i++) {      
      document.getElementById("c" + filas[filaX][i] + "Id").style.border = "2px solid red";      
    }
  } else if (cuenta==8) {
   // Solución automatica o error    
    for (let i = 0; i < 9; i++) {
      if (document.getElementById("c" + filas[filaX][i] + "Id").innerHTML = sdkSol[filas[filaX][i]]) {
        correctos+=1;
      }  else {
     // Celda en vacía
          celdaX = filas[filaX][i];
      }
    }
  }
  /*
    if (correctos == 8) {
      // Poner el valor que falata
      for (let i = 0; i < 9; i++) {
        document.getElementById("c" + filas[filaX][i] + "Id").style.border = "1px solid navy";
        document.getElementById("c" + celdaX + "Id").innerHTML = sdkSol[celdaX];
      }
    } else if (correctos < 8) {
      alert("Error en la fila: " + filaX);
      document.getElementById("c" + filas[filaX][i] + "Id").style.border = "1px solid navy";      
    }

      for (let i = 0; i < 9; i++) {
        document.getElementById("c" + filas[filaX][i] + "Id").style.border = "2px solid red";      
      }
    }
  
  else if (cuenta==9) {
    for (let i = 0; i < 9; i++) {
      document.getElementById("c" + filas[filaX][i] + "Id").style.border = "1px solid navy";      
    }
    */
 
 // Columna
  cuenta = 0;
  for (let i = 0; i < 9; i++) {
    if (document.getElementById("c" + columnas[columnaX][i] + "Id").innerHTML != "") {
      cuenta+=1;
    }
  }
  if (cuenta==8) {
    for (let i = 0; i < 9; i++) {
      document.getElementById("c" + columnas[columnaX][i] + "Id").style.border = "3px solid red";      
  }
  } else if (cuenta==9) {
    for (let i = 0; i < 9; i++) {
      document.getElementById("c" + columnas[columnaX][i]+ "Id").style.border = "1px solid navy";      
    }
 }

 // Región
  cuenta = 0;
  for (let i = 0; i < 9; i++) {
    if (document.getElementById("c" + regiones[regionX][i] + "Id").innerHTML != "") {
      cuenta+=1;
    }
  }
  if (cuenta==8) {
    for (let i = 0; i < 9; i++) {
      document.getElementById("c" + regiones[regionX][i] + "Id").style.border = "3px solid red";      
  }
  } else if (cuenta==9) {
    for (let i = 0; i < 9; i++) {
      document.getElementById("c" + regiones[regionX][i] + "Id").style.border = "1px solid navy";      
    }
  }        
}

// AUXILIARES

// Contiene el aray el elemento x
function contiene(arr, x) {
  var resultado = false;
  if (arr.indexOf(x) != -1) {
    resultado = true;
  }
  return resultado;
}

// Dado el indice de una celca encontrar la fila, columna y región
function indiceToFCR(indice) {
  //alert("indice " + indice);
  filaX = Math.trunc(indice / 9);
  columnaX = indice - 9 * filaX;
  regionX = Math.trunc(filaX / 3) * 3 + Math.trunc(columnaX / 3);
  //alert("filaX " + filaX + " columnaX " + columnaX + " regionX " + regionX);
}



function fVisErr() {
  if  (partidaEnCurso==0) {
    return;
  }


  if (document.getElementById("visErrId").style.backgroundColor == "yellow") {
    document.getElementById("visErrId").style.backgroundColor = "white";
    fLimpiar();
  } else {
    document.getElementById("visErrId").style.backgroundColor = "yellow";

  for (let i = 0; i < 81; i++) {    
    if (document.getElementById("c" + i + "Id").innerHTML != "") {  
      //alert(document.getElementById("c" + i + "Id").innerHTML + "  " + sdkSol[i])        
      if (document.getElementById("c" + i + "Id").innerHTML != sdkSol[i]) {
        document.getElementById("c" + i + "Id").style.backgroundColor = celdaErrClr;        
      }    
    }  
  }
}
}

function fBorrador() {
  if  (partidaEnCurso==0) {
    return;
  }
  // Activar desactivar el pulsador en funciñon de cCAct
  if (cCAct ==false) {
    if (borradorAct == false) {
      borradorAct = true;
      document.getElementById("borradorId").style.backgroundColor = "yellow";    
    } else if (borradorAct == true){   
      borradorAct = false;
      document.getElementById("borradorId").style.backgroundColor = "white";       
    }
  }
}

function fmUnicos() {  
  if (partidaEnCurso==0) {
    return;
  }
let contador=0;
  for (let i = 0; i < 81; i++) {
    let valor = document.getElementById("c" + i + "Id").innerHTML
    if (mLpz[i].length==1) {
      contador +=1;
    }
  }
  if (mUnicos.textContent=="Únicos") {
    mUnicos.textContent = contador;
   } else {
    mUnicos.textContent = "Únicos";
  }
}

function fEliminarPartida() {

  if (confirm("Desea eliminar la partida en curso?")) {
  }else {    
   return
  }

  partidaEnCurso=0;
  
  // control de ID   
  let btnId =document.getElementById("btnIDId");
  btnId.style.backgroundColor = "white";

  sdkIni =["000000000000000000000000000000000000000000000000000000000000000000000000000000000"];
  sdkUsr =["000000000000000000000000000000000000000000000000000000000000000000000000000000000"];
  sdkSol =["000000000000000000000000000000000000000000000000000000000000000000000000000000000"];
  
  for (let i = 0; i < 81; i++) {
    document.getElementById("c" + i + "Id").innerHTML = "";
    document.getElementById("c" + i + "Id").style.backgroundColor = celdaUsrClr;
  }
}

  // Resolver el sudoku
function solucionar(sdk) {  
  let f = 9; // Filas
  let c = 9; // Columnas
  let tablero = sdkToArray(sdk, f, c);
  let x = resolverSudoku(tablero);
  let solucion = arrayToSdk(tablero);       
  sdkSol=solucion;  
  return solucion;      
}

function sdkToArray(sdk) {
  let tablero = [];
  let fila = [];
  for (let i = 0; i < sdk.length; i++) {
    fila.push(parseInt(sdk[i]));
    if ((i + 1) % 9 == 0) {
      tablero.push(fila);
      fila = [];
    }
  }
  return tablero;
}

function arrayToSdk(tablero) {
  let sdk = "";
  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      sdk += tablero[i][j];
    }
  }
  return sdk;
}

function esValido(tablero, fila, columna, num) {
  for (let x = 0; x <= 8; x++) {
    if (tablero[fila][x] == num) {
      return false;
    }
  }

  for (let x = 0; x <= 8; x++) {
    if (tablero[x][columna] == num) {
      return false;
    }
  }

  let inicioFila = fila - (fila % 3),
    inicioCol = columna - (columna % 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tablero[i + inicioFila][j + inicioCol] == num) {
        return false;
      }
    }
  }

  return true;
}

function resolverSudoku(tablero, fila = 0, columna = 0) {
  if (fila == 9) {
    return true;
  }

  if (columna == 9) {
    return resolverSudoku(tablero, fila + 1, 0);
  }

  if (tablero[fila][columna] != 0) {
    
    return resolverSudoku(tablero, fila, columna + 1);
  }

  for (let num = 1; num <= 9; num++) {
    if (esValido(tablero, fila, columna, num)) {
      tablero[fila][columna] = num;

      if (resolverSudoku(tablero, fila, columna + 1)) {
        return true;
      }

      tablero[fila][columna] = 0;
    }
  }

  return false;
  } 


// Dado el indice de una celca encontrar la fila, columna y región
function indiceToFCR(indice) {
  //alert("indice " + indice);
  filaX = Math.trunc(indice / 9);
  columnaX = indice - 9 * filaX;
  regionX = Math.trunc(filaX / 3) * 3 + Math.trunc(columnaX / 3);
  //alert("filaX " + filaX + " columnaX " + columnaX + " regionX " + regionX);
}
