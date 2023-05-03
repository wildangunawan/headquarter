import {
  Link,
  Text,
  useColorModeValue,
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";

const VACCATCRoster = () => {
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
        ATC Roster
      </Text>

      <Box overflowX={"auto"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Rating</Th>
              <Th>Status</Th>
              <Th>Approved for</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Link as={NextLink} href="/profile/1000000" color="brand.500">
                  Otto (1000004)
                </Link>
              </Td>
              <Td>Controller 1 (C1)</Td>
              <Td>Resident</Td>
              <Td>APP, CTR</Td>
            </Tr>
            <Tr>
              <Td>
                <Link as={NextLink} href="/profile/1000000" color="brand.500">
                  Gru (1000005)
                </Link>
              </Td>
              <Td>Student 3 (S3)</Td>
              <Td>Visitor</Td>
              <Td>DEL, GND, TWR</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
};

export default VACCATCRoster;
