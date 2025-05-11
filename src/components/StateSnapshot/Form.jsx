import { useState } from "react";

export default function Form() {
  let [isSent, setIssent] = useState(false);
  let [message, setMessage] = useState("hi");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIssent(true);
  };
  if (isSent) {
    return <h1>{message}</h1>;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button>sent</button>
      </form>
    </>
  );
}
