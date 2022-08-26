import { Error } from "interfaces";



export const formValidations = (name: any, value: string = ''): Error => {

    let validation = {
        error: false,
        msg: '',
    }

    switch (name) {
        case "email":
            validation = validateEmail(value);
            break;
    }

    return validation;
}

const validateEmail = (email: string): Error => {
    const regexEmail = new RegExp('^[A-Za-z0-9,._+-=*$°%!~&;|:]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}');
    if(!regexEmail.test(email)) return {error: true, msg: 'Ingresa un correo válido'};
    return {
        error: false,
        msg: ''
    }
}
