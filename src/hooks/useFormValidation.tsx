import { useState } from "react";
import { formValidations } from "utils";

export const useFormValidation = <T extends Object>(initialForm: T) => {
  
  const [formErrors, setFormErrors] = useState<any>(() => {
    const keys = Object.keys(initialForm);
    let result = {};
    keys.forEach((k) => {
      result = {
        ...result,
        [k]: {
          error: false,
          msg: '',
        }
      }
    })
    return result;
  });

  const handleFormValidation = (name: keyof T, value: string) => {
    let errorsValidated = formErrors;
    const validation = formValidations(name, value);
    errorsValidated = {
      ...errorsValidated,
      [name]: validation,
    }
    setFormErrors(errorsValidated);
  }

  return {
    formErrors,
    handleFormValidation,
  }
}