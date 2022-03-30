import React from "react";
import pokemons from "./data";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const param = this.props.nome;
        const filtro = pokemons.filter((pokemons) => pokemons.name === param);
        const valores = filtro.map((element) => {
            return (
                <div className="card">
                    <h4>{element.name}</h4>
                    <p>{`Type: ${element.type}`}</p>
                    <p>{`Weight: ${element.averageWeight.value}${element.averageWeight.measurementUnit}`}</p>
                    <img src={element.image} alt={element.name}></img>
                </div>
            );
        })
        return valores 
    }
}

Pokemon.propTypes = {
    nome: PropTypes.arrayOf(PropTypes.string)
}

export default Pokemon;
