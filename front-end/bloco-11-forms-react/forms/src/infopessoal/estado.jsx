import React from "react";

class Estado extends React.Component {
    render() {
        const { value, handleState } = this.props;
        return (
            <label>
                digite seu Estado:
                <input type="text" name="estado" value={value} onChange={handleState} required></input>
            </label>
        )
    }
}

export default Estado
