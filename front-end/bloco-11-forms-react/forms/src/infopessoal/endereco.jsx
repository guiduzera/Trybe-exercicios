import React from "react";

class Endereco extends React.Component {
    render() {
        const { value, handleState } = this.props;

        let error = undefined;
        if (value.length > 200) {
            error = "texto grande dmais!"
        };

        return (
            <label>
                digite seu Endereço:
                <input type="text" name="endereco" value={value} onChange={handleState} required></input>
                <span>{error ? error : ''}</span>
            </label>
        )
    }
}

export default Endereco;
