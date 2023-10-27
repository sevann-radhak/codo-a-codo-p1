import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import users from './../data/users.json';
import './../modal.css';
import './../table.css';
import { Link } from 'react-router-dom'; // Import Link

interface AlbumData {
  id: number;
  title: string;
  url: string;
}

const Album: React.FC = () => {
  const [albums, setAlbums] = useState([{
    userId: 0,
    id: 0,
    title: '',
  }])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        if (!response.ok) {
          console.error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        setAlbums(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  const handleUserClick = (userId: number) => {
    const user = users.find(u => u.id === userId);
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToAlbumSingle = (id: number) => {
    window.location.href = `./Album/${id}`;
  }

  useEffect(() => {
    if (selectedUser) {
      setIsModalOpen(true);
    }
  }, [selectedUser]);

  return (
    <div>
      <h1>Album</h1>
      <p>Lista de album de usuarios:</p>
      <div className="table-responsive table-container" style={{ marginTop: '1em' }}>
        <table className="table table-bordered user-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Usuario</th>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {albums.map((albumItem) => (
              <tr key={albumItem.id}>
                <td>{albumItem.id}</td>
                <td>
                  <button className="btn btn-outline-info btn-sm" onClick={() => handleUserClick(albumItem.userId)}>
                    {users.find(u => u.id === albumItem.userId)?.name}
                  </button>
                </td>
                <td>{albumItem.title}</td>

                <td>
                  <Link to={`/Album/${albumItem.id}`} className='btn btn-sm btn-info'>Ver</Link>
                  {/* <button className='btn btn-sm btn-info' onClick={() => goToAlbumSingle(albumItem.id)}>Ver</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && selectedUser && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedUser.name}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Teléfono: {selectedUser.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Album;
