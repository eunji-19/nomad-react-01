import { useState, useEffect } from "react";

function App() {
  /**
   * state가 변화할때마다 모든 Component 재실행
   * API 호출시에는 한번만 실행되어야 함
   *
   * useEffect(effect, deps)
   * - 우리 코드가 딱 한번만 실행될 수 있도록 보호해줌 (State 변화해도)
   * - effect(첫번째 인자): 딱 한번만 실행하고 싶은 코드
   * - deps(두번째 인자) : [] 빈 배열
   */
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((current) => current + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("I run all the time");
  /**
   * []
   * : React 지켜볼게 없으니까 처음 한번만 실행됨
   */
  useEffect(() => {
    console.log("I run only once");
  }, []);
  /**
   * [keyword]
   * : keyword가 변화할때 코드 한번 실행하게 함
   * : keyword 변화할때 코드 실행하라고 알려줌
   */
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword' and 'counter' changes");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here"
      />
      <h3>{counter}</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
