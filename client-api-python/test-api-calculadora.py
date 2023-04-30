import requests

URL='http://localhost:3000'

def dividir():
    url = f"{URL}/calculadora/dividir"
    payload = {
        "numeroA": 100,
        "numeroB": 5
    }

    response = requests.post(url, json=payload)

    if response.status_code == 200:
        data = response.json()
        result = data.get('result')
        print(f"El resultado de la división es: {result}")
    else:
        print(f"Error al llamar al servicio dividir. Código de respuesta: {response.status_code}")

def multiplicar():
    url = f"{URL}/calculadora/multiplicar"
    payload = {
        "numeroA": 3,
        "numeroB": 3
    }

    response = requests.post(url, json=payload)

    if response.status_code == 200:
        data = response.json()
        result = data.get('result')
        print(f"El resultado de la multiplicación es: {result}")
    else:
        print(f"Error al llamar al servicio multiplicar. Código de respuesta: {response.status_code}")


def sumar():
    url = f"{URL}/calculadora/sumar"
    payload = {
        "numeroA": 5,
        "numeroB": 5
    }

    response = requests.post(url, json=payload)

    if response.status_code == 200:
        data = response.json()
        result = data.get('result')
        print(f"El resultado de la suma es: {result}")
    else:
        print(f"Error al llamar al servicio sumar. Código de respuesta: {response.status_code}")



def restar():
    url = f"{URL}/calculadora/restar"
    payload = {
        "numeroA": 10,
        "numeroB": 8
    }

    response = requests.post(url, json=payload)

    if response.status_code == 200:
        data = response.json()
        result = data.get('result')
        print(f"El resultado de la resta es: {result}")
    else:
        print(f"Error al llamar al servicio restar. Código de respuesta: {response.status_code}")



def main():
    print('Ejecutando llamadas a API de calculadora...')
    try:
        dividir()
        multiplicar()
        sumar()
        restar()
    except requests.exceptions.HTTPError as errh:
        print(f"Error HTTP: {errh}")
    except requests.exceptions.ConnectionError as errc:
        print(f"Error de conexión: {errc}")
    except requests.exceptions.Timeout as errt:
        print(f"Timeout de la solicitud: {errt}")
    except requests.exceptions.TooManyRedirects as errr:
        print(f"Error de redirección: {errr}")
    except Exception as err:
        print(f"Error inesperado: {err}")

    print('Completado')


if __name__ == "__main__":
    main()