import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [addCount, setAddCount] = useState(0);
  const [addmessage, setAddmessage] = useState(false);
  const [removeCount, setRemoveCount] = useState(5);
  const [removemessage, setRemovemessage] = useState(false);

  const addHandler = () => {
    if (addCount !== 20) {
      setAddCount(addCount + 1);
    } else setAddmessage(true);
  };

  const removeHandler = () => {
    if (removeCount === 0) setRemovemessage(true);
    else {
      setRemoveCount(removeCount - 1);
    }
  };

  return (
    <>
      <h1>Counter Calculator</h1>
      <div>
        <button onClick={addHandler}>Add value</button>
        <h3>counter : {addCount}</h3>
        {addmessage && <p>you can not exceed by 20 count</p>}
      </div>
      <div>
        <button onClick={removeHandler}>Remove value</button>
        <h3>counter : {removeCount}</h3>
        {removemessage && <p>you can not decrease by 0 count</p>}
      </div>
    </>
  );
}

export default App;
