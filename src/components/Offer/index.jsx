import { Box, Container, Image, Text, Flex } from "@chakra-ui/react";
import waveImg from "../../assets/waves.svg";
import warrantyImg from "../../assets/garantia.png";
import bandeiras from '../../assets/bandeiras.png'
import {Button} from '../Button'

export function Offer() {
  return (
    <>
      <Image src={waveImg} />
      <Box bg="main" color="white" pb={50}>
        <Container w="100%" maxW={1120}>
          <Flex direction="column" align="center" pt={20} justify={"center"}>
            <Flex
              bg="white"
              borderRadius="5px"
              align="center"
              justify="center"
              direction="column"
              gap="1rem"
              p={10}
              color="main"

            >
              <Text align="center" textDecoration="line-through" fontSize="2xl">De R$197,00</Text>
              <Text align="center" fontSize="3xl" fontWeight="bold">
                 <span style={{fontSize:80}}>12x R$9,74</span> 
              </Text>
              <Text align="center" fontSize="2xl">Ou R$97,00 à vista</Text>
              <Image src={bandeiras} w={300} /> 
              <Button
               hover={{
                background: 'transparent',
                outline: '2px solid #1D2021',
                color:'main',}} 

               
               bg="main">Compra ai meu</Button>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            align="center"
            gap={10}

          >
              <Image src={warrantyImg} w={200} pt={20}/>
              <Text fontSize="2xl">Crie seu notion, coloque todos os templates que serão disponibilizados após a compra, personalize do seu jeito, ajuste para a sua vida, toque as fotos, os nomes, os objetivos, metas e hábitos e se você não gostar… se for inútil para a sua vida, você poderá pedir reembolso dentro dessa garantia.</Text>

              <Text fontSize="2xl" pb={20}>
              Se você gostar, for útil para a sua vida, te ajudar em algo e você pedir reembolso, vai da sua consciência!
              Espero que você faça bom uso, seja útil para você e te auxilie à construir novos hábitos, realizar sonhos e alcançar seus objetivos. Abração!

              </Text >
             
          </Flex>
          
        </Container>
      </Box>
    </>
  );
}
