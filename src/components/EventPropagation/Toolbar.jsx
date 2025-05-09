export function Button({ onSmash, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onSmash();
      }}
    >
      {children}
    </button>
  );
}
export default function ToolbarTwo() {
  return (
    <div
      onClick={() => {
        alert("i am from parent div");
      }}
    >
      <Button
        onSmash={() => {
          alert("Movie is playing");
        }}
      >
        Play the movie
      </Button>
      <Button
        onSmash={() => {
          alert("Image is uploading");
        }}
      >
        Upload Image
      </Button>
    </div>
  );
}
