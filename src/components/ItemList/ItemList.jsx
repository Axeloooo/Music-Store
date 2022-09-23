import React from 'react'
import Pokemon from "../Pokemon/Pokemon";

export default function ItemList() {
    return (
        <div className="container">
            <div className="d-flex-col justify-content-around align-items-center py-4 d-lg-flex text-center">
            <Pokemon name="Charmander" description="Hello world" image="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/d/d4/Charmander.gif"></Pokemon>
            <Pokemon name="Charizard" description="Hello world" image="https://images.saymedia-content.com/.image/t_share/MTc2MjkyNDg2MzI1NDc4NTkw/pokemon-charizard-nicknames.png"></Pokemon>
            <Pokemon name="Bulbasaur" description="Hello world" image="https://images.saymedia-content.com/.image/t_share/MTc2Mjk3OTE1NzAxMDExNjI5/pokemon-bulbasaur-nicknames.jpg"></Pokemon>
            <Pokemon name="Snorlax" description="Hello world" image="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-legends/4/47/Snorlax.jpg"></Pokemon>
            <Pokemon name="Squirtle" description="Hello world" image="https://i.pinimg.com/564x/8b/b5/96/8bb59690dd31989407d8385295fbad41--shoe-art-pokemon-birthday.jpg"></Pokemon>
            </div>
        </div>
    )
}
