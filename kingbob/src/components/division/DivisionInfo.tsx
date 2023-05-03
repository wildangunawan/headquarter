import {
  Text,
  useColorModeValue,
  Grid,
  Link,
  VStack,
  StackDivider,
  Box,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import Image from "next/image";
import NextLink from "next/link";

const DivisionInfo = () => {
  return (
    <Card>
      <VStack
        spacing={{
          base: "0px",
          lg: "10px",
        }}
        align="stretch"
        px="15px"
        py="10px"
        divider={<StackDivider />}
      >
        <Box p="0.5rem">
          <Image
            src="https://static.wixstatic.com/media/04819c_67fe651ef39e425ba783ff9e8c996f60~mv2.png/v1/fill/w_278,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/VATSEA_LOGO.png"
            alt="VATSEA Logo"
            width="1080"
            height="200"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>

        <Grid
          templateColumns={"0.5fr 1.5fr"}
          templateRows={"1fr"}
          alignItems={"center"}
        >
          <Text>Name</Text>
          <Text>South East Asia Division</Text>
        </Grid>
        <Grid
          templateColumns={"0.5fr 1.5fr"}
          templateRows={"1fr"}
          alignItems={"center"}
        >
          <Text>Region</Text>
          <Text>Asia Pacific (APAC)</Text>
        </Grid>
        <Grid
          templateColumns={"0.5fr 1.5fr"}
          templateRows={"1fr"}
          alignItems={"center"}
        >
          <Text>Website</Text>
          <Text>
            <Link href="https://vat-sea.com" as={NextLink} color="brand.500">
              https://vat-sea.com
            </Link>
          </Text>
        </Grid>
      </VStack>
    </Card>
  );
};

export default DivisionInfo;
