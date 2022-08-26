import { useState } from "react";


export const useForm = <T extends Object>(initialState: T) => {

    const [formValues, setFormValues] = useState(initialState);

    const handleFormChange = (name: keyof T, value: string) => {
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
        reset
    }
}