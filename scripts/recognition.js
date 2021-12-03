// Uso de la API de Speech Recognition

let escucha;
function hablar(event) {
  if (!"webkitSpeechRecognition" in window) {
    alert("El servicio de reconocimiento no está disponible en tu dispositivo");
    return;
  }
  if (escucha) {
    pararDeHablar();
    return;
  }
  if (event) {
    event.preventDefault();
  }
  document.querySelector("#hablar").className = "hablando";
  document.querySelector("#hablar").innerHTML = "Escuchando... Parar";
  escucha = new webkitSpeechRecognition();
  escucha.lang = "es-AR";
  escucha.interimResults = false;
  escucha.continuous = true;
  document.querySelector("textarea").value = "";

  escucha.addEventListener("result", (event) => {
    let texto = "";
    Array.from(event.results).forEach((resultado) =>
      Array.from(resultado).forEach((transcripcion) => {
        texto += transcripcion.transcript;
      })
    );
    document.querySelector("textarea").value += texto;
  });
  escucha.addEventListener("error", pararDeHablar);
  escucha.addEventListener("end", pararDeHablar);
  escucha.addEventListener("nomatch", pararDeHablar);

  escucha.start();
}

function pararDeHablar() {
  if (escucha) escucha.stop();
  document.querySelector("#hablar").className = "";
  document.querySelector("#hablar").innerHTML = "Hablar usando la Voz";
  escucha = null;
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("#hablar").addEventListener("click", hablar);
});
