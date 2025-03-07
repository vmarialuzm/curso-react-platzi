const StaticComponent = () => {
    // Definimos nuestros datos estáticos como un array
    const items = ["manzana", "banana", "cereza"];
  
    return (
      <ul>
        {/* Utilizamos map para iterar sobre cada elemento del array */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  
export default StaticComponent;