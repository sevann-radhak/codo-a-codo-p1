import React from 'react';

const Index: React.FC = () => {
    const description = "Texto solamente demostrativo con intenciones academicas. Este recurso realiza una llamada al servicio web JSONPlaceholder que devuelve datos estructurados en formato JSON. La informacion correspondiente a Ususarios y Albums proviene de JSONPlaceholder.com. \nSu simplicidad y facilidad de uso lo convierten en una opción ideal para aprender y practicar cómo interactuar con APIs en aplicaciones web. \nJSONPlaceholder proporciona una serie de rutas simuladas que imitan las operaciones típicas de una API, como la obtención de publicaciones, comentarios, usuarios y más. Los datos devueltos por JSONPlaceholder son estáticos y predefinidos, lo que lo convierte en una herramienta valiosa para aprender y practicar el manejo de datos JSON y las interacciones con una API REST. \n"
        +
        "Esta es una herramienta útil para desarrolladores que desean adquirir experiencia en el trabajo con APIs y datos JSON antes de interactuar con servicios web reales. \nEs un recurso didáctico ampliamente utilizado en tutoriales y ejemplos de programación web."
    const desc_lines = description.split('\n')

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Pagina de Usuarios y Albumes.</h1>
            <br></br>
            {desc_lines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}

            <p>
                <p>
                    Comision 23501 - Proyecto grupo 21
                </p>
                <strong>Integrantes:</strong>
                <ul>
                    <li>Valentin Moriena</li>
                    <li>Felipe Moriena</li>
                    <li>Sevann Radhak</li>
                </ul>
            </p>
        </div>

    );
};

export default Index;
