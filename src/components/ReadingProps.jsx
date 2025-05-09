export function AlertButton({ children, message }) {
  const handleClick = () => {
    alert(message);
  };
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}
export default function ReadingProps() {
  return (
    <div>
      <AlertButton message={"move is played"}>Play movie</AlertButton>
      <AlertButton message={"Image uploading"}>Upload image</AlertButton>
    </div>
  );
}
