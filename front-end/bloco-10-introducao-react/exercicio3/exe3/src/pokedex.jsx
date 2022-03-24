import React from "react";
import Pokemon from "./pokemon"
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
    render() {
        const prop = this.props.listName;
        const criatura = prop.map((element, index) => {
            return (
                <div key={index} className="container">
                    <Pokemon nome={element}/>
                </div>
            );
        })
        return criatura
    };
};

Pokedex.propTypes = {
    listName: PropTypes.arrayOf(PropTypes.string)
}

export default Pokedex;
