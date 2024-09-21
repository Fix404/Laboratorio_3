import { useState } from "react"

export const ComponentCounter = () => {
  const [counter, setCounter]= useState<number>(0);
  const increaseCounter= () => {
    setCounter((prev) => prev+1);
  }

  const decreaseCounter= () => {
    setCounter((prev) => prev-1);
  }
  return (
    <div>
      <h2>Valor del contador: {counter}</h2>
      <button onClick={increaseCounter}>Incrementar</button>
      <button onClick={decreaseCounter}>Reducir</button>
    </div>
  )
}
