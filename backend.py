import dataclasses
from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import datetime


app = Flask(__name__)
CORS(app) 

#paso 5: que todos los demas metodos funcionen
class Formulario:
    
    def __init__(self, host, user, password, database):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password
        )
        
        self.cursor = self.conn.cursor()
        
        try:
            self.cursor.execute(f"USE {database}")
        except mysql.connector.Error as err:
            if err.errno == mysql.connector.errorcode.ER_BAD_DB_ERROR:
                self.cursor.execute(f"CREATE DATABASE {database}")
                self.conn.database = database
            else:
                raise err
            
 
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS usuarios (
             id int(11) NOT NULL AUTO_INCREMENT,
             name varchar (30) NOT NULL,
             username varchar(30) NOT NULL,
             email varchar (15) NOT NULL,
             website varchar (60) NOT NULL,
             phone varchar (500) NOT NULL,
             PRIMARY KEY (id)
             )ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
             ''')
        
        self.conn.commit()
        
        self.cursor.close()
        self.cursor = self.conn.cursor(dictionary=True)
 
 # paso 2 descomentar este metodo y conectar con el del paso 1
 
    def procesar_formulario(self, data):
        # Procesar los datos y luego llamar a enviar_mensaje
        self.enviar_mensaje(data['nombre'], data['apellido'], data['telefono'], data['email'])
 
    def enviar_mensaje(self, name, username, email, website, phone):
        sql = "INSERT INTO  usuarios(name, username, email, website, phone) VALUES (%s, %s, %s, %s, %s)"
        fecha_envio = datetime.datetime.now()
        valores = (name, username, email, website, phone)
        
        #paso 4: verificar que este metodo funcione y que el registro quede guardado en la bbddd
        self.cursor.execute(sql, valores)
        self.conn.commit()
        return True
    
    # def listar_mensajes(self):
    #     self.cursor.execute("SELECT * FROM formulario")
    #     formulario = self.cursor.fetchall()
    #     return formulario
    
    
    # def responder_mensaje(self, id, gestion):
    #     fecha_gestion = datetime.datetime.now()
    #     sql = "UPDATE mensajes SET leido =1, gestion = %s, fecha_gestion = %s, WHERE id = %s"
    #     valores = (gestion,fecha_gestion , id)
    #     self.cursor.execute(sql, valores)
    #     self.conn.commit()
    #     return self.cursor.rowcount > 0
    
    # def eliminar_mensaje(self, id):
    #     self.cursor.execute(f"DELETE FROM mensajes WHERE id = {id}")
    #     self.conn.commit()
    #     return self.cursor.rowcount > 0
    
    # def mostrar_mensaje(self,id):
    #     sql = f"SELECT id, nombre, apellido, telefono, email, mensaje, fecha_envio, leido, gestion, fecha_gestion, FROM mensajes WHERE id = {id}"
    #     self.cursor.execute(sql)
    #     return self.cursor.fetchone()
       
            
    #     def enviar_mensaje(self, nombre, apellido, telefono, email):
    #      print(nombre, apellido, telefono, email)
    #      return True
    
    
# paso 3 descomentar siguiente linea, comentar la que le sigue
formulario = Formulario("localhost", "root", "", "formulario")
# formulario = Formulario()
# data={}
# formulario.procesar_formulario(data)

@app.route("/mensajes", methods=["GET"])
def listar_mensajes():
    respuesta = mensaje.listar_mensajes()
    return jsonify(respuesta)




@app.route('/enviar_mensaje', methods=['POST'])
def recibir_mensaje():
    data = request.get_json()
    print(data)
    print(data['name'])
    #paso 1 descomentar siguiente linea
    formulario.enviar_mensaje(data['name'], data['username'], data['email'], data['website'], data['phone'])
    return jsonify({'success': True})

@app.route("/mensajes/<int:id>", methods=["PUT"])
def responder_mensaje(id):
    #Recojo los datos del form
    gestion = request.form.get("gestion")
    
    if mensaje.responder_mensaje(id, gestion):
        return jsonify({"mensaje": "Mensaje modificado"}), 200
    else:
        return jsonify({"mensaje": "Mensaje no encontrado"}), 403



if __name__ == '__main__':
    app.run(debug=True)
