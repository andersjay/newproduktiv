import {AspectRatio, Center } from "@chakra-ui/react";

export function Video() {
  return (
      <Center>
        <AspectRatio maxW={{base:400, md: 500, lg: 700}} ratio={16 / 9} flex="1 1 auto" width="100" >
        <iframe src="https://player.vimeo.com/video/692306296?h=a0fcb64a92" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
      </AspectRatio>
      </Center>

  );
}
