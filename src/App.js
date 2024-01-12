import "./App.css";
import { connect } from "react-redux";
import { incAction, decAction, resetAction } from "./bankomatActions";
import { useState } from "react";

function App({ podaci, uplata, isplata, resetiraj }) {
  const [num, setNum] = useState(0);

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const handleBy = () => {
    isplata(num);
  };
  return (
    <div>
      <p>Pocetno stanje place: {podaci.money}</p>
      <button onClick={uplata}>Uplata</button>
      <input value={num} type={"number"} onChange={handleChange}></input>
      <button onClick={handleBy}>Isplata</button>
      <button onClick={resetiraj}>Ponisti</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    podaci: state,
  };
}

const mapDispatchToProps = {
  uplata: () => incAction(),
  isplata: (num) => decAction(num),
  resetiraj: () => resetAction(),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//bankomat store
// defaultno stanje racuna: 10000
// btn UPLATI PLACU -> +2000
// btn ISPLATI -> - vrijednost upisana u input
