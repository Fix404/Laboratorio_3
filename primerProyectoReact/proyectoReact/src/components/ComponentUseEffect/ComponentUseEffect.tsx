import { useEffect, useState } from "react"

// useEffect suele usarse cuando se montan y desmontan componentes

export const ComponentUseEffect = () => {
    const [state, setState]=useState(false);
    useEffect(() => {
        console.log("Estoy prendido");
    }, [])

    useEffect(() => {
        console.log(state);
    }, [state])
  return (
    <div>
      <p>{state ? "Es true":"Es false"}</p>
      <button onClick={() => {
        setState(!state);
      }}>Switch</button>
    </div>
  )
}
