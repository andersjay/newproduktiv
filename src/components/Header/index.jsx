import {Image, Box, Center, Text, Container, Flex} from "@chakra-ui/react";

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
      <Box bg="transparent" w="100%" h={{base: '330', md: "450px", lg:"330"}}>
       <WaveContainer level={85}>
        <Wave
          fill="#3A555F"
          paused={false}
          options={{
            height:10,
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
        <Image src={LogoImg} maxWidth={{base: 150, md:250, lg:200}} maxH={{base: 200, md: 100, lg:250}} />
        <Text as="h1"fontSize={{base:19,lg:'45px'}} textAlign="center" fontWeight="bold" color="#FFF"> Estima-se que 90,8% das pessoas procrastinam por desorganização, ansiedade, baixo autocontrole, distração e perfeccionismo… </Text>
      </Flex>


    </Box>
    </Container>
  );
}