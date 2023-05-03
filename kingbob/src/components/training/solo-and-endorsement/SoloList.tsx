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
import { useState } from "react";

const SoloList = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  // State
  const [showMePls, setShowMePls] = useState(false);

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
          Solo Validations
        </Text>
        <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>
          Show example pls.
        </Button>
      </Flex>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Student</Th>
              <Th>Approved for</Th>
              <Th>Date start</Th>
              <Th>Date end</Th>
              <Th>Approved by</Th>
              <Th textTransform={"inherit"}>vACC</Th>
            </Tr>
          </Thead>
          <Tbody>
            {showMePls && (
              <>
                <Tr>
                  <Td>
                    <Link
                      as={NextLink}
                      href="/profile/1000000"
                      color="brand.500"
                    >
                      Kevin (1000000)
                    </Link>
                  </Td>
                  <Td>WIII_TWR</Td>
                  <Td>1 Aug 2022</Td>
                  <Td>30 Aug 2022</Td>
                  <Td>
                    <Link
                      as={NextLink}
                      href="/profile/1000005"
                      color="brand.500"
                    >
                      Gru (1000005)
                    </Link>
                  </Td>
                  <Td>Indonesia vACC</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Link
                      as={NextLink}
                      href="/profile/1000000"
                      color="brand.500"
                    >
                      Kevin (1000000)
                    </Link>
                  </Td>
                  <Td>WIII_TWR</Td>
                  <Td>1 Aug 2022</Td>
                  <Td>30 Aug 2022</Td>
                  <Td>
                    <Link
                      as={NextLink}
                      href="/profile/1000005"
                      color="brand.500"
                    >
                      Gru (1000005)
                    </Link>
                  </Td>
                  <Td>Indonesia vACC</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Link
                      as={NextLink}
                      href="/profile/1000000"
                      color="brand.500"
                    >
                      Kevin (1000000)
                    </Link>
                  </Td>
                  <Td>WIII_TWR</Td>
                  <Td>1 Aug 2022</Td>
                  <Td>30 Aug 2022</Td>
                  <Td>
                    <Link
                      as={NextLink}
                      href="/profile/1000005"
                      color="brand.500"
                    >
                      Gru (1000005)
                    </Link>
                  </Td>
                  <Td>Indonesia vACC</Td>
                </Tr>
              </>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default SoloList;
