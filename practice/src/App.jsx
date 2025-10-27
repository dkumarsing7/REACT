// ..
import { useState } from "react";

// ..
function OnChangeEvents() {
  const [name, setName] = useState("name");
  const [msg, setMsg] = useState("msg");
  const [gender, setGender] = useState("");
  const [choice, setChoice] = useState("");

  return (
    <div>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <p>Name : {name}</p>
      <textarea name="msg" onChange={(event) => setMsg(event.target.value)} />
      <p>msg : {msg}</p>
      <select name="Gender" onChange={(e) => setGender(e.target.value)}>
        <option value="">Select your Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <p>Gender : {gender}</p>
      <label>
        <input
          type="radio"
          value="Washing Machine"
          checked={choice === "Washing Machine"}
          onChange={(e) => setChoice(e.target.value)}
        />
        Washing Machine
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Mixer Grinder"
          checked={choice === "Mixer Grinder"}
          onChange={(e) => setChoice(e.target.value)}
        />
        Mixer Grinder
      </label>

      <p>status : {choice}</p> 
    </div>
  );
}

export default function App() {
  return <OnChangeEvents />;
}
