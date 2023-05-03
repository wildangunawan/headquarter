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
import { useEffect, useState } from "react";
import IssueSolo from "./modal/IssueSolo";

const SoloHistory = ({
  viewingMyself = false,
}: {
  viewingMyself?: boolean;
}) => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  // State
  const [showMePls, setShowMePls] = useState(false);

  // Modal
  const { onOpen, modal, setStudentData } = IssueSolo();

  // Set student data
  useEffect(() => {
    setStudentData({
      id: "1000006",
      name: "Mel",
    });
  }, []);

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
            Solo History
          </Text>
          {!viewingMyself && (
            <Button colorScheme={"blue"} onClick={onOpen}>
              Issue solo
            </Button>
          )}
          <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>
            Show example pls.
          </Button>
        </Flex>
        {showMePls ? (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Position</Th>
                  <Th>Approved until</Th>
                  <Th>Issued by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>WIII_TWR</Td>
                  <Td>30 Aug 2022</Td>
                  <Td>
                    <Link
                      as={NextLink}
                      href="/profile/1000000"
                      color="brand.500"
                    >
                      Kevin (1000000)
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>WIII_TWR</Td>
                  <Td>30 Jul 2022</Td>
                  <Td>
                    <Link
                      as={NextLink}
                      href="/profile/1000000"
                      color="brand.500"
                    >
                      Kevin (1000000)
                    </Link>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Center h={"100%"} w={"100%"} my="1em" px="15px" py="10px">
            {viewingMyself ? "You don't" : "This student doesn't"} have any solo
            approval yet.
          </Center>
        )}
      </Card>

      {/* Show modal */}
      {modal}
    </>
  );
};

export default SoloHistory;
