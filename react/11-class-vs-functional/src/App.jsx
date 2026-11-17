import { useState, useCallback } from "react";
import { TimerFunc } from "./components/TimerFunc";
// import { TimerClass } from "./components/TimerClass";

// USING FUNCTIONAL COMPONENT

export function App() {
  const [duration, setDuration] = useState(0);
  const [label, setLabel] = useState("Default");

  const handleClick5Seconds = useCallback(() => {
    setDuration(5000);
  }, []);

  const handleClick10Seconds = useCallback(() => {
    setDuration(10000);
  }, []);

  const handleClickCook = useCallback(() => {
    setLabel("Cook");
  }, []);

  const handleClickSleep = useCallback(() => {
    setLabel("Sleep");
  }, []);

  return (
    <>
      <TimerFunc label={label} duration={duration} />

      <div>
        <button onClick={handleClick5Seconds}>5 seconds</button>
        <button onClick={handleClick10Seconds}>10 seconds</button>
      </div>

      <div>
        <button onClick={handleClickCook}>Cook</button>
        <button onClick={handleClickSleep}>Sleep</button>
      </div>
    </>
  );
}

// USING CLASS COMPONENT

// export class App extends React.Component {
//   state = {
//     duration: 0,
//     label: "default",
//   };

//   handleClick5Seconds = () => {
//     this.setState({ duration: 5000 });
//   };

//   handleClick10Seconds = () => {
//     this.setState({ duration: 10000 });
//   };

//   handleClickCook = () => {
//     this.setState({ label: "Cook" });
//   };

//   handleClickSleep = () => {
//     this.setState({ label: "Sleep" });
//   };

//   render() {
//     return (
//       <>
//         {/* <TimerClass label="Cooking" duration={5000} /> */}

//         <TimerFunc label={this.state.label} duration={this.state.duration} />

//         <div>
//           <button onClick={this.handleClick5Seconds}>5 seconds</button>
//           <button onClick={this.handleClick10Seconds}>10 seconds</button>
//         </div>

//         <div>
//           <button onClick={this.handleClickCook}>Cook</button>
//           <button onClick={this.handleClickSleep}>Sleep</button>
//         </div>
//       </>
//     );
//   }
// }
