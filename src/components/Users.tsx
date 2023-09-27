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

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    console.error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                // Handle the JSON data here
                console.log(data);
                setUsers(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, []);

    return (
        <div>
            <h1>Usuarios:</h1>
            <table>
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
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
                            {/* <td>{user.id}</td> */}
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
