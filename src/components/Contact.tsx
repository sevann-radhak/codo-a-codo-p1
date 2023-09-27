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
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              aria-describedby="emailHelp"
              placeholder="Ingrese su nombre"
              required
              value={formData.nombre}
              onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              name="apellido"
              aria-describedby="emailHelp"
              placeholder="Ingrese su apellido"
              required
              value={formData.apellido}
              onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Ingrese su email"
              required
              value={formData.email}
              onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">telefono</label>
            <input
              type="text"
              className="form-control"
              id="telefono"
              name="telefono"
              aria-describedby="emailHelp"
              placeholder="Ingrese su telefono"
              required
              value={formData.telefono}
              onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="sitioWeb">Sitio web</label>
            <input
              type="text"
              className="form-control"
              id="sitioWeb"
              name="sitioWeb"
              aria-describedby="emailHelp"
              placeholder="Ingrese su sitio web"
              value={formData.sitioWeb}
              onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="asunto">Asunto</label>
            <input
              type="text"
              className="form-control"
              id="asunto"
              name="asunto"
              aria-describedby="emailHelp"
              placeholder="Ingrese su asunto"
              required
              value={formData.asunto}
              onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <input
              type="text"
              className="form-control"
              id="mensaje"
              name="mensaje"
              aria-describedby="emailHelp"
              placeholder="Ingrese su mensaje"
              required
              value={formData.mensaje}
              onChange={handleInputChange} />
          </div>
          <div>
            
          </div>
          <button type="submit" className="btn btn-outline-primary">Enviar</button>
          <button type="reset" className="btn btn-outline-secondary">Borrar</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
