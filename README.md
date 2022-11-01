# Instalacion Test Zara 

## Script a usar

En el directorio del proyecto podras usar:

### `npm start` 
Inicializar el proyecto en modo desarrollo

### `npm buil`
Copilar el proyecto para modo Producción

### `npm test`
Correr los test del proyecto

### `npm run lint`
Comprobar codigo del proyecto usando eslint


## Arracar el proyecto

Clonar el git repositorio:

```
git clone https://github.com/srarteaga/test-zara.git
```

Instalar los paquetes de node modules:

```
npm install
```

Agregar el archivo .env 

```
cp env.example .env

```
Verificar la ruta de la api en el archivo .env

```
REACT_APP_API=https://front-test-api.herokuapp.com

```

Arrancar el poyecto en modo desarrollo

```
npm start

```

Abrir [http://localhost:3000](http://localhost:3000) en su explorador para ver el proyecto.


## Configuracion del tiempo de el almacenamiento en cache

El sistema guardar en cache las consultas api, en el caso de querer cambiar el tiempo determinado editar este archivo

```
src/storageTimer.j

```

Cambiar el valor "timer" al tiempo que quiere almacenar los datos en cache
la variable timer se define en minutos.

```js

function setTimer()
{
  const timer=60; //60 minutes
  TimeStorage = new Date();
  TimeStorage.setMinutes(TimeStorage.getMinutes() + timer);
  localStorage.setItem('TimeStorage', TimeStorage);
}

```