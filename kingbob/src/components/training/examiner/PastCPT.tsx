import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  useColorModeValue,
  Link,
  Button,
  Flex,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";

const PastCPT = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card>
      <Flex>
        <Text
          me="auto"
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
          px="15px"
          py="10px"
        >
          Past CPT
        </Text>
      </Flex>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Student</Th>
              <Th>For</Th>
              <Th>Date and time</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Link as={NextLink} href="/profile/1000000" color="brand.500">
                  Kevin (1000000)
                </Link>
              </Td>
              <Td>Student 2 (S2)</Td>
              <Td>31 Aug 2022 13:00 UTC</Td>
              <Td>
                <Link
                  as={NextLink}
                  href={"https://somewhere.com"}
                  color="brand.500"
                  isExternal
                >
                  View report
                </Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default PastCPT;
