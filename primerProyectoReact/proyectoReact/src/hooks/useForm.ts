import { ChangeEvent, useState } from "react"

interface IFormValues {
    [key:string]:string | number
}


export const useForm = <T extends IFormValues>(initialValues : T) => {
    const [values, setValues] = useState<T>(initialValues);

    const handleChangeForm= (event:ChangeEvent<HTMLInputElement>)=>{
        const {value, name} = event.target;
        
            setValues({...values, [`${name}`]:value});
    }

    const resetForm = () => {
        setValues(initialValues);
    }

    return {values, handleChangeForm, resetForm}
};