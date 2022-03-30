import { Image, Box, Center, Text, Container, Flex } from "@chakra-ui/react";

import LogoImg from "../../assets/logo.png";
import Wave from "react-wavify";
import styled from "@emotion/styled";

const WaveContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -5px;
  height: ${(props) => props.level + "vh"};
  display: flex;
  z-index: -1;
  transform: rotate(180deg);
`;

export function Header() {
  return (
    <Container maxW="1220px">
      <Box
        bg="transparent"
        w="100%"
        h={{ base: "310", md: "450px", lg: "425", xl: "330" }}
      >
        <WaveContainer level={85}>
          <Wave
            fill="#3A555F"
            paused={false}
            options={{
              height: 10,
              amplitude: 20,
              speed: 0.4,
              points: 2,
            }}
          />
        </WaveContainer>

        <Flex
          align="center"
          justify="center"
          direction="column"
          gap="20px"
          pt={10}
        >
          <Image
            src={LogoImg}
            maxWidth={{ base: 150, md: 250, lg: 200 }}
            maxH={{ base: 200, md: 100, lg: 250 }}
          />
          <Text
            as="h1"
            fontSize={{ base: 23, md: 35, lg: "40px", xl: '45px'}}
            textAlign="center"
            fontWeight="bold"
            color="#FFF"
          >
            
            Descubra as estratégias do
            <span
              style={{ background: "white", color: "#3A555F", padding: "1px", margin: '0 10px' }}
            >
              "Método P"
            </span> 
            que eu uso para ser mais produtivo(a), controlar ansiedade, realizar sonhos e procrastinar menos com o Notion
          </Text>
        </Flex>
      </Box>
    </Container>
  );
}
