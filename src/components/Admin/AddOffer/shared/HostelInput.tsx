import { BaseInputText } from './BaseInputText'
import { CalendarInput } from './CalendarInput'

export const HostelInput = () => {
  return (
    <>
      <BaseInputText />
      <CalendarInput 
        type='inicio' 
        getValue={() => {}}
        />
      <CalendarInput 
        type='salida' 
        getValue={() => {}}
        />
    </>
  )
}
