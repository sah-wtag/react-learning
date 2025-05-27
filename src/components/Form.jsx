import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleSubmission(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <button onClick={(e) => handleSubmission(e)}>Add</button>
      </form>
      <h1>
        The name value is: {name.firstName} - {name.lastName}
      </h1>
    </div>
  );
}
