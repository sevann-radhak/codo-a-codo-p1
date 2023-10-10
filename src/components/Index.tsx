import React from 'react';

const Index: React.FC = () => {
    let description = "Este recurso ficticio simula un servicio web que devuelve datos estructurados en formato JSON. \n Su simplicidad y facilidad de uso lo convierten en una opción ideal para aprender y practicar cómo interactuar con APIs en aplicaciones web. \n"
        +
        "JSONPlaceholder proporciona una serie de rutas simuladas que imitan las operaciones típicas de una API, como la obtención de publicaciones, comentarios, usuarios y más. Los datos devueltos por JSONPlaceholder son estáticos y predefinidos, lo que lo convierte en una herramienta valiosa para aprender y practicar el manejo de datos JSON y las interacciones con una API REST. \n"
        +
        "En resumen, JSONPlaceholder es una herramienta útil para desarrolladores que desean adquirir experiencia en el trabajo con APIs y datos JSON antes de interactuar con servicios web reales. Es un recurso didáctico ampliamente utilizado en tutoriales y ejemplos de programación web."


    return (
        <div>
            <h1>Pagina de Usuarios y Albumes.</h1>
            <p>{description}</p>
        </div>
    );
};

export default Index;
