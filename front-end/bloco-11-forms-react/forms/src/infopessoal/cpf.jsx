import React from "react";

class Cpf extends React.Component {
    render() {
        const { value, handleState } = this.props;

        let error = undefined;
        if (value.length > 11) {
            error = "texto grande dmais!"
        };

        return (
            <label>
                digite seu CPF:
                <input type="text" name="CPF" value={value} onChange={handleState} required></input>
                <span>{error ? error : ''}</span>
            </label>
        );
    }
}

export default Cpf;
