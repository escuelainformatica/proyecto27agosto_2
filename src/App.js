import ComponenteBoton from "./ComponenteBoton";
import ShoppingList from "./ShoppingList";
import ComponenteTabla from "./ComponenteTabla";

function App() {
  return (
      <div>
      <h1>hola</h1>
        <ComponenteBoton nombre="boton insertar"/>
          <ComponenteBoton nombre="boton editar"/>
          <ShoppingList name="nombre" />
          <ComponenteTabla/>
      </div>
  );
}

export default App;
