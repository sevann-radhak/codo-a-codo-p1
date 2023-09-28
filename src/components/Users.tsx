import React, { useState, useEffect } from 'react';
import './../table.css';

const Users: React.FC = () => {
    const [users, setUsers] = useState([{
        id: 0,
        name: '',
        username: '',
        email: '',
        website: '',
        phone: ''
    }]);

    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const maxId = Math.max(...users.map((user) => user.id)) + 1;
        const newUsers = [...users, {
            id: maxId,
            name: formData.name,
            username: formData.username,
            email: formData.email,
            website: formData.website,
            phone: formData.phone
        }];

        setUsers(newUsers);
        setFormSubmitted(true);
        closeModal();
        setShowSuccessMessage(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUserClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleReset = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({
            ...formData,
            name: '',
            username: '',
            email: '',
            phone: '',
            website: ''
        });
    };

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        let timeout: any;
        if (showSuccessMessage) {
            timeout = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [showSuccessMessage]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    console.error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, []);

    return (
        <div>
            <h1 style={{ float: 'left', textAlign: 'left' }}>Usuarios:</h1>
            <div style={{ float: 'right', textAlign: 'right' }}>
                {showSuccessMessage && (
                    <div className="alert alert-success" role="alert" style={{ float: 'left', fontSize: '12px' }}>
                        Usuario agregado con exito!
                    </div>
                )}
                <button type="button" style={{ float: 'right' }} className="btn btn-primary btn-sm ml-2" onClick={handleUserClick}>Agregar</button>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Sitio Web</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen &&
                (
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span style={{ textAlign: 'right' }} className="close" onClick={closeModal}>
                                &times;
                            </span>
                            <h2 className='text-center'>Formulario de registro</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        aria-describedby="emailHelp"
                                        placeholder="Ingrese su nombre"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        aria-describedby="emailHelp"
                                        placeholder="Ingrese su Username"
                                        required
                                        value={formData.username}
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
                                    <label htmlFor="phone">Telefono</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        aria-describedby="emailHelp"
                                        placeholder="Ingrese su telefono"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="website">Sitio web</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="website"
                                        name="website"
                                        aria-describedby="emailHelp"
                                        placeholder="Ingrese su sitio web"
                                        value={formData.website}
                                        onChange={handleInputChange} />
                                </div>

                                <div className='buttons'>
                                    <button type="submit" className="btn btn-outline-primary">Enviar</button>
                                    <button type="button" className="btn btn-outline-secondary ml-2" onClick={handleReset}>Borrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Users;
