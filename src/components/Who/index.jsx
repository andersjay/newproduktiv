import {
  Avatar,
  Badge,
  Box,
  Container,
  Flex,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";


export function Who() {
  return (
    <Container maxWidth="1220px" pt={20} mb="100px" h="100%">
      <Flex align="center" justify="center" gap="3rem">
        <Box ml="3">
          <Text fontWeight="bold" fontSize="40px">
            Isso é para mim?
            <Badge ml="1" colorScheme="green">
              New
            </Badge>
          </Text>
        </Box>
      </Flex>

      <List spacing={3} pt={20}>
        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:18, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize="50px" />
            Gosta de organização ou quer aprender do zero como organizar sua
            rotina de maneira saudável e prazerosa (sem se pressionar demais);
          </Flex>
        </ListItem>

        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:18, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize="50px" />
            Quer dormir melhor e ter menos preocupações no dia a dia devido a
            sobrecarga de tarefas e informação, prazos e datas, etc;
          </Flex>
        </ListItem>

        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:18, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize="50px" />
            Quer criar novos hábitos e se livrar dos hábitos que te fazem
            procrastinar;
          </Flex>
        </ListItem>

        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:18, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize="50px" />
            Quer se tornar uma pessoa mais inteligente, ter mais tempo para se
            dedicar ao teu crescimento pessoal usando técnicas eficazes;
          </Flex>
        </ListItem>

        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:18, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize="50px" />
            Quer organizar toda a sua empresa e processos para ter mais clareza
            se seus negócios vão prosperar a longo prazo;
          </Flex>
        </ListItem>

        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:18, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize="50px" />
            Quer criar metas eficazes e conquistar grande parte delas, usando
            todos os métodos de planejamento diário, semanal, mensal, trimestral
            e anual;
          </Flex>
        </ListItem>

        <ListItem fontSize="sm" display={"flex"} alignItems="center">
          <Flex fontSize={{base:18, lg:22}} align="center">
            <ListIcon as={MdCheckCircle} color="green.500" fontSize="50px" />
            Quer criar metas eficazes e conquistar grande parte delas, usando
            todos os métodos de planejamento diário, semanal, mensal, trimestral
            e anual;
          </Flex>
        </ListItem>
      </List>
    </Container>
  );
}
