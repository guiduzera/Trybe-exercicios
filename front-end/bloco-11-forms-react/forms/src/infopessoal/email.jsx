import React from "react";

class Email extends React.Component {
    render() {
        const { value, handleState } = this.props;

        let error = undefined;
        if (value.length > 50) {
            error = "texto grande dmais!"
        };

        return (
            <label>
                digite seu Email:
                <input type="text" name="email" value={value} onChange={handleState} required></input>
                <span>{error ? error : ''}</span>
            </label>
        );
    }
}

export default Email;
