import React from 'react';
import './../table.css';
import albums from './../data/albums.json';
import users from './../data/users.json';

const Album: React.FC = () => {
  return (
    <div>
      <h1>Albums:</h1>
      <p>Lista de album de usuarios:</p>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Usuario</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
              <td>{album.id}</td>
              <td>{users.find(u => u.id === album.userId)?.name}</td>
              <td>{album.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Album;
