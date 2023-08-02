import { Heading } from '@chakra-ui/react'


interface HeadingTitle {
  title: string;
}

export const OfferHeading = ({title}: HeadingTitle) => {
  return (
    <Heading
      color="green.500"
      fontSize="lg"
      mb="2"
    >{title}</Heading>
  )
}
