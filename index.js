let contador = 0;

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.classList.add('heart');
    
    // Posición horizontal aleatoria
    heart.style.left = Math.random() * 100 + '%';
    
    // Duración aleatoria de la caída (entre 4 y 6 segundos)
    const duration = 4 + Math.random() * 2;
    heart.style.animationDuration = `${duration}s`;
    
    document.body.appendChild(heart);
    
    // Eliminar el corazón después de la animación
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }

  // Crear un nuevo corazón cada 300ms
  setInterval(createHeart, 250);



  document.getElementById("boton_no").addEventListener("click", function() {
    let div = document.getElementById("boton_no");
    let scale = parseFloat(getComputedStyle(div).transform.split(",")[0].replace("matrix(", "")) || 1;
    div.style.transform = `scale(${scale * 0.8})`;
    
    let botonSi = document.getElementById("boton_si");
    let scaleSi = parseFloat(getComputedStyle(botonSi).transform.split(",")[0].replace("matrix(", "")) || 1;
    botonSi.style.transform = `scale(${scaleSi * 1.2})`;

    const botonsitxt = document.getElementById("boton_si");

    switch (contador) {
        case 0:
            botonSi.textContent = "Yes?!";
            break;
        case 1:
            botonSi.textContent = "Andale!";
            break;
        case 2:
            botonSi.textContent = "Por favor";
            break;
        case 3:
            botonSi.textContent = "Chi??";
            break;
        case 4:
            botonSi.textContent = "Si quieres, no te hagas";
            break;
        case 5:
            botonSi.textContent = "YAAA";
            break;
    
        default:
            contadorNo = -1;
            botonSi.textContent = "Yes?!";
            break;
    }
    contador++;
});

document.getElementById("boton_si").addEventListener("click", function(){
    window.open("si.html");




});
