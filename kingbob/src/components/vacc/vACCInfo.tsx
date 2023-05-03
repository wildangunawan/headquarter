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

const VACCInfo = () => {
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
            src="https://static.wixstatic.com/media/04819c_d3fe05ecce10418295b6e7cf26e5ce74~mv2.png/v1/fill/w_214,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/04819c_d3fe05ecce10418295b6e7cf26e5ce74~mv2.png"
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
          <Text>Indonesia vACC</Text>
        </Grid>
        <Grid
          templateColumns={"0.5fr 1.5fr"}
          templateRows={"1fr"}
          alignItems={"center"}
        >
          <Text>Division</Text>
          <Text>South East Asia (SEA)</Text>
        </Grid>
        <Grid
          templateColumns={"0.5fr 1.5fr"}
          templateRows={"1fr"}
          alignItems={"center"}
        >
          <Text>Website</Text>
          <Text>
            <Link as={NextLink} href="https://idvacc.id" color="brand.500">
              https://idvacc.id
            </Link>
          </Text>
        </Grid>
        <Grid
          templateColumns={"0.5fr 1.5fr"}
          templateRows={"1fr"}
          alignItems={"center"}
        >
          <Text>Staff e-mail</Text>
          <Text>
            <Link as={NextLink} href="mailto:humas@idvacc.id" color="brand.500">
              humas@idvacc.id
            </Link>
          </Text>
        </Grid>
        <Grid
          templateColumns={"0.5fr 1.5fr"}
          templateRows={"1fr"}
          alignItems={"center"}
        >
          <Text>Welcome message</Text>
          <Text>
            <Link color="brand.500">View</Link>
          </Text>
        </Grid>
      </VStack>
    </Card>
  );
};

export default VACCInfo;
