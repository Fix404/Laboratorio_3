import { useForm } from "../../hooks/useForm";

export const FormComponent = () => {
    const {values, handleChangeForm, resetForm} = useForm({email:'',
        name:'',
        age:0,
    });

    const {email, name, age}=values;

    const handleSubmitForm = () => {
        console.log(values);
    }

    const handleResetForm= () => {
        resetForm();
    }


  return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <div style={{display:"flex", flexDirection:"column", gap:"2vh"}}>
        <input name="email" value={email} onChange={handleChangeForm} type="email" placeholder="example@example.com"/>
        <input name="name" value={name}onChange={handleChangeForm} type="text" placeholder="Nombre" />
        <input name="age" value={age}onChange={handleChangeForm} type="number" placeholder="Edad" />
      </div>
      <div>
        <button onClick={handleSubmitForm}>Enviar</button>
        <button onClick={handleResetForm}>Restaurar valores</button>
      </div>
    </div>
  )
}
