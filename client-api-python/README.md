# Como ejecutar

Para correr este script se debe contar con la libreria `requests` dentro del virtualenv o en las librerias instaladas a nivel de sistema.


Como crear un ambiente virtual de python: 

1. Instalar virtualenv
```` bash
$ pip install virtualenv
````

o

```` bash
$ pip3 install virtualenv
````


2. Desde la carpeta /client-api-python ejecutar: 
````bash
$ virtualenv env
````


3. Activar el environment desde la misma carpeta /client-api-python
````bash
$ source env/bin/activate
````

4. Instalar libreria requerida
````bash
(env) $ pip install -r requirements.txt
````


5. Ejecutar script:
````bash
(env) $ python test-api-calculadora.py 
````

o 

````bash
(env) $ python3 test-api-calculadora.py 
````
{"statusCode":404,"message":"Cannot GET /","error":"Not Found"}