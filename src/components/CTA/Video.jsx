import {AspectRatio, Center } from "@chakra-ui/react";

export function Video() {
  return (
      <Center>
        <AspectRatio maxW={{base:500, md: 700, lg: 700}} ratio={16 / 9} flex="1 1 auto" width="100" >
        <iframe src="https://player.vimeo.com/video/692305937?h=fe84c5b879" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
      </AspectRatio>
      </Center>

  );
}
