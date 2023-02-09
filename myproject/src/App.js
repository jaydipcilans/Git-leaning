import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decNumber, incNumber } from "./actions";

function App() {
  const StateCounter = useSelector((state) => state.NumberCounter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <button className="btn" onClick={() => dispatch(decNumber())}>
            -
          </button>
          <input className="input_count" type="text" value={StateCounter} />
          <button className="btn" onClick={() => dispatch(incNumber(5))}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
