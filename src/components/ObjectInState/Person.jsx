import { useState } from "react";

export default function Person() {
  const [name, setName] = useState({
    firstName: "Golam Haider",
    lastName: "Meharaz",
    email: "maharazbhuiyan3@gmail.com",
  });
  const handleName = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form action="">
        <label htmlFor="">
          FirstName :
          <input
            name="firstName"
            value={name.firstName}
            onChange={handleName}
          />
        </label>
        <label htmlFor="">
          LastName :
          <input name="lastName" value={name.lastName} onChange={handleName} />
        </label>
        <label htmlFor="">
          Email :
          <input name="email" value={name.email} onChange={handleName} />
        </label>
      </form>
      <p>
        {name.firstName} {name.lastName} ({name.email})
      </p>
    </>
  );
}
