import { Stack, Container, Flex, Box} from "@chakra-ui/react";
import { Button } from "../Button";
import { Video } from "./Video";

export function CTAUpsell() {
  return (
    <Container maxWidth={1220}>
      <Stack direction="column">
        <Video />
        <Flex
        
          align="center"
          justify="center"
          gap={{base:'1rem',lg:'2rem'}}
          direction={{base: 'column', lg:"row"}}
        >
          

          <Button
            mt={1}
            bg="white"
            color="bg"
            hover={{
              background: "transparent",
              outline: "2px solid #FFF",
              color: "#FFF",
              borderRadius: "5px",
            }}
            id="kiwify-upsell-trigger-Gr3IuD2"
          >
            Sim, eu aceito essa oferta especial!
          </Button>

          <Button
            mt={1}

            color="white"
            variant="outline" 
            hover={{
              background: "transparent",
              outline: "1px solid #FFF",
              color: "#FFF",
              borderRadius: "5px",
            }}
            fontSize="20px"
            id="kiwify-upsell-cancel-trigger"
          >
            Não, eu gostaria de recusar a oferta
          </Button>

          
        </Flex>
      </Stack>
    </Container>
  );
}
