import React from "react";
import Playback from "./playback/Playback";

const App = () => {
  // useEffect(() => {
  //   fetch("http://localhost:3001/test").then((res) => console.log(res));
  // }, []);
  return (
    <div>
      <Playback></Playback>
    </div>
  );
};

export default App;
