import {Button as ButtonChakra} from '@chakra-ui/react';

export function Button(props){
  return(
    <ButtonChakra
      bg={props.bg}
      color={props.color}
      w="100%"
      maxWidth="400px"
      size="lg"
      mt={props.mt}
      isLoading={props.isLoading}
      transition="all 0.5s"
      _hover={props.hover}
      fontSize={{base:'lg', lg:'2xl'}}
      h={props.h}
      as="a"
      href={props.href}
      variant={props.variant}
      id={props.id}
      border="2px solid black"
      
    >
      {props.children}
    </ButtonChakra>

  );
}