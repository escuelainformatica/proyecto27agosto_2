import React from "react";

class ComponenteBoton extends React.Component {
    render() {
        return <input type="button" value={this.props.nombre} onClick={this.clickboton} />
    }
    clickboton() {
        alert("hola");
        return false;
    }
}
export default ComponenteBoton