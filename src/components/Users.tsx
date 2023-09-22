import React from 'react';
import './../table.css';
import users from './../data/users.json';

const Users: React.FC = () => {
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
