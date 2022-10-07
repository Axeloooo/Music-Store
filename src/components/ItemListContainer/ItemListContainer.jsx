import React from 'react'
import Card from '../Card/Card';
import getSongs from '../MockAPI/MockAPI';

export default function ItemListContainer() {

  const [songs, setSongs] = React.useState([]);

  React.useEffect(() => {
    getSongs().then((data) => {
      setSongs(data)
    }).catch("Error retireving the data!");
  });

  return(
    <div className="container">
      <div className="d-flex flex-column justify-content-around align-items-center gap-4 py-4 flex-md-row flex-md-wrap align-items-md-stretch">
        {songs.map((song) => {
          return(
            <Card
              id={song.id}
              artist={song.artist}
              album={song.album}
              title={song.title}
              length={AbortSignal.lenght}
              year={song.year}
              genre={song.genre}
              stock={song.stock}
              initial={song.initial}
              price={song.price}
              image={song.image}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
