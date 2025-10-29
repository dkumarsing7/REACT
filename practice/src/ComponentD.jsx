import { useContext } from "react"
import { UserContext } from "./ComponentA"

export default function ComponentD() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1 >Hello {user}</h1>
    </div>
  )
}
