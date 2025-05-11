import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
      <h1>The name value is: {name}</h1>
    </div>
  );
}
