import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function List() {
  const [artists, setArtist] = useState(initialArtists);
  const handleDelete = (artist) => {
    setArtist(artists.filter((a) => a.id != artist.id));
  };
  return (
    <ul>
      {artists.map((artist) => (
        <li key={artist.id}>
          {artist.name}{" "}
          <button
            onClick={() => {
              handleDelete(artist);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
