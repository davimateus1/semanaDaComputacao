import { useEffect, useState } from "react";
import Eye1 from "./assets/img/Eye1.png";
import Eye2 from "./assets/img/Eye2.png";

function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  function increment() {
    setCount(count + 1);
  }

  function showPass() {
    setVisible(!visible);
  }

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  }, [count]);

  // IF EM BLOCO
  // function showEye() {
  //   if (visible) {
  //     return <img src={Eye1} alt="Eye" width="20%" />;
  //   } else {
  //     return <img src={Eye2} alt="Eye" width="20%" />;
  //   }
  // }

  // IF COM OPERADOR &&
  // {visible &&  <img src={Eye2} alt="Eye2" width="20%" />}

  return (
    <div>
      <button onClick={increment}>Incremento</button>
      <h1>Você clicou {count} vezes</h1>
      <hr />
      <input type={visible ? "text" : "password"} />

      {/* IF TERNÁRIO COM ? E :  */}
      <button onClick={showPass}>
        {visible ? (
          <img src={Eye1} alt="Eye" width="20%" />
        ) : (
          <img src={Eye2} alt="Eye2" width="20%" />
        )}
      </button>
    </div>
  );
}

export default App;
