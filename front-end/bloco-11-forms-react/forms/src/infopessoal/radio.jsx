import React from "react";

class Radio extends React.Component {
    render() {
        const { value, handleState } = this.props;
        return (
            <label>
                escolha seu tipo de residencia:
                Casa
                <input type="radio" name="tipo" value={value} onChange={handleState} required></input>
                Apartamento
                <input type="radio" name="tipo" value={value} onChange={handleState} required></input>
            </label>
        )
    }
}

export default Radio;
