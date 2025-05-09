export default function Button() {
  const handleClick = () => {
    alert("button Clicked");
  };
  return (
    <button
      onClick={() => {
        alert("button clicked");
      }}
    >
      click me
    </button>
  );
}
