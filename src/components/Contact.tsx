import React from 'react';

const Contact: React.FC = () => {
    return (
        <div>
            <h1>Contact</h1>
            <p>This is the Contact content.</p>
            <form action="submeter-formulario.php" method="post">
            <form>
  <label>
    Nombre:
    <input type="text" name="name" />
  </label>
</form>
<form>
  <label>
    Apellido:
    <input type="text" name="name" />
  </label>
</form>
<form>
  <label>
    Email:
    <input type="text" name="name" />
  </label>
</form>
<form>
  <label>
    Telefono:
    <input type="number" name="number" />
  </label>
</form>
<form>
  <label>
    Sitio Web:
    <input type="text" name="name" />
  </label>
</form>
<form>
  <label>
    Asunto:
    <input type="text" name="name" />
  </label>
</form>
<form>
  <label>
    Mensaje:
    <textarea
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="message"
    placeholder="Escribe tu mensaje"
  />
  </label>
</form>
<button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>
</form>



        </div>
        
    );
};

export default Contact;
