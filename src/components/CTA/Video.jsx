import {AspectRatio, Center } from "@chakra-ui/react";

export function Video() {
  return (
      <Center>
        <AspectRatio maxW={{base:400, md: 500, lg: 700}} ratio={16 / 9} flex="1 1 auto" width="100" >
        <iframe
          src="https://www.youtube.com/embed/XGrxGcIhXIU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen


        ></iframe>
      </AspectRatio>
      </Center>

  );
}
