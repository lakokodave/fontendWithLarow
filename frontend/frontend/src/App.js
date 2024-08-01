import { useState } from "react";
import "./App.css";
import { getCake, setCake } from "./services";

function App() {
  const [color, setColor] = useState("");
  const [flavor, setFlavor] = useState("");
  const [size, setSize] = useState("");
  const [cakeDetails, setcakeDetails] = useState(null);

  const sendMessageToContract = async () => {
    await setCake(color, flavor, size);
  };

  const getMessageToContract = async () => {
    const cake = await getCake();
    setcakeDetails(cake);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>LakokoDave cloths</h1>
        <h3>
          <i>Order your LakokoDave cloths </i>
        </h3>
        <br />
        <div className="container">
          <input
            type="text"
            className="input"
            placeholder="cloths color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <input
            type="text"
            className="input"
            placeholder="cloths flavor"
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
          />
          <input
            type="text"
            className="input"
            placeholder="cloths size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <br /> <br />
        <button onClick={sendMessageToContract} className="button">
          Place your cloths Order
        </button>
        <button onClick={getMessageToContract} className="button">
          get your cake Order
        </button>
      </div>
      <div className="container">
        {cakeDetails === null ? (
          <div className="result">No Orders Yet</div>
        ) : (
          <div className="result">
            <ol>
              <li>cloths Color: {cakeDetails.color}</li>
              <li>cloths Flavor: {cakeDetails.flavor}</li>
              <li>cloths Size: {cakeDetails.size}</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;