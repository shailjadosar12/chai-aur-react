import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="m-3">
        <Card username="kanak" btntxt="about me"></Card>
        <Card username="shailja" btntxt="view me"></Card>
        <Card username="shrishti" btntxt="view profile"></Card>
      </div>
    </>
  );
}

export default App;
