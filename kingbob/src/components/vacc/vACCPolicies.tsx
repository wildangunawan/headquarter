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

const VACCPolicies = () => {
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
        vACC Policies
      </Text>

      <Box overflowX={"auto"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Policy</Th>
              <Th>Category</Th>
              <Th>Last Updated</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Link
                  as={NextLink}
                  href="/policies/minimum-hours-of-controlling-in-indonesia-vacc"
                  color="brand.500"
                >
                  Minimum hours of controlling in Indonesia vACC
                </Link>
              </Td>
              <Td>ATC</Td>
              <Td>20 Aug 2022 13:22</Td>
            </Tr>
            <Tr>
              <Td>
                <Link
                  as={NextLink}
                  href="/policies/minimum-hours-of-controlling-in-indonesia-vacc"
                  color="brand.500"
                >
                  Requirement to be an ATC in Indonesia vACC
                </Link>
              </Td>
              <Td>ATC</Td>
              <Td>20 Aug 2022 13:22</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
};

export default VACCPolicies;
