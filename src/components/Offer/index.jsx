import { Box, Container, Image, Text, Flex, Divider } from "@chakra-ui/react";
import waveImg from "../../assets/waves.svg";
import warrantyImg from "../../assets/garantia.png";
import bandeiras from "../../assets/bandeiras.png";
import { Button } from "../Button";

export function Offer() {
  return (
    <>
      <Divider horizontal borderColor={"white"} pt={10} />
      <Box bg="main" color="white" pb={50}>
        <Image src={waveImg} />

        <Container w="100%" maxW={1120}>
          <Flex direction="column" align="center" gap={10}>
            <Image src={warrantyImg} w={200} pt={20} />
            <Text fontSize={{ base: "lg", lg: "2xl" }}>
              Crie seu notion, coloque todos os templates que serão
              disponibilizados após a compra, personalize do seu jeito, ajuste
              para a sua vida, troque as fotos, os nomes, os objetivos, metas e
              hábitos e se você não gostar… se for inútil para a sua vida, você
              poderá pedir reembolso dentro dessa garantia.
            </Text>

            <Text fontSize={{ base: "lg", lg: "2xl" }} pb={5}>
              Se você gostar, for útil para a sua vida, te ajudar em algo e você
              pedir reembolso, vai da sua consciência! Espero que você faça bom
              uso, seja útil para você e te auxilie à construir novos hábitos,
              realizar sonhos e alcançar seus objetivos.
            </Text>

            <Text fontSize={{ base: "lg", lg: "2xl" }} pb={5}>
            No caso de você querer o reembolso, será apenas entrar em contato pelo direct do meu instagram que estará na área de membros, ou whatsapp que está aqui na direita da sua tela, e falar comigo, que reembolso seu dinheiro!
            </Text>

            <Text fontSize={{ base: "lg", lg: "2xl" }} pb={5}>
            Como você pode ver, você não terá nenhum risco, aliás, terá sim… o risco de se tornar uma pessoa mais organizada, produtiva e que irá alcançar metas. Abração!
            </Text>
          </Flex>

          <Flex
            direction="column"
            align="center"
            pt={20}
            pb={10}
            justify={"center"}
          >
            <Flex
              bg="white"
              borderRadius="5px"
              w={{ base: "100%", lg: "60%" }}
              align="center"
              justify="center"
              direction="column"
              gap="1rem"
              p={10}
              color="main"
            >
              <Text
                align="center"
                textDecoration="line-through"
                textDecorationColor="red"
                fontSize={{ base: "lg", lg: "3xl" }}
              >
                De R$247,00
              </Text>
              <Text
                align="center"
                fontSize={{ base: "60px", lg: "100px" }}
                fontWeight="bold"
              >
                12x R$9,74
              </Text>
              <Text align="center" fontSize={{ base: "lg", lg: "2xl" }}>
                Ou R$97,00 à vista
              </Text>
              <Image src={bandeiras} w={350} />
              <Button
                color="white"
                mt={10}
                h="80px"
                hover={{
                  background: "transparent",
                  outline: "2px solid #1D2021",
                  color: "main",
                }}
                bg="main"
                href="https://pay.kiwify.com.br/pkdf039"
              >
                Adquira agora mesmo!
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
