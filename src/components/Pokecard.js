import React from 'react'
import '../styles/Pokecard.css'


// const POKI_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const POKI_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (num)=>(num <= 999 ? `00${num}`.slice(-3) : num)

function Pokecard(props) {
let imgSrc = `${POKI_API}${padToThree(props.id)}.png`;
    return (
        
        <div className="pokecard">
            <h1 className='pokecard-title'>{props.name}</h1>
            <div className="card-img">
                <img src={imgSrc} alt={props.name} />
            </div>
            <div className='pokecard-data'>Type: {props.type} </div>
            <div className='pokecard-data'>EXP: {props.exp} </div>
        </div>
        
    )
}

export default Pokecard