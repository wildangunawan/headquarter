// Chakra imports
import { Box, Flex } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";
import Image from "next/image";

export function SidebarBrand() {
  return (
    <Flex align='center' direction='column'>
      <Box px="2rem" py="0.5rem">
        <Image
          src="https://hq.vatwa.net/images/VATWA_Color_Tag_Right_563_221.png"
          alt="VATSEA Logo"
          width="1080"
          height="400"
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </Box>
      <HSeparator mb='15px' />
    </Flex>
  );
}

export default SidebarBrand;
