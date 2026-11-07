/* 
  Declarative programming is 
*/

import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <button
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      {toggle ? <div>ON</div> : <div>OFF</div>}
    </button>
  );
}

export default App;
