// ...

import { useState } from "react";

// ...

function ChangeArrayObject() {
  const [cars, setCars] = useState([
    { name: "BMW", model: 2025, color: "Margenda" },
    { name: "Mercedes", model: 2021, color: "venta Black" },
    { name: "Royces Royal", model: 2023, color: "light-white" },
  ]);

  const [name, setName] = useState("");
  const [model, setModel] = useState(new Date().getFullYear());
  const [color, setColor] = useState("");


const handleAdd=()=>{
    const newCar = { name:name, model:model, color:color};
    setCars([...cars, newCar]);
    setName("");
    setModel(new Date().getFullYear());
    setColor("");
}
  return (
    <>
      <div>
        <h1>My favourite CARS list </h1>
        <ul>
          {cars.map((car, index) => (
            <li key={index}>
              {car.name} {car.model} {car.color}
            </li>
          ))}
        </ul>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="car name" />
        <br />
        <input type="number" value={model} onChange={(e)=>setModel(e.target.value)} placeholder="model name"/>
        <br />
        <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="car color" />
        <br />
        <button onClick={handleAdd}>Add to List</button>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <ChangeArrayObject />
    </>
  );
}
