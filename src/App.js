import { useState, useEffect } from "react";

/**
 * Component
 * - JSX를 호출하는 함수
 */
function Hello() {
  function destroyedFn() {
    console.log("Destroyed :(");
  }
  function effectFn() {
    console.log("Created :)");
    return destroyedFn;
  }
  useEffect(effectFn, []);
  /**
   * 처음 한번만 불러옴
   * - console.log("Created :)")
   * return () =>
   * - Component가 Destroy 될때 실행되는 function
   */
  // useEffect(() => {
  //   console.log("Created :)");
  //   return () => console.log("Destroyed :(");
  // }, []);

  return <h3>Hello</h3>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((current) => !current);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
