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
  ButtonGroup,
  Flex,
  Center,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";
import { useState } from "react";

const CPTHistory = ({ viewingMyself = false }: { viewingMyself?: boolean }) => {
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
          CPT History
        </Text>
        <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>
          Show example pls.
        </Button>
      </Flex>

      {showMePls ? (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Rating</Th>
                <Th>Examiner</Th>
                <Th>Date and time</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Senior Controller (C3)</Td>
                <Td></Td>
                <Td>30 Nov 2022 12:00</Td>
                <Td>
                  <ButtonGroup spacing={1}>
                    <Button colorScheme="green">Approve</Button>
                    <Button colorScheme="red">Reject</Button>
                  </ButtonGroup>
                </Td>
              </Tr>
              <Tr>
                <Td>Enroute Controller (C1)</Td>
                <Td>
                  <Link as={NextLink} href="/profile/1000000" color="brand.500">
                    Kevin (1000000)
                  </Link>
                </Td>
                <Td>30 Oct 2022 12:00</Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>Student 3 (S3)</Td>
                <Td>
                  <Link as={NextLink} href="/profile/1000000" color="brand.500">
                    Kevin (1000000)
                  </Link>
                </Td>
                <Td>30 Sept 2022 12:00</Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>Student 2 (S2)</Td>
                <Td>
                  <Link as={NextLink} href="/profile/1000000" color="brand.500">
                    Kevin (1000000)
                  </Link>
                </Td>
                <Td>30 Aug 2022 12:00</Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Center h={"100%"} w={"100%"} my="1em" px="15px" py="10px">
          {viewingMyself ? "You don't" : "This student doesn't"} have any CPT
          recorded.
        </Center>
      )}
    </Card>
  );
};

export default CPTHistory;
