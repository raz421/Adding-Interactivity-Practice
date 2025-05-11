import { useState } from "react";
import { sculptureList } from "../Utills/data";
export default function Gallery() {
  let [value, setValue] = useState(0);
  let [show, setShow] = useState(false);
  let sculptures = sculptureList[value];
  const handleClick = () => {
    if (value == sculptureList.lenght) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
  };
  const handleDetails = () => {
    setShow(!show);
  };
  return (
    <>
      <button onClick={handleClick}>next</button>
      <h1>
        {sculptures.name} by {sculptures.artist}
      </h1>
      <p>
        ({value + 1} of {sculptureList.length})
      </p>
      <button onClick={handleDetails}>
        {show ? "hide details" : "show details"}
      </button>
      {show && <p>{sculptures.description}</p>}
      <img src={sculptures.url} alt={sculptures.alt} />
    </>
  );
}
