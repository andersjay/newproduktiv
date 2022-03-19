import {
  Container,
  Text,
  Flex,
  Box,
  Center,
  Image,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  SimpleGrid,
} from "@chakra-ui/react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { motion } from "framer-motion";
import { HiCursorClick } from "react-icons/hi";

//Images
import AnxietyImg from "../../assets/anxiety.jpeg";
import birthDayImg from "../../assets/birthday.jpeg";
import bodyofwork from "../../assets/bodyofwork.jpeg";
import booklist from "../../assets/booklist.jpeg";

const MotionBox = motion(Box);
export function Anxiety() {
  return (
    <Box bg="main">
      <Container maxW={1120} w="100%" pt={10} pb={10}>
        <Flex align="center" pt={20} pb={20} direction="column" gap={20}>
          <Center>
            <Text as="h2" color="white" fontSize="3xl" fontWeight="bold">
              A Ansiedade é a maior inimiga da produtividade...
            </Text>
          </Center>

          <Box>
            <Image src={AnxietyImg} w={{ base: 400, lg: 700 }} />
          </Box>

          <Center>
            <Text as="p" color="white" fontSize="2xl">
              Tenho certeza que você já passou por momentos que te causaram
              muita ansiedade, principalmente no cenário atual em que vivemos,
              tantas incertezas sobre nosso futuro, carreira, segurança, saúde,
              etc. O grande problema de tudo isso é, que na maioria dos casos,
              esse excesso de preocupação nem sempre é sobre algo real. Nosso
              cérebro está programado para reagir a tudo que ameaça nossa
              sobrevivência, independente da ameaça ser real ou não.
            </Text>
          </Center>

          <Text fontSize="2xl" color="white" fontWeight="bold">
            As principais causas de ansiedade no trabalho ou nos estudos, são
            ocasionadas por:
          </Text>

          <Text fontSize="20px" color="white" fontWeight="bold">
            Falta de clareza ou direcionamento em como executar tarefas mais
            complexas
          </Text>

          <Text fontSize="20px" color="white" fontWeight="bold">
            Excesso de prazos de entrega de atividades
          </Text>

          <Flex direction="column" gap="2rem">
            <Text as="p" color="white" fontSize="2xl">
              E o que me ajuda diariamente, e acredito fortemente que irá te
              ajudar a ser uma pessoa mais organizada, mais produtiva, com mais
              clareza nos objetivos, metas, trabalhos e estudos…
            </Text>

            <Text as="p" color="white" fontSize="2xl">
              São esses templates que eu fiz para me auxiliar na organização da
              faculdade, trabalho, metas, objetivos e livros que eu gostaria de
              ler, ou que já havia lido…
            </Text>

            <Text as="p" color="white" fontSize="2xl">
              Pensando em ajudar vocês que se vêem na mesma situação que já
              estive um dia, nada produtivo, nada organizado, e sem clareza de
              nada… criei esses modelos para vender por um preço simbólico, que
              me ajuda, mas que o objetivo principal é ser abundante e
              compartilhar com vocês o que me faz ser mais produtivo, organizado
              e cada vez chegar mais próximo dos meus objetivos, tanto
              profissionais, quanto pessoais.
            </Text>

            <Text as="p" color="white" fontSize="2xl">
              E ainda fiz mais alguns bônus para vocês usarem para a vida de
              vocês, que são: body of work - encontre o fio que une sua
              carreira, lista de livros para organizar os livros que você quer
              ler e os que já leu, e uma lista de aniversário, que você coloca o
              nome das pessoas que você ama e a data de nascimento, e ele mostra
              por ordem de “mais próximo” quantos dias falta e de quem será o
              aniversário.
            </Text>
          </Flex>
          <Center>
            <Text as="h2" color="white" fontSize="50px" fontWeight="bold">
              Bônus
            </Text>
          </Center>

          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            <MotionBox
              initial={{ scale: 1 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 70,
              }}
              whileHover={{ scale: 1.2 }}
              textAlign={"center"}
            >
              <Image src={birthDayImg} w="300px" mt="50px" />
              <Text as="h3" color="white" fontSize={25} fontWeight="bold"
              >
                Aniversários - Lembrete
              </Text>
              <Text
                as="p"
                color="white"
                textDecoration={"line-through"}
                fontSize={18}
                textDecorationColor={"red"}
                textAlign={"center"}
              >
                R$17,00
              </Text>
              <Text fontSize={22} color="white" >
             
                R$00,00
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ scale: 1 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 70,
              }}
              whileHover={{ scale: 1.2 }}
              textAlign={"center"}
            >
              <Image src={bodyofwork} w="300px" mt="50px" textAlign={"center"} />
              <Text as="h3" color="white" fontSize={25} fontWeight="bold" >
                Body of Work - Lembrete
              </Text>
              <Text
                as="p"
                color="white"
                textDecoration={"line-through"}
                fontSize={18}
                textDecorationColor={"red"}
              >
                R$47,00
              </Text>
              <Text fontSize={22} color="white" >
                R$00,00
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ scale: 1 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 70,
              }}
              whileHover={{ scale: 1.2 }}
              textAlign={"center"}
            >
              <Image src={booklist} w="300px" mt="50px" />
              <Text as="h3" color="white" fontSize={25} fontWeight="bold">
                Lista de Livros
              </Text>
              <Text
                as="p"
                color="white"
                textDecoration={"line-through"}
                fontSize={18}
                textDecorationColor={"red"}
              >
                R$37,00
              </Text>
              <Text fontSize={22} color="white">
                R$00,00
              </Text>
            </MotionBox>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}
