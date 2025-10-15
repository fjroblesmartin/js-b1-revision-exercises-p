## 🗒️ Requisitos

Para realizar los ejercicios de este tema deberás haber realizado los ejercicios de los temas anteriores.

## 📝 Enunciados

> 💡 El ejercicio deberás realizarlo en el fichero correspondiente, que estará ubicado en la carpeta del bloque de ejercicios de repaso y con la nomenclatura **T1-T2.js**. El ejercicio se presentará en un fichero js, que incluirá un comentario con el enunciado del ejercicio. 

El EJERCICIOS DE REPASO es el siguiente:

| UNIDAD | Ejercicios |
| -------- | ---------- |
| 1. EJERCICIO TEMA 1 y TEMA 2                          | [T1-T2](T1-T2/T1-T2.js) |

Además, el ejercicio irá acompañado de uno o varios tests para comprobar que tu solución es correcta. En la sección [Cómo ejecutar los tests](#cómo-ejecutar-los-tests) describimos cómo puedes ejecutar los tests.

Cuando hayas propuesto una implementación para la función, ejecuta los tests para ver si tu solución es correcta. Si no pasa los tests, vuelve a intentarlo revisando los errores que te comentan los tests.

Una vez termines el ejercicio, deberás enviar tus cambios para que se registren en la plataforma y que puedan ser corregidos por tu profesor. En la sección [Entregar ejercicio](#entregar-ejercicio) describimos cómo has de enviar tu solución al ejercicio.

## 🛠️ Cómo ejecutar los tests

Para lanzar los tests deberás ejecutar esta instrucción en el Terminal de tu editor (el Terminal está localizado en la parte inferior de la pantalla)

```
npm t
```

La instrucción anterior lanzará los tests cada vez que guardes el fichero `src/tema0.js`, que es precisamente donde implementarás los ejercicios de esta PEC.

Como puedes esperar, la primera vez que ejecutes `npm t` y se lancen los tests, si no has realizado el ejercicio, fallarán todos. Revisa el mensaje de error que se imprime para conocer su formato y entender cómo se notifican los errores.

Este es un ejemplo de una posible salida de error:

```
 FAIL  src/T1-T2.test.js
  pec
    checkAge:
      × should return true when age is bigger or equal than 18
```

Es importante fijarse en la descripción del error, por ejemplo, el texto de error anterior indica que para el ejercicio (relativo a la funcinón `checkAge`) la función debe devolver `true` si `age` es mayor o igial que 18. Esta indicación os ayuda a revisar el código para comprobar porqué el comportamiento no es el esperado.

Una vez corregido el problema, en cuanto se guarda el fichero donde estamos editando los ejercicios, el test se vuelve a lanzar y nos mostraría:

```
 PASS  src/tema0.js
  pec
    checkAge:
      √ should return true when age is bigger or equal than 18
```

Ahora el test muestra `PASS` y el caso de prueba que antes fallaba se muestra como correcto (con el carácter `√`).

El comando de pruebas (en el Terminal) tiene un menú (accesible mediante la tecla `w`) que os permite ejecutar los tests selectivamente. Por ejemplo, pulsando `a` podéis relanzar manualmente todos los tests; y pulsando `f` podéis relanzar solamente aquellos tests que han fallado. Probad las diferentes opciones y si tenéis alguna duda, consultadla en el foro de la asignatura.

## 📦 Entregar ejercicio

Para entregar el ejercicio, sigue estos pasos. Ten en cuenta que estos pasos están indicados para VSCode, el IDE que te recomendamos en la Escuela de Programación.

1. Guarda el fichero `src/tema0.js` pulsando CTRL+s

2. Haz click en el icono de la extensión Git en la barra de menú izquierda, este es el icono:

    ![Git](imgs/git.png)

3. Haz click en el símbolo + para añadir el fichero que quieras enviar:

4. Escribe un mensaje resumiendo tus cambios (por ejemplo, "Submitting exercise") y luego haz click en _Commit_

    ![Commit](imgs/commit.png)

5. Haz click en _Sync Changes_ 

    ![SyncChanges](imgs/sync.png)

Tu ejercicio ya está entregado, el profesor podrá revisarlo si es necesario. 


