import "./Contador.js";

export default function Header(props) {
  console.log(
    `Las propiedades del componente header son; ${JSON.stringify(props)}`
  );

  return <h1 className="titulo">{props.titulo}</h1>;
}
