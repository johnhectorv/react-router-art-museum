import { useParams, Navigate } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile/ArtImageTile'

function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const findArtById = galleries.records.find(
    (art) => art.galleryid === parseInt(galleryId),
  );

  if (!findArtById) return <Navigate to="/" replace={true} />;

  console.log(findArtById);

  return (
    <div>
        <h2>{findArtById.name}</h2>;
        {findArtById.objects.map(art => (
          <ArtImageTile key={art.id} art={art.images} galleryId={galleryId} artId={art.id} />
        ))}
    </div>
  )
}

export default GalleryView;
