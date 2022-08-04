import { Container, Flex, FormControl, FormLabel, Heading, HStack, Input, Radio, RadioGroup, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Checkbox, Editable, EditablePreview, EditableInput, Button, NumberInput, NumberInputField } from '@chakra-ui/react';



export const Quoter = () => {
  return (
    <Container
        maxW="full"
        mx="0"
        p="6"
        bgColor="brand.green"> 
        <Heading
            mb="6"
            fontSize="2xl"
            color="white"
            >¿Quieres recibir una cotización en especial?</Heading>

        <Text
            color="white"
            fontSize="sm"
            mb="4"
            >Diligencia el siguiente formulario para recibir tu cotización en tu número celular o whatsapp</Text>

        <Tabs 
            variant="soft-rounded"
            colorScheme="green"
            size="sm"
            color="white"
            >
            <TabList>
                <Tab>Sólo vuelo</Tab>
                <Tab>Sólo hotel</Tab>
                <Tab>Paquetes (Vuelo + Hotel)</Tab>
            </TabList>

            <TabPanels>
                {/* Sólo vuelo */}
                <TabPanel>
                    <RadioGroup>
                        <Flex
                            direction="row"
                            mb="4">
                            <Radio 
                                mr="6"
                                colorScheme="green" 
                                size="sm"
                                value="1">
                                    <Text 
                                        fontWeight="bold"
                                        color="green.800">Ida y vuelta</Text>
                            </Radio>
                            <Radio 
                                mr="6"
                                colorScheme="green" 
                                size="sm"
                                value="2">
                                    <Text 
                                        fontWeight="bold"
                                        color="green.800">Sólo ida</Text>
                            </Radio>
                        </Flex>
                    </RadioGroup>
                    <Flex
                        direction="row">
                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel 
                                fontSize="sm"
                                fontWeight="bold">Origen</FormLabel>
                            <Select
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                placeholder="Ingrese la ciudad origen..."
                                >
                                <option value="Cali, Colombia">Cali</option>
                                <option value="Pereira, Colombia">Pereira</option>
                            </Select>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel
                                fontSize="sm"
                                fontWeight="bold">Fecha ida</FormLabel>
                            <Input 
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                type="date"/>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel
                                fontSize="sm"
                                fontWeight="bold">Destino</FormLabel>
                            <Select
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                placeholder="Ingrese la ciudad origen..."
                                >
                                <option value="Cali, Colombia">Cali</option>
                                <option value="Pereira, Colombia">Pereira</option>
                            </Select>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel
                                fontSize="sm"
                                fontWeight="bold">Fecha regreso</FormLabel>
                            <Input 
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                type="date"/>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel
                                fontSize="sm"
                                fontWeight="bold">Número personas</FormLabel>
                            <Input 
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                type="date"/>
                        </FormControl>
                    </Flex>
                </TabPanel>
                <TabPanel>
                    {/* Solo hotel */}
                    <Flex
                        direction="row">
                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel 
                                fontSize="sm"
                                fontWeight="bold">Origen</FormLabel>
                            <Select
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                placeholder="Ingrese la ciudad origen..."
                                >
                                <option value="Cali, Colombia">Cali</option>
                                <option value="Pereira, Colombia">Pereira</option>
                            </Select>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel
                                fontSize="sm"
                                fontWeight="bold">Fecha ida</FormLabel>
                            <Input 
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                type="date"/>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel
                                fontSize="sm"
                                fontWeight="bold">Destino</FormLabel>
                            <Select
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                placeholder="Ingrese la ciudad origen..."
                                >
                                <option value="Cali, Colombia">Cali</option>
                                <option value="Pereira, Colombia">Pereira</option>
                            </Select>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel
                                fontSize="sm"
                                fontWeight="bold">Fecha regreso</FormLabel>
                            <Input 
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                type="date"/>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel
                                fontSize="sm"
                                fontWeight="bold">Número personas</FormLabel>
                            <Input 
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                type="date"/>
                        </FormControl>
                    </Flex>
                </TabPanel>
                <TabPanel>
                {/* Paquete vuelo + hotel */}
                <Flex
                    direction="row">
                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel 
                                fontSize="sm"
                                fontWeight="bold">Origen</FormLabel>
                            <Select
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                placeholder="Ingrese la ciudad origen..."
                                >
                                <option value="Cali, Colombia">Cali</option>
                                <option value="Pereira, Colombia">Pereira</option>
                            </Select>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel
                                fontSize="sm"
                                fontWeight="bold">Fecha salida</FormLabel>
                            <Input 
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                type="date"/>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel 
                                fontSize="sm"
                                fontWeight="bold">Destino</FormLabel>
                            <Select
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                placeholder="Ingrese la ciudad origen..."
                                >
                                <option value="Cali, Colombia">Cali</option>
                                <option value="Pereira, Colombia">Pereira</option>
                            </Select>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel
                                fontSize="sm"
                                fontWeight="bold">Fecha regreso</FormLabel>
                            <Input 
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                type="date"/>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel 
                                fontSize="sm"
                                fontWeight="bold">Categoria hotel</FormLabel>
                            <Select
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                placeholder="Ingrese el tipo de hotel"
                                >
                                <option value="Cali, Colombia">1 estrella</option>
                                <option value="Pereira, Colombia">2 estrellas</option>
                            </Select>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel 
                                fontSize="sm"
                                fontWeight="bold">Número personas</FormLabel>
                            <Select
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                placeholder="..."
                                >
                                <option value="Cali, Colombia">Cali</option>
                                <option value="Pereira, Colombia">Pereira</option>
                            </Select>
                        </FormControl>

                        <FormControl 
                            mr="4"
                            mb="4">
                            <FormLabel 
                                fontSize="sm"
                                fontWeight="bold">Número habitaciones</FormLabel>
                            <Select
                                size="sm"
                                bgColor="white"
                                color="blackAlpha.700"
                                placeholder="Ingrese la ciudad origen..."
                                >
                                <option value="Cali, Colombia">Cali</option>
                                <option value="Pereira, Colombia">Pereira</option>
                            </Select>
                        </FormControl>
                    </Flex>    
                </TabPanel>
            </TabPanels>
        </Tabs>

        {/* Subscribe whatsapp */}

        <HStack
          mb="3">
          <Checkbox
            fontSize="sm"
            colorScheme="white"
            size="md"/>
            <Text
              fontSize="sm"
              color="white"
              >Recibe nuestras ofertas por Whatsapp</Text>
        </HStack>
        
        <Flex
          flexDirection="row"
          mb="5"
          bgColor="white"
          borderRadius="base"
          p="1"
          >
          <Select 
            size="sm"
            bg="white"
            placeholder="+57">
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
          </Select>
          
          <NumberInput
            size="sm"
            >
            <NumberInputField
              bgColor="white"
              />
          </NumberInput>

          <Button
            size="sm"
            >Enviar</Button>
        </Flex>

        
        <HStack>
          <Checkbox
            fontSize="sm"
            colorScheme="white"
            size="md"/>
            <Text
              fontSize="sm"
              color="white"
              >Recibe nuestras ofertas por Correo</Text>
        </HStack>

        {/* Subscribe email */}
        <Flex
          flexDirection="row"
          mb="5"
          bgColor="white"
          borderRadius="base"
          p="1"
          >
          <Editable
            size="sm"
            >
            <EditablePreview />
            <EditableInput />
          </Editable>

          <Button
            size="sm"
            >Enviar</Button>
        </Flex>
    </Container>
  )
}
