import "./App.css";
import { useState, useRef, useEffect} from "react";
import MostrarMensaje from "./MostrarMensaje";
import "./MostrarMensaje.css";

const randomNumber = () => Math.trunc(Math.random() * 20) + 1;
// let number = "";

function App() {
  const [score, setScore] = useState(20);
  const [number, setNumber] = useState("");
  const [highscore, setHighscore] = useState(0);
  const [secretNumber, setSecretNumber] = useState(randomNumber());
  const inputRef = useRef(null);

  const handleCheck = () => {
    setNumber(Number(inputRef.current.value));
  };

  const handleReset = () => {
    setScore(20);
    setNumber("");
    setSecretNumber(randomNumber());
    inputRef.current.value = "";
  };

    
  useEffect(() => {
      console.log(`El número secreto es ${secretNumber}`);
      console.log(`El número introducido es ${number}`);

      if (number === secretNumber) {
      // Mostrar mensaje de victoria (HECHO)
      // Mostrar número secreto (HECHO)
      // Cambiar color de fondo a verde
      // Si score es mayor que highscore, actualizar highscore
      if (score > highscore) {
        setHighscore(score);
      }
    } else if (score === 1) {
      // Mostrar mensaje de derrota
      // Cambiar color de fondo a rojo
      setScore(score - 1);
    } else if (number !== "") {
      // console.log(`Entra`);
      // Mostrar mensaje de es más o menos bajo (HECHO)
      // Disminuir el score
      setScore(score - 1);
    }
  }, [number]);

  let estado
  if (secretNumber === number) {
    estado = "win";
  } else if (score === 0) {
    estado = "lose";
  } else {
    estado = "playing";
  };

  return (
    <div className={estado}>
      {console.log(`Renderizando App`)}
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={handleReset}>Again!</button>
        <div className="number">{number === secretNumber ? number : "?"}</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <section className="right">
          <MostrarMensaje number={number} secretNumber={secretNumber} score={score} />
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
