// Script de administración general de la App Chárlalo

// Navega a una sección de la app (hijos directos de <main>)
function ir(seccionID) {
    Array.from(document.querySelectorAll("main>article")).forEach(
        seccion => seccion.style.display = 'none'
    );
    document.querySelector("#" + seccionID).style.display = 'block';
}
ir('charla');

// Confirma un mensaje a ser incorporado a la charla
function confirmar() {
    const texto = document.querySelector("textarea").value;
    if (texto.length > 0) {
        const mensaje = `<li>${texto}
          <a href="javascript:decir('${texto}')">📣</a>
        </li>`;
        document.querySelector("#charla ul").innerHTML += mensaje;
        decir(texto);
    }
    document.querySelector("textarea").value = "";
}

// Limpia el chat de conversación
function limpiar() {
    if (confirm("¿Borramos toda la charla?")) {
        document.querySelector("#charla ul").innerHTML  = "";
    }
}

// Carga pictogramas
async function cargarPictogramas() {
   const respuesta = await fetch("pictogramas.json");
   const lista = await respuesta.json();
   lista.forEach(pictograma => {
       const li = `<li>
       <a href='javascript:decir("${pictograma.nombre}")'>
        <img src='imagenes/pictogramas/${pictograma.archivo}' 
        alt='${pictograma.nombre}'>       
        <p>${pictograma.nombre}</p>
       </a>
       </li>`;
       document.querySelector("#pictogramas ul").innerHTML += li;
   })
}
cargarPictogramas();

// Registro del Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("serviceworker.js");
}

// Para el botón de Instalar
let bipEvent = null;
window.addEventListener("beforeinstallprompt", event => {
    bipEvent = event;
    console.log("BIP");
    document.querySelector("#instalar").style.display = "block";
});
function instalar() {
    if (bipEvent) bipEvent.prompt();
}