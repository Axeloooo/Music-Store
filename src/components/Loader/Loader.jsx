// <----- Imports ----->
import React from 'react'
import { Waveform } from '@uiball/loaders'
// <------------------->

export default function Loader() {
  return(
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center py-5">
        <Waveform 
        size={40}
        lineWeight={3.5}
        speed={1} 
        color="black" 
        />
      </div>
    </div>
  );
}
