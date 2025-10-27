// ..
import { useState } from "react";

// ..
function UpdateObjectInState() {
  const [car, setCar] = useState({
    name: "BMW",
    model: 2025,
    seater: 3,
  });
const handleName=(e)=>{
  setCar((car) => ({ ...car, name: e.target.value }))
}
const handleModel=(e)=>{
  setCar((car) => ({ ...car, model: e.target.value }))
}
const handleSeater=(e)=>{
  setCar((car) => ({ ...car, seater: e.target.value }))
}
  return (
    <div>
      <p>
        My favourite car is : {car.name} {car.model} {car.seater} seater{" "}
      </p>
      <input
        onChange={(e) =>handleName(e) }
        type="text"
        value={car.name}
      />
      <br />
      <input
        onChange={(e) => handleModel(e)}
        type="number"
        value={car.model}
      />
      <br />
      <input
        onChange={(e) => handleSeater(e)}
        type="number"
        value={car.seater}
      />
    </div>
  );
}

export default function App() {
  return <UpdateObjectInState />;
}
