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

    
    useEffect(() => {
      console.log(`El número secreto es ${secretNumber}`);
      console.log(`El número introducido es ${number}`);

      if (number === secretNumber) {
      // Mostrar mensaje de victoria (HECHO)
      // Mostrar número secreto (HECHO)
      // Cambiar color de fondo a verde
      // Si score es mayor que highscore, actualizar highscore
    } else if (score === 1) {
      // Mostrar mensaje de derrota
      // Cambiar color de fondo a rojo
      setScore(score - 1);
    } else {
      // Mostrar mensaje de es más o menos bajo (HECHO)
      // Disminuir el score
      setScore(score - 1);
    }
  }, [number]);

  return (
    <div>
      {console.log(`Renderizando App`)};
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
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
          <MostrarMensaje number={number} secretNumber={secretNumber} />
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
