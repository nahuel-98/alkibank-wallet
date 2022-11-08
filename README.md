# Backend Node Template

## ✅ Primero lo primero: instalar las dependencias iniciales del proyecto antes de trabajar:
```
npm install
```
## 🚩 Recomendaciones:
Utilizar la versión de Node v14.x

## 💡 El proyecto utliza Sequelize como ORM. Comandos utiles del CLI:

### Como generar un modelo desde cero
```
npx sequelize model:generate --name Ejemplo --attributes ejemplo:string
```
### Crear la base de datos
```
npx sequelize db:create
```
### Migrar modelos creados previamente
```
npx sequelize db:migrate
```
### Correr seeders con datos de prueba
```
npx sequelize-cli db:seed:all
```
### Borrar la base de datos que creamos
```
npx sequelize db:drop
``` 

### Usuarios de prueba:
| firstName  | lastName     | email                        | password | role  |
|------------|--------------|------------------------------|----------|-------|
| Mohammed   | Haag         | reinhold83@example.com       | password | ADMIN |
| Gregoria   | Durgan       | jace.kuvalis@example.net     | password | ADMIN |
| Frieda     | Langosh      | tiana01@example.net          | password | ADMIN |
| Houston    | Bartoletti   | fkuhic@example.net           | password | ADMIN |
| Brett      | Christiansen | wdamore@example.org          | password | ADMIN |
| Rebekah    | Cormier      | bryana.schmidt@example.org   | password | ADMIN |
| Amir       | Ritchie      | hettinger.sasha@example.net  | password | ADMIN |
| Weldon     | Aufderhar    | elwyn.brakus@example.org     | password | ADMIN |
| Herminia   | Zemlak       | emery.swaniawski@example.com | password | ADMIN |
| Antonietta | Abbott       | swift.claud@example.net      | password | ADMIN |
| Arlo       | Wunsch       | alison.halvorson@example.org | password | USER  |
| Judy       | Bauch        | xabshire@example.com         | password | USER  |
| Adolph     | Shields      | tyrese.torphy@example.org    | password | USER  |
| Audreanne  | Treutel      | casimer87@example.org        | password | USER  |
| Florine    | Heller       | antwon.kunze@example.org     | password | USER  |
| Dariana    | Waters       | volkman.karli@example.com    | password | USER  |
| Juliana    | Stiedemann   | rjohnston@example.net        | password | USER  |
| Neva       | Langworth    | rudolph76@example.org        | password | USER  |
| Eli        | Bauch        | payton.beatty@example.net    | password | USER  |
| Kristy     | Dickens      | berge.lesley@example.net     | password | USER  |

## 🏗 Algunos datos del proyecto:
- La estructura de carpetas es del patron MVC
- Las respuestas positivas las devuelve como un objecto. Las negativas las gestiona como un HTML
- En el proyecto encontrarán un ejemplo de como se implementa el flujo de información dentro de la app.
- Para el flujo de trabajo utilizaremos Gitflow. Para el mismo deberan crear una rama con el numero de tarjeta con el que esten trabajando

![image](https://user-images.githubusercontent.com/79473217/193649836-2720c8f4-a038-4014-b9a5-c515a9aee273.png)
- Cuando el trabajo este terminado, se debe generar el "Pull Request" o PR como le solemos llamar. El proyecto ya cuenta con un template de PR, por lo que ustedes solo tendran que completar con los datos que les indica el template. Esta seria una imagen de ejemplo de un PR con su evidencia en caso de falla y su caso de éxito.

![image](https://user-images.githubusercontent.com/79473217/193650283-f9d52ece-3548-4a27-8cbf-63fc9fcf72e2.png)
- Las respuestas positivas se gestionan con el helper enpodintResponse, y los negativos con createHtppError de la libreria http-errors.
Ejemplo de satisfactoria

Ejemplo de respuesta negativa:
![image](https://user-images.githubusercontent.com/79473217/193651690-f0081ce6-9d2e-43ca-9986-bec8a9082d7f.png)



## 🚑 Helpers basicos:
### catchAsync 
Es una función para estandarizar la forma en la que se crean los metodos en los controladores. Para ver mas buscar en helpers/catchAsync.js

### endpointResponse:
Estructura las respuestas positivas de toda la app. Dentro del archivo helpers/success.js podran ver que parametros le pueden pasar.

### ErrorObject:
Un objecto de error, el cual puede recibir varios atributos (pueden verlo en helpers/error.js)
El mismo es una extensión de el objecto Error nativo de JS. Sirve para devolver errores cuando esten por fuera del controlador, y que los errores sean interceptados por el CATCH que tendran en los controllers. 




