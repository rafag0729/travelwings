import { useState } from "react";
import { Error } from "interfaces";
import { formValidations } from "utils";


export const useForm = <T extends Object>(initialState: T) => {

    const [formValues, setFormValues] = useState(initialState);
    const [error, setError] = useState<Error>({error: false, msg: ''})

    const handleFormChange = (name: keyof T, value: string) => {
        const validation = formValidations(name, value);
        setError(validation);
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const reset = () => {
        setFormValues(initialState)
    }

    return {
        ...formValues,
        formValues,
        setFormValues,
        handleFormChange,
        reset, 
        error,
    }
}