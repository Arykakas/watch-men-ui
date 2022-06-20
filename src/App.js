import React, { useEffect } from "react";

const App = () => {
  // useEffect(() => {
  //   fetch("http://localhost:3001/test").then((res) => console.log(res));
  // }, []);
  return (
    <div>
      <video controls>
        <source
          src="http://localhost:3001/test.mkv"
          type="video/mkv"
        />
        {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
      </video>
    </div>
  );
};

export default App;
