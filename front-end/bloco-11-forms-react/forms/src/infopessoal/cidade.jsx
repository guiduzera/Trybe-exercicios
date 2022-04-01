import React from "react";

class Cidade extends React.Component {
    render() {
        const { value, handleState } = this.props;

        let error = undefined;
        if (value.length > 28) {
            error = "texto grande dmais!"
        };

        return (
            <label>
                digite sua Cidade:
                <input type="text" name="cidade" value={value} onChange={handleState} required></input>
                <span>{error ? error : ''}</span>
            </label>
        )
    }
}

export default Cidade
