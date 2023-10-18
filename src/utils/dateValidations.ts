import { isAfter, isBefore } from "date-fns"

export type ValidationErrorType = {
  error: boolean;
  msg: string;
}

export const validationResult = (isValid: boolean, msg?: string ): ValidationErrorType => ({
  error: !isValid,
  msg: msg || '',
})

export const isBeforeToday = (date: Date): ValidationErrorType => {
  const validation = isBefore(date, new Date());
  return validationResult(
    !validation,
    validation ? 'La fecha seleccionada no puede ser anterior o igual al día actual' : ''
  )
}

export const isAfterDate = (finalDate: Date, initialDate: Date): ValidationErrorType => {
  const validation = isAfter(finalDate, initialDate);
  return validationResult(
    validation, 
    !validation ? 'La fecha seleccionada no puede anterior a la fecha inicial' : ''
    )
}