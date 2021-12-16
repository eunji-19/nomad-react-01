import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

/**
 * npm i react-router-dom@5.3.0
 * react-router-dom 버전5->버전6 달라진 점
 * : Switch컴포넌트가 사라지고 -> Routes컴포넌트로 대체
 * : Route컴포넌트 사이에 자식 컴포넌트를 넣지 않고 -> element prop에 자식 컴포넌트를 할당
 * https://velog.io/@kcdoggo/Switch-is-not-exported-from-react-router-dom-%EC%97%90%EB%9F%AC
 * 
  function App() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
