Ejercicios de Callback
Saludo con retraso
Crea una función llamada saludar que reciba un nombre como parámetro y un callback. La función saludar deberá esperar 2 segundos y luego llamar al callback con un mensaje de saludo como "Hola, [nombre]!".

Suma con callback
Crea una función llamada sumar que reciba dos números como parámetros y un callback. La función debe realizar la suma de los dos números y pasar el resultado al callback.

Filtro de números positivos
Crea una función llamada filtrarPositivos que reciba un array de números y un callback. La función debe filtrar los números positivos y pasar el resultado (un array) al callback.

Ejercicios de Promises
Saludo con Promise
Crea una función llamada saludar que reciba un nombre como parámetro. La función debe devolver una promise que se resuelva con el mensaje "Hola, [nombre]!" después de 2 segundos.

Multiplicación con Promise
Crea una función llamada multiplicar que reciba dos números como parámetros y devuelva una promise. La promise debe resolverse con el resultado de multiplicar los dos números después de 1 segundo.

Comprobar si un número es mayor que 10
Crea una función llamada esMayorQue10 que reciba un número. La función debe devolver una promise que se resuelva con el mensaje "Número válido" si el número es mayor que 10, o se rechace con "Número inválido" si no lo es.

Ejercicios Combinados de Callback y Promise
Simular un login con Callback y Promise
Crea una función llamada login que reciba un nombre de usuario y una contraseña. La función debe devolver una promise que se resuelva con el mensaje "Login exitoso" si las credenciales son correctas, o se rechace con "Credenciales incorrectas" si son incorrectas.

Encadenar Promises
Crea dos funciones: sumar que sume dos números y multiplicar que multiplique dos números. Ambas deben devolver promises. Usa ambas funciones y encadenalas para que el resultado de sumar dos números se pase como parámetro a la función de multiplicación y finalmente imprimas el resultado.