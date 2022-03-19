import {Button as ButtonChakra} from '@chakra-ui/react';

export function Button(props){
  return(
    <ButtonChakra
      bg={props.bg}
      color="#FFF"
      w="100%"
      maxWidth="400px"
      size="lg"
      mt={props.mt}
      isLoading={props.isLoading}
      transition="all 0.5s"
      _hover={props.hover}
      fontSize="2xl"
    >
      {props.children}
    </ButtonChakra>

  );
}