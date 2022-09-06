import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react"



interface Props {
  label: string;
}

export const GetDate = ({ label }: Props) => {
  return (
    <Box 
      flex="2 1 200px"
      mx="2"
    >
      <FormControl>
        <FormLabel
          fontSize="sm"
          fontWeight="bold">{ label }</FormLabel>
        <Input
          borderRadius="md"
          size="sm"
          bgColor="white"
          color="blackAlpha.700"
          type="date"/>
      </FormControl>
    </Box>
  )
}
