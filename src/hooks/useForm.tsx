import { useState } from "react";
import { useFormValidation } from "./useFormValidation";

export const useForm = <T extends Object>(initialState: T) => {

  const {formErrors, handleFormValidation} = useFormValidation(initialState);

  const [formValues, setFormValues] = useState(initialState);

  const handleFormChange = (name: keyof T, value: string) => {
    handleFormValidation(name, value);
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
      formErrors,
  }
}