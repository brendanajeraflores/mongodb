# Ejemplo para usar MongoDB

## Descripción

Este repositorio contiene documentos que ayudarán a entender como funciona la base de datos no relacional como MongoDB.

## Requisitos

* Instalar [MongoDB](https://www.mongodb.com/)
* Agregar al PATH para utilizar los comandos de `MongoDB`
* Opcionalmente instalar un manejador de base de datos `MongoDB` como [Robo3T](https://robomongo.org/)

## Archivo `datos.js`

Archivo que contiene los datos que se agregarán a `MongoDB`.

Los datos en `MongoDB` se guardan en formato JSON, para dar mayor facilidad de poder manejar los documentos en la base.

## Archivo `insert.js`

Archivo que contiene las sentencias para agregar datos a la base de `MongoDB`.

La instrucción para agregar datos en la base de `MongoDB` es la siguiente:
```objc
	db.getCollection('coleccion').insert()
``` 

## Archivo `find.js`

Archivo que contiene las sentencias para buscar datos en la base de `MongoDB`.

La instrucción para agregar datos en la base de `MongoDB` es la siguiente:
```objc
	db.getCollection('coleccion').find({})
``` 

## Ejecución MongoDB

**Iniciar MongoDB**

Abrir una consola y ejecutar el comando:
```objc
	mongod.exe
```
Dejar trabajando el proceso de esta consola.

**Usar MongoDB**
Abrir una consola nueva y ejecutar el comando:
```objc
	mongo.exe
```
En esta consola ya se puede empezar a ingresar las sentencias para agregar datos o consultarlos.

Para ver las bases de datos que se tengan dentro de `MongoDB` se utiliza la sentencia:
Abrir una consola y ejecutar el comando:
```objc
	show dbs
```
Para ver cambiarse de base de datos dentro de `MongoDB` se utiliza la sentencia:
Abrir una consola y ejecutar el comando:
```objc
	use [nombreBD]
```

Dentro de una base, para ver las colecciones que se tengan dentro se utiliza la sentencia:
Abrir una consola y ejecutar el comando:
```objc
	show collections
```



