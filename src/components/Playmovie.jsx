export default function PlayMovie({ movie }) {
  const handleClick = () => {
    console.log(`${movie} is playing`);
  };
  return (
    <>
      <button onClick={handleClick}>play movie</button>
    </>
  );
}
