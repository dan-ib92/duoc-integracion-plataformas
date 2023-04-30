# Trabajos integración plataforma.


1. Servidor SOAP calculadora -> /soap-server-python
2. Cliente SOAP calculadora -> /rest-server-nestjs/src/soap-client 
3. Servicio REST calculadora -> /rest-server-nestjs/src/api-calculadora


## Ejecutar
Para poder ejecutar localmente este proyecto se requiere de Docker y Docker compose instalado en el sistema.    

Cómo instalar docker: 
    https://docs.docker.com/engine/install/ 
    https://www.bundleapps.io/blog/docker-series/pt-1-installing-docker-and-docker-compose

Como instalar docker y docker compose en windows: https://www.elchecibernetico.com/aplicaciones/instalar-docker-y-docker-compose-en-windows-10


Una vez tengamos instalado docker y docker compose, basta con ejecutar el siguiente comando para ejecutar ambas aplicaciones: 

# API Calculadora SOAP

Instrucciones: 

Para probar servicio SOAP calculadora primero se debe levatar servicio soap-server-python (ver archivo soap-server-python/README.md en dicha carpeta) y luego ejecutar test unitario en proyecto rest-server-nestjs (ver archivo rest-server-nestjs/README.md)

# API Calculadora REST

Para ejecutar API rest de calculadora se debe ejecutar el comando 

````bash
$ docker-compose up --build rest-server
````

Esto creara y ejectuara el container del servicio rest de la app calculadora en el puerto `3000`

Para probar los metodos de la API se pueden ejectuar los siguientes comandos (curl requerido). Tambien se pueden realizar llamadas a la API desde Postman o cualquier cliente http.


### Sumar
````bash
curl --location 'localhost:3000/sumar' \
--header 'Content-Type: application/json' \
--data '{
    "numeroA": 7,
    "numeroB": 155
}'
````

### Restar
````bash
curl --location 'localhost:3000/restar' \
--header 'Content-Type: application/json' \
--data '{
    "numeroA": 4,
    "numeroB": 2
}'
````

### Multiplicar
````bash
curl --location 'localhost:3000/multiplicar' \
--header 'Content-Type: application/json' \
--data '{
    "numeroA": 6,
    "numeroB": 6
}'
````


### Dividir
````bash
curl --location 'localhost:3000/dividir' \
--header 'Content-Type: application/json' \
--data '{
    "numeroA": 100,
    "numeroB": 5
}'
````


## Pruebas de API calculadora

Para probar los metodos de API una vez que el servidor rest este corriendo, se debe seguir las instrucciones dentro de la carpeta: /client-api-python. 
En esta carpeta se encuentra un script que ejecuta llamadas a las distintas APIs. TL:TR: se debe tener instalada la libreria `requests` y python 3 o superior. Desde la carpeta mencionada se debe crear un virtualenv (ver archivo README en dicha carpeta) y luego ejecutar: `python test-api-calculadora.py`
