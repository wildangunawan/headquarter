// chakra imports
import { Box, Flex, Stack } from "@chakra-ui/react";
import { Menu } from "types/menu";
//   Custom components
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";

// FUNCTIONS
function SidebarContent({ routes }: { routes: Menu[] }) {
  return (
    <Flex direction="column" height="100%" pt={2} borderRadius="30px">
      <Brand />
      <Stack direction="column" mb="auto">
        <Box ps="20px" pe={{ md: "16px", "2xl": "1px" }} mb="2rem">
          <Links routes={routes} />
        </Box>
      </Stack>
    </Flex>
  );
}

export default SidebarContent;
