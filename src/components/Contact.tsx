import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    sitioWeb: '',
    asunto: '',
    mensaje: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      <h1>Contact</h1>
      {formSubmitted ? (
        <p>Form submitted successfully! (:</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nombre:
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Apellido:
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Telefono:
              <input
                type="number"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Sitio Web:
              <input
                type="text"
                name="sitioWeb"
                value={formData.sitioWeb}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Asunto:
              <input
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Mensaje:
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Escribe tu mensaje"
                required
              />
            </label>
          </div>
          <button type="submit" name="enviar_formulario" id="enviar">
            <p>Enviar</p>
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
