import React from "react";


const clientes=[
    {id:1,nombre:"john"},
    {id:2,nombre:"anna"},
];

class ComponenteTabla extends React.Component {
    render() {
        let mostrarclientes=clientes.map((cliente) =>
            <tr>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
            </tr>
        );

        // JSX
        return <table border="1">
            {mostrarclientes}
        </table>
    }
}

export default ComponenteTabla;

