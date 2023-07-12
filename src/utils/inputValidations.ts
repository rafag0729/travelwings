import { ErrorType } from "interfaces";



export const formValidations = (name: any, value: string = ''): ErrorType => {
  let validation: ErrorType = {
    error: true,
    msg: '',
  }

  switch (name) {
    case "email":
      validation = validateEmail(value);
      return validation;

    case 'tel':
      validation = validateTel(value);
      return validation;
  }

  return validation;
}

const validateEmail = (email: string): ErrorType => {
  const regexEmail = new RegExp('^[A-Za-z0-9,._+-=*$°%!~&;|:]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}');
  if(!regexEmail.test(email)) return {error: true, msg: 'Ingresa un correo válido'};
  return {
      error: false,
      msg: ''
  }
}

const validateTel = (number: string): ErrorType => {
  const regexNumbers = new RegExp('^[0-9]*$');/* For checking only numbers */
  if(!regexNumbers.test(number)) return {error: true, msg: 'El número sólo debe contener números'};
  if(number.length !== 10 ) return {error: true, msg: 'El número debe contener 10 digitos'};
  return {
      error: false,
      msg: ''
  }
}