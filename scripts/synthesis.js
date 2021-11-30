// Uso de la API de Speech Synthesis
let voz = null;

function buscarVoz(event, idioma="es-AR") {
    const voces = speechSynthesis.getVoices().filter(v=>v.lang.startsWith(idioma));
    console.log(`Encontré ${voces.length} voces para ${idioma}`);
    if (voces.length>0) {
        voz = voces[0];
    } else {
        if (idioma.length==5) buscarVoz(event, idioma.substring(0, 2)); // busca algún idioma genérico 
    }
};

speechSynthesis.onvoiceschanged = buscarVoz;

function decir(texto) {
    if (!('speechSynthesis' in window)) {
        alert("El servicio de texto a voz no está disponible en tu dispositivo");
        return;
    }
    if (voz==null) {
        buscarVoz();
    }
    const pronunciacion = new SpeechSynthesisUtterance(texto);
    pronunciacion.voice = voz;
    speechSynthesis.speak(pronunciacion);
    console.log(`Diciendo ${texto}`);
}