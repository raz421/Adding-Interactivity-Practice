export default function Form() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.dir(e);
        console.log("event is calling from form");
      }}
    >
      <input />
      <button>click me</button>
    </form>
  );
}
