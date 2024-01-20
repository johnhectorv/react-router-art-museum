import { useParams, Navigate } from 'react-router-dom';

function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const findArtById = galleries.records.find(
    (art) => art.galleryid === parseInt(galleryId),
  );

  if (!findArtById) return <Navigate to="/" replace={true} />;

  return <h2>{findArtById.name}</h2>;
}

export default GalleryView;
