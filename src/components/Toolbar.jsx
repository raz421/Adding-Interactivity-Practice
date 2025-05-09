export function Button({ children, onSmash }) {
  return (
    <>
      <button onClick={onSmash}>{children}</button>
    </>
  );
}
export function PlayMovie({ moviename }) {
  const handleClick = () => {
    alert(`${moviename} is playing`);
  };
  return (
    <>
      <Button onSmash={handleClick}>Play The Movie</Button>
    </>
  );
}
const UploadImage = () => {
  return (
    <>
      <Button
        onSmash={() => {
          alert("Image uploadin");
        }}
      >
        Uplaod Image
      </Button>
    </>
  );
};

export default function Toolbar() {
  return (
    <>
      <PlayMovie moviename={"Thor"} />
      <UploadImage />
    </>
  );
}
