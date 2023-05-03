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

const EndorsementList = () => {
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
          Endorsement Roster
        </Text>
        <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>
          Show example pls.
        </Button>
      </Flex>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name (CID)</Th>
              <Th>Rating</Th>
              <Th>Endorsed for</Th>
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
                  <Td>Supervisor (SUP)</Td>
                  <Td>WIIF_CTR</Td>
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
                  <Td>Supervisor (SUP)</Td>
                  <Td>WIIF_CTR</Td>
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
                  <Td>Supervisor (SUP)</Td>
                  <Td>WIIF_CTR</Td>
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

export default EndorsementList;
