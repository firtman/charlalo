// Uso de TextDetector, API experimental en Chrome https://web.dev/shape-detection/

if (!('TextDetector' in window)) {
    document.querySelector("#camara section").innerHTML = "Detectar texto con tu cámara no está soportado en esta versión de la app para tu dispositivo. Es un servicio experimental disponible en Google Chrome para Android activando el flag 'Experimental Web Features'"
}

function abrirCamara() {
    navigator.mediaDevices.getUserMedia({ video: {
        facingMode: 'environment'
    }, audio: false })
        .then(stream => {
            document.querySelector("video").srcObject = stream;
            document.querySelector("video").play();
        })
        .catch(err => {
            console.log("An error occurred: " + err);
        });
}

function sacarFoto() {
    const video = document.querySelector("video");
    const canvas = document.createElement("canvas");
    const width = 800, height = 1600;
    const context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);
    detectarConCamara(canvas);

    video.srcObject = null;
    video.pause();
}


async function detectarConCamara(image) {
    const textDetector = new TextDetector();
    try {
        const texts = await textDetector.detect(image);
        if (texts.length==0) {
            decir("No hay textos en la imagen");
            document.querySelector("output").innerHTML = "No se encontraron textos";
        } else {
            const fullText = texts.map(t=>t.rawValue).join(". ");
            document.querySelector("output").innerHTML = `${fullText} <a href='javascript:decir("${fullText}")'>📣</a>`;
        }
    } catch (e) {
        console.log(e);
        decir("Hubo un error, no pudimos detectar texto");
    }
}