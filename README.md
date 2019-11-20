# Proyecto cifrado cesar: MeDecode.

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Luego de realizar una breve encuesta entre amigos con la pregunta **"¿Para qué usarias mensajes secretos?"**, la cual dió como resultado diferentes opciones; desde mensajes para acordar lugares de encuentro, hasta la necesidad de comunicar información personal confidencial. Entre ellos, algunos comentaron que como trabajadores del área de la salud (médico, psicologa, enfermera, etc) seria útil para ellos codificar información de pacientes para ser enviada por correo electronico o whatsapp a colegas, evitando tener que esperar a encontrarse en el mismo espacio físico para comunicarse y a su ves manteniendo el resguardo del contenido.

Es así como nace **MeDecode**, aplicación que permite el **cifrado y descifrado de información médica** usando para esto una clave numérica escogida por el usuario (de mutuo acuerdo entre receptor y emisor), el texto cifrado puede ser copiado y pegado en alguno de los medios de comunicación digital tradicional (correo electronico, whatsapp, slack, etc), para ser enviado entre profesionales de la salud quedando resguardado el contenido de los mensajes y puede ser descifrado haciendo uso de la misma aplicación.

## Interfaz de Usuario

Para la elección de la interfaz de usuario, se realizó un sketch a mano alzada y posteriormente en balsamiq, este se compone de una sola página en la que se despliega el área de texto a ingresar, el area de texto con la información resultante del cifrado/descifrado, un recuadro para ingresar número de cifrado y dos botones, para cifrar y descifrar respectivamente.

![sketch mano alzada](imagenesREADME/sketch.jpg) ![sketch Balsamiq](imagenesREADME/imgBalsamiq.png)

Luego de una primera puesta a prueba de la aplicación con el squad opte por mantener el contenido desplegado solo en una página, pero variar el orden de los componente dandole una organización más logica e intuitiva para el usuario, de la siguiente manera:

- El area para ingresar el texto a cifrar o descifrar
- El recuadro para ingresar la clave numérica
- Los botones para cifrar y descifrar
- El área donde se obtendra el resultados del texto cifrado o descifrado 
- Los pbotones que permiten copiar el texto resultante o limpiar el contenido para volver a hacer uso de los espacios.

En cuanto a la estetica y estilos de la aplicación, se busco en repositorios de imagenes (pinteres) colores y diseños asociados a medicina y/o el area de la salud, observandose una tendencia hacia los tonos de verde, azul y blanco, los que fueron aplicados en el diseño del logo, áreas de texto y botones.

![Apariencia General MeDecode](imagenesREADME/imgGeneral.png)

## ¿Cómo funciona?

### Para Cifrar:
- Escribe o pega el texto en la primera área de texto.
  ![texto a cifrar](imagenesREADME/ingresaTexto.png)
- Escoger una clave numérica (es necesaria para el cifrado y debes comunicarla a quien le enviaras el mensaje).  
  ![clave numérica](imagenesREADME/claveNum.png)
- Haz "click" en el botón cifrar

  ![boton cifrar](imagenesREADME/botonCifrar.png)
- Para traspasar el texto cifrado a tu correo, whatsapp web u otro, puedes hacer "click" en boton copiar (o  seleccionar y copiar el mensaje) y pegar en el espacio deseado.
  ![copiar mensaje cifrado](imagenesREADME/botonCopiar.png)
- presiona el botón Limpiar para despejar las areas de texto y puedas volver a ocuparlas.
  ![boton limpiar](imagenesREADME/botonLimpiar.png)

### Para Descifrar:
- Escribe o pega el texto cifrado en la primera área de texto.
  ![texto a decifrar](imagenesREADME/textoDescifrar.png)
- Digita la clave numérica (definida por quien envia la información).
  ![clave numérica](imagenesREADME/claveNum.png)
- Haz "click" en el botón descifrar.

  ![boton decifrar](imagenesREADME/botonDecifrar.png)
- Para traspasar el texto descifrado a otro espacio, puedes hacer "click" en boton copiar (o seleccionar y copiar el mensaje) y pegar en el espacio deseado.
  ![copiar mensaje descifrado](imagenesREADME/botonCopiarDes.png)
- presiona el botón Limpiar para despejar las areas de texto y puedas volver a ocuparlas.
  ![boton limpiar](imagenesREADME/botonLimpiar.png)


