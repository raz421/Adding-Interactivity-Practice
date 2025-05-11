import { useState } from "react";

export default function ArtWork() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });
  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
      artwork: {
        ...person.artwork,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <>
      <form>
        <label>
          Name
          <input value={person.name} name="name" onChange={handleChange} />
        </label>
        <label>
          Title
          <input
            value={person.artwork.title}
            name="title"
            onChange={handleChange}
          />
        </label>
        <label>
          City
          <input
            value={person.artwork.city}
            name="city"
            onChange={handleChange}
          />
        </label>
        <label>
          Image
          <input
            value={person.artwork.image}
            name="image"
            onChange={handleChange}
          />
        </label>
      </form>
      <p>
        {person.artwork.title} by {person.name} (located in{" "}
        {person.artwork.city})
      </p>
      <img src={person.artwork.image} />
    </>
  );
}
