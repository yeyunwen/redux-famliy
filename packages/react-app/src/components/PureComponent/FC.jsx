import { useState } from "react";

function FC() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log(FC.name, "handleClick");
    setCount(0);
  };
  console.log(FC.name, "render");
  return (
    <div>
      <h1>FC</h1>
      <div>count: {count}</div>
      <button onClick={handleClick}>no change</button>
    </div>
  );
}

export default FC;
