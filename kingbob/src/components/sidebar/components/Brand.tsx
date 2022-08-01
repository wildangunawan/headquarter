// Chakra imports
import { Flex, Image } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  return (
    <Flex align='center' direction='column'>
      <Image
        src="https://static.wixstatic.com/media/04819c_67fe651ef39e425ba783ff9e8c996f60~mv2.png/v1/fill/w_278,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/VATSEA_LOGO.png"
        alt="VATSEA Logo"
        objectFit={'fill'}
        objectPosition={'center'}
      />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
