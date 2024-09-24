// Siempre la App devuelve un solo elemento (un div, un p, etc).

import { Appproduct } from "./components/AppProduct/Appproduct"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { ComponentCounter } from "./components/MyComponentCounter/ComponentCounter"
import { PrimerComponente } from "./components/MyFirstComponent/PrimerComponente"

export const App = () => {
    {/*const [enableCounter, setEnableCounter]=useState(false);*/}

    return (
        <div style={{display:'flex', flexDirection:'column', gap:'2vh'}}>
            {/* <PrimerComponente text={"Hola Mundo de nuevo"} color="green" fontSize={1.5}/>
            <ComponentCounter />
            <ComponentUseEffect /> */}
            {/* <FormComponent /> */}

            {/* {enableCounter && <ComponentCounter />}
            <button onClick={() =>{
                setEnableCounter(!enableCounter);
            }}>Mostrar u ocultar contador</button> */}
            <Appproduct/>
        </div>
    )
}
