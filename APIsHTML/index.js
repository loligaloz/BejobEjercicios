//comprobar compatibilidad 
if (window.File && window.FileReader && window.FileList) {
   alert("El navegador soporta API's")
   function FileSeleccion (evento) {
        let file = evento.target.files[0];

        if (!file.type.match('video.*')) {
            alert('El archivo cargado no es un video');
            return;
            
        }

        let read = new FileReader();
        read.onload = (function (File) {
            return function (e) {
                alert('Video cargando....');
                let videoCaja = document.getElementsByClassName('video-caja');
                if (videoCaja[0] != null) {
                    videoCaja[0].parentNode.removeChild(videoCaja[0]);
                }

                let divVid = document.createElement('div');
                divVid.id = "video-div";
                divVid.className = "video-caja";
                divVid.innerHTML = '<video controls id="video" class="thumb" src="' + e.target.result + '" title="' + escape(File.name) + '"/>';

                document.getElementById('video-subido').insertBefore(divVid, null);


                let mensajeCarga = document.createElement('p');
                mensajeCarga.id = "loading";
                mensajeCarga.className = "loading-mensaje";
                mensajeCarga.innerHTML = 'Cargando....';

                document.getElementById('video-subido').insertBefore(mensajeCarga, null);

                let playBoton = document.getElementById('play');
                let pauseBoton = document.getElementById('pause');
                let stopBoton = document.getElementById('stop');
                let volumenUpBoton = document.getElementById('vol-up');
                let volumenDownBoton = document.getElementById('vol-down');

                playBoton.addEventListener('click', () => {
                    document.getElementById('video').play();
                });
                pauseBoton.addEventListener('click', () => {
                    document.getElementById('video').pause();
                });
                stopBoton.addEventListener('click', () => {
                    document.getElementById('video').pause();
                    document.getElementById('video').currentTime = 0;
                });
                volumenUpBoton.addEventListener('click', () => {
                    document.getElementById('video').volume += 0.2;
                });
                volumenDownBoton.addEventListener('click', () => {
                    document.getElementById('video').volume -= 0.2;
                });

                document.getElementById('video').addEventListener('canplay', () => {
                    let mensajeCarga = document.getElementById('loading');
                    document.getElementById('video-subido').removeChild(mensajeCarga);
                    document.getElementById('video').style.visibility = "visible";
                    
                    playBoton.style.visibility = "visible";
                    pauseBoton.style.visibility = "visible";
                    stopBoton.style.visibility = "visible";
                    volumenUpBoton.style.visibility = "visible";
                    volumenDownBoton.style.visibility = "visible";

                })
            }
        }) (file);
        read.readAsDataURL(file);
    }     
       document.getElementById('file').addEventListener('change', FileSeleccion, false);
} else {
    alert('El navegador no soporta los APIs');
}

 