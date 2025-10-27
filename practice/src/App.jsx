// ..
import { useState } from "react";

// ..
function UpdateObjectInState() {
  const [foods, setFoods] = useState([
    "Apples",
    "Oranges",
    "Banana",
    "Pineapple ",
  ]);
  const handleAdd = () => {
    const currentFood = document.getElementById("currentFood").value;
    document.getElementById("currentFood").value = "";
    setFoods([...foods, currentFood]);
  };
  const handleRemove = (index) => {
  const newArray = foods.filter((_, i)=>i!=index)
    setFoods(newArray);
  };
  return (
    <div>
      <h1>Foods in Refrigerator to eat</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={()=>handleRemove(index)}>{food}</li>
        ))}
      </ul>
      <input id="currentFood" type="text" placeholder="place in Refrigerator" />
      <button onClick={handleAdd}>Add food</button>
    </div>
  );
}

export default function App() {
  return <UpdateObjectInState />;
}
