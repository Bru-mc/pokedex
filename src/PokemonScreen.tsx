import React from 'react';
import pikachu from './pngegg.png';
import './PokemonScreen.css';

export class PokemonScreen extends React.Component {
    render(){
        return(
            <div className='card'>
            <h1 className='titulo'>Pikachu</h1>
            <img src={pikachu} alt="pikachu" />
            <p className='descricao'>
            Pokemon raro do tipo eletrico
            </p>
            </div>
        );
    }
}