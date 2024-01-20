import { Link } from 'react-router-dom';

const ArtImageTile = ({ art, galleryId, artId }) => {
    const firstImage = art[0];

    console.log('This is the art Prop!!!!!', art);

    return (

       // art.map(art => {
       //     return  <Link key={art.id} to={`/galleries/${art.imageid}/art/${art.id}`}>
       //                 <img src={art.baseimageurl} alt={art.title} />
       //             </Link>
//
       // })

        <Link to={`/galleries/${galleryId}/art/${artId}`}>
            <img src={firstImage.baseimageurl} alt={art.title} />
           <>  </>
        </Link>
    );
};

export default ArtImageTile;
