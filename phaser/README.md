INICIAR PROYECTO:
Ir al directorio del proyecto y ejecutar NODE. ' http-server '
*-

INSTRUCCIONES JAVASCRIPT GAME DEVELOPER
Se deberá crear una aplicación con:

- Phaser 2.15.0 CE -> Archivo: phaser.js
- Utilizar modo AUTO (Canvas/WebGL) para el pintado. -> OK
- Debe funcionar en navegadores web de escritorio y móviles.  
	--> He utilizado propiedad css
		display: flex;
	    align-items: center;
	    justify-content: center;
	 Con propiedades de pahser 'scale.page' no conseguía centrar el contenido en todos los states sin una width de '100%'
	  --> this.scale.pageAlignVertically = true;
	      this.scale.pageAlignHorizontally = true;

*------	    

Splash Screen

- Debe de presentar un texto e imagen centrado. -> (Imagen añadida: 'slotLogo.png')
- Debe cargar los assets. -> OK
- Una vez finaliza la carga, pasar a la pantalla principal. -> OK
	--> He introducido un bucle para que alarge el tiempo de carga de los assets en 'splash.js' y se aprecie el contenido de la pantalla en Splash

*-----  

Pantalla principal

- Un reloj, que se pintará desde una llamada REST a http://worldtimeapi.org/api/ip al entrar en la escena. -> Ok, uso fetch()

- 3 carriles simulando una máquina tragaperras, donde deben aparecer diferentes símbolos.
- 1 botón “Spin”, que al pulsarlo hará girar durante 3 segundos los símbolos de los carriles verticalmente, arrancando y deteniendo de izquierda a derecha en un intervalo de 0,5 segundos
donde debe realizar una parada de símbolos aleatoria.

