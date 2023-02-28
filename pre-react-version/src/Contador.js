import { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(5);

  // Convertimos una variable en función:
  const aumentarContador = () => {
    setCount(count + 1);
  };

  const disminuirContador = () => {
    setCount(count - 1);
  };

  console.log(count);

  return (
    <div>
      <p>Contador</p>
      <button onClick={aumentarContador}>Incrementar</button>
      <button onClick={disminuirContador}>Disminuir</button>
      <p>Estado actual del contador: {count}</p>
    </div>
  );
}
