// ..
import { useState } from "react";

// ..
function ColorPicker() {
  const [color, setColor] = useState("lime");

  return (
    <div className="container">
      <h1 className="heading">Color Picker</h1>
      <div className="test-subject" style={{ backgroundColor: color }}>
        This is your selected color
      </div>
      <h3 className="sub-heading">Select your color</h3>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
    </div>
  );
}

export default function App() {
  return <ColorPicker />;
}
