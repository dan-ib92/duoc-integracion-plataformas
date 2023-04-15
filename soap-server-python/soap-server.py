from spyne import Application, rpc, ServiceBase, Iterable, Integer, Unicode, ComplexModel, Decimal

from spyne.protocol.soap import Soap11
from spyne.server.wsgi import WsgiApplication 

class CalculadoraService(ServiceBase):
    @rpc(Integer, Integer, _returns=Decimal)
    def sumar(ctx, numberA, numberB):
        print('sumar invoked', numberA, numberB)
        return int(numberA) + int(numberB)

    @rpc(Integer, Integer, _returns=Decimal)
    def restar(ctx, numberA, numberB):
        print('restar invoked', numberA, numberB)
        return int(numberA) - int(numberB)

    @rpc(Integer, Integer, _returns=Decimal)
    def multiplicar(ctx, numberA, numberB):
        print('multiplicar invoked', numberA, numberB)
        return int(numberA) * int(numberB)

    @rpc(Integer, Integer, _returns=Decimal)
    def dividir(ctx, numberA, numberB):
        print('dividir invoked', numberA, numberB)
        return int(numberA) / int(numberB)


application = Application([CalculadoraService], 'duoc.integracionplataformas.calculadora.soap',
                in_protocol=Soap11(),
                out_protocol=Soap11())

wsgi_application = WsgiApplication(application)

if __name__ == '__main__':
    import logging

    from wsgiref.simple_server import make_server

    logging.basicConfig(level=logging.DEBUG)
    logging.getLogger('spyne.protocol.xml').setLevel(logging.DEBUG)

    port = 8099;

    logging.info(f"listening to http://localhost:{port}")
    logging.info(f"wsdl is at: http://localhost:{port}/?wsdl")

    server = make_server('localhost', port, wsgi_application)
    server.serve_forever()