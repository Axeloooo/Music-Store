// <----- Imports ----->
import React from 'react'
import Card from '../Card/Card';
import { useParams } from 'react-router-dom';
import { getSongs, getArtist } from '../../services/firebase';
import Loader from '../Loader/Loader';
// <------------------->

export default function ItemListContainer() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [songs, setSongs] = React.useState([]);
  const params = useParams().categoryId;

  React.useEffect(() => {
    if(params === undefined){
      getSongs().then((data) => {
        setSongs(data);
        setIsLoaded(true);
      }).catch("Error retrieving data!");
    }
    else{
      getArtist(params).then((data) => {
        setSongs(data);
        setIsLoaded(true);
      }).catch('Error retrieving data!');
    }
  }, [params]);

  if(isLoaded){
    return(
      <div className="container">
        <div className="d-flex flex-column justify-content-around align-items-center gap-4 py-4 flex-md-row flex-md-wrap align-items-md-stretch">
          {songs.map((song) => {
            return(
              <Card key={song.id} song={song}></Card>
            );
          })}
        </div>
      </div>
    );
  }
  return(
    <Loader></Loader>
  );
}
