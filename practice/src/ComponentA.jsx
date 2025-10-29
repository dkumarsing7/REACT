import { createContext } from "react";
import ComponentB from "./ComponentB.jsx";
export const UserContext = createContext();

export default function ComponentA() {
    const user = 'deepak';
  return (
    <div className="box"> <h1>Hello {user}</h1>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}
