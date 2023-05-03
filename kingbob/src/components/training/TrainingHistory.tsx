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
  Center,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";
import { useState } from "react";
import AddTrainingHistory from "./modal/AddTrainingHistory";

const TrainingHistory = ({
  viewingMyself = false,
}: {
  viewingMyself?: boolean;
}) => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  // State
  const [showMePls, setShowMePls] = useState(false);

  // Modal
  const { onOpen, modal } = AddTrainingHistory();

  return (
    <>
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
            Training History
          </Text>
          <Button colorScheme={"blue"} onClick={onOpen}>
            Add training
          </Button>
          <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>
            Show example pls.
          </Button>
        </Flex>

        {showMePls ? (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Mentor</Th>
                  <Th>Date and time (UTC)</Th>
                  <Th>vACC</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>123</Td>
                  <Td>
                    <Link
                      href="/profile/1000000"
                      as={NextLink}
                      color="brand.500"
                    >
                      Kevin (1000000)
                    </Link>
                  </Td>
                  <Td>30 Aug 2022 12:00</Td>
                  <Td>Indonesia vACC (IDN)</Td>
                  <Td>
                    <Button
                      href="/training/detail/abcd"
                      as="a"
                      colorScheme="blue"
                    >
                      View
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>123</Td>
                  <Td>
                    <Link
                      href="/profile/1000000"
                      as={NextLink}
                      color="brand.500"
                    >
                      Kevin (1000000)
                    </Link>
                  </Td>
                  <Td>30 Aug 2022 12:00</Td>
                  <Td>Indonesia vACC (IDN)</Td>
                  <Td>
                    <Button
                      href="/training/detail/abcd"
                      as="a"
                      colorScheme="blue"
                    >
                      View
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>123</Td>
                  <Td>
                    <Link
                      href="/profile/1000000"
                      as={NextLink}
                      color="brand.500"
                    >
                      Kevin (1000000)
                    </Link>
                  </Td>
                  <Td>30 Aug 2022 12:00</Td>
                  <Td>Indonesia vACC (IDN)</Td>
                  <Td>
                    <Button
                      href="/training/detail/abcd"
                      as="a"
                      colorScheme="blue"
                    >
                      View
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Center h={"100%"} w={"100%"} my="1em" px="15px" py="10px">
            {viewingMyself ? "You don't" : "This student doesn't"} have any
            training record.
          </Center>
        )}
      </Card>

      {/* Modal */}
      {modal}
    </>
  );
};

export default TrainingHistory;
