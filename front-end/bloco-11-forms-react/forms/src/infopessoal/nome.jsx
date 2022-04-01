import React from "react";

class Info extends React.Component {
    render() {
        const { value, handleState } = this.props;
        
        let error = undefined;
        if (value.length > 40) {
            error = "texto grande dmais!"
        };
        
        return (
            <label>
                digite seu Nome:
                <input type="text" name="nome" value={value} onChange={handleState} required></input>
                <span>{error ? error : ''}</span>
            </label>
        )
    }
}

export default Info
