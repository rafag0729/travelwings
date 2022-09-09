import { FormControl, FormLabel, Textarea } from "@chakra-ui/react"
import { useForm } from 'hooks';



interface Props {
  label: string;
}

export const GetObservations = ({label}: Props) => {

  const { observation, handleFormChange } = useForm({observation: ''})

  return (
    <FormControl mx="2">
      <FormLabel
        fontSize="sm"
        fontWeight="bold"
        >{label}</FormLabel>

      <Textarea
        bgColor="white"
        borderRadius="none"
        color="gray.700"
        size="sm"
        placeholder="Escribenos cualquier dato adicional que consideres importante para la realización de tu viaje"
        value={ observation }
        onChange={ (e) => handleFormChange('observation', e.target.value) }
        name="observation"
      />
    </FormControl>
  )
}
