import {
  Box,
  Link,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";

const Information = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card>
      <Text
        me="auto"
        color={textColor}
        fontSize="xl"
        fontWeight="700"
        lineHeight="100%"
        px="15px"
        py="10px"
      >
        Information
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px" px="15px" py="10px">
        <Flex direction={"column"}>
          <SimpleGrid columns={2} alignItems={"center"}>
            <Text>Student</Text>
            <Text>
              :{" "}
              <Link as={NextLink} href={"/profile/1000005"} color={"blue.500"}>
                Mel (1000006)
              </Link>
            </Text>
          </SimpleGrid>
          <SimpleGrid columns={2} alignItems={"center"}>
            <Text>Mentor</Text>
            <Text>
              :{" "}
              <Link as={NextLink} href={"/profile/1000005"} color={"blue.500"}>
                Gru (1000005)
              </Link>
            </Text>
          </SimpleGrid>
          <SimpleGrid columns={2} alignItems={"center"}>
            <Text>vACC</Text>
            <Text>
              :{" "}
              <Link as={NextLink} href={"/vacc/idn"} color={"blue.500"}>
                Indonesia vACC (IDN)
              </Link>
            </Text>
          </SimpleGrid>
        </Flex>

        <Flex direction={"column"}>
          <SimpleGrid columns={2} alignItems={"center"}>
            <Text>Status</Text>
            <Text>
              : <Badge colorScheme={"yellow"}>Pending</Badge>
            </Text>
          </SimpleGrid>
          <SimpleGrid columns={2} alignItems={"center"}>
            <Text>Start</Text>
            <Text>: 5 Aug 2022 12:00</Text>
          </SimpleGrid>
          <SimpleGrid columns={2} alignItems={"center"}>
            <Text>End</Text>
            <Text>: 5 Aug 2022 14:00</Text>
          </SimpleGrid>
        </Flex>
      </SimpleGrid>
    </Card>
  );
};

export default Information;
