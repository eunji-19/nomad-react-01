import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    /**
     * toDos 배열에 추가하는 법
     * - currentArray = toDos
     */
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  return (
    <div>
      <h3>My ToDo {toDos.length}</h3>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your To Do"
        />
        <button
          style={{
            color: "white",
            fontWeight: "bold",
            backgroundColor: "#f0a500",
            border: "none",
            borderRadius: "10px",
            padding: "10px 10px",
          }}
        >
          Add ToDo
        </button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
