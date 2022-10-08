import React from 'react';
import { getSong } from '../MockAPI/MockAPI';
import { useParams } from 'react-router-dom';
import CardDetails from '../CardDetails/CardDetails';

export default function ItemDetailContainer() {

  const [song, setSong] = React.useState([]);
  const params = useParams().songId

  React.useEffect(() => {
    getSong(params).then((data) => {
      setSong(data);
    }).catch('Error retrieving data!');
  }, [params]);

  return(
    <div className="container">
      <div className="d-flex flex-column justify-content-around align-items-center gap-4 py-4 flex-md-row flex-md-wrap align-items-md-stretch">
        <CardDetails
          key={song.id}
          id={song.id}
          artist={song.artist}
          album={song.album}
          title={song.title}
          length={song.length}
          year={song.year}
          genre={song.genre}
          stock={song.stock}
          initial={song.initial}
          price={song.price}
          image={song.image}
        ></CardDetails>
      </div>
    </div>
  );
}
