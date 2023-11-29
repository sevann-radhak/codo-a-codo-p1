import mysql.connector

import datetime

class Formulario:
    
    def __init__(self, host, user, password, database):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password
        )
        
        self.cursor = self.conn.cursor()
        
        try:
            self.cursor.execute(f"USE{database}")
        except mysql.connector.Error as err:
            if err.errno == mysql.connector.errorcode.ER_BAD_DB_ERRROR:
                self.cursor.execute(f"CREATE DATABASE {database}")
                self.conn.database = database
            else:
                raise err
            
 
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS formulario (
            id int(11) NOT NULL AUTO_INCREMENT,
            nombre varchar (30) NOT NULL,
            apellido varchar(30) NOT NULL,
            telefono varchar (15) NOT NULL,
            email varchar (60) NOT NULL,
            mensaje varchar (500) NOT NULL,
            fecha_envio datetime NOT NULL,
            leido tinyint(1) NOT NULL,
            gestion varchar (500) DEFAULT NULL,
            fecha_gestion datetime DEFAULT NULL,
            PRIMARY KEY ('id')
            )ENGINE=InnoDB DEFAULT CHARSET=uft8 COLLATE=uft8_spanish_ci;
            ''')
        
        self.conn.commit()
        
        self.cursor.close()
        self.cursor = self.conn.cursor(dictionary=True)
 
    def enviar_mensaje(self, nombre, apellido, telefono, email):
        sql = "INSERT INTO  mensajes(nombre, apellido, telefono, email, mensaje, fecha_envio)"
        fecha_envio = datetime.datetime.now()
        valores = (nombre, apellido, telefono, email, fecha_envio)
        
        self.cursor.execute(sql, valores)
        self.conn.commit()
        return True
    
    def listar_mensajes(self):
        self.cursor.execute("SELECT * FROM formulario")
        formulario = self.cursor.fetchall()
        return formulario
    
    
    def responder_mensaje(self, id, gestion):
        fecha_gestion = datetime.datetime.now()
        sql = "UPDATE mensajes SET leido =1, gestion = %s, fecha_gestion = %s, WHERE id = %s"
        valores = (gestion,fecha_gestion , id)
        self.cursor.execute(sql, valores)
        self.conn.commit()
        return self.cursor.rowcount > 0
       
 
            
formulario = Formulario("localhost", "root", "", "formulario")