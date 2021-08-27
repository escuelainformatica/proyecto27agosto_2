import React from "react";



const valores=['uno','dos','tres'];

// map es una funcion que se usa para listados
// map (sirve para convertir los datos)

const listItems = valores.map((filas) =>
    <li>{filas}</li>
);
//  <li>uno</li>
//  <li>dos</li>
//  <li>tres</li>

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default ShoppingList
