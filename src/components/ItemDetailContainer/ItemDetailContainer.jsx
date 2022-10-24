// <----- Imports ----->
import React from 'react';
import { useParams } from 'react-router-dom';
import CardDetails from '../CardDetails/CardDetails';
import { getSong } from '../../services/firebase';
// <------------------->

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
        <CardDetails song={song}></CardDetails>
      </div>
    </div>
  );
}
