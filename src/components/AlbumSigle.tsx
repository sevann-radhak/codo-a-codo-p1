import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './albumsingle.css'

interface AlbumData {
    id: number;
    albumId: number;
    title: string;
    url: string;
}
const AlbumSigle: React.FC = () => {
    const [photos, setPhotos] = useState<AlbumData[]>([]);
    const { id } = useParams<{ id: string }>();
    const albums: AlbumData[] = [];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                if (!response.ok) {
                    console.error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                if (id) {
                    const filteredPhotos = data.filter((photo: AlbumData) => photo.albumId == parseInt(id));
                    setPhotos(filteredPhotos);
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, []);

    if (id !== null && id !== undefined && photos?.length > 0) {
        return (
            <div className='image-container'>
                {photos.map(photo => (
                    <div>
                        <img src={photo.url} alt="..." className="img-thumbnail" key={photo.id} style={{ float: "left" }} />
                        <small>{photo.title}</small>
                    </div>
                ))}
            </div>
        )
    }
    else {
        return (<div>No data found for Id: {id}</div>)
    }
};

export default AlbumSigle;
