import { useState } from "react";
export default function Sculptor() {
  let nextId = 0;

  const [message, setMessage] = useState("");
  const [lists, setList] = useState([]);
  const handleList = () => {
    setList([...lists, { nextId: nextId++, name: message }]);
    setMessage("");
  };
  return (
    <div>
      <h1>Inspiring Scluptor</h1>
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={handleList}>Add</button>
      {lists.map((list) => (
        <li key={list.nextId}>{list.name}</li>
      ))}
    </div>
  );
}
