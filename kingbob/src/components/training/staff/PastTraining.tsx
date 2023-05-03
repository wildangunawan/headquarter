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

const PastTraining = () => {
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
          Past Training
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
              <Th>Rating</Th>
              <Th>Mentor</Th>
              <Th>Date and time</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {showMePls && (
              <>
                <Tr>
                  <Td>
                    <Link
                      href="/profile/1000000"
                      as={NextLink}
                      color="brand.500"
                    >
                      Kevin (1000000)
                    </Link>
                  </Td>
                  <Td>Student 1 (S1)</Td>
                  <Td>
                    <Link
                      href="/profile/1000000"
                      as={NextLink}
                      color="brand.500"
                    >
                      Kevin (1000000)
                    </Link>
                  </Td>
                  <Td>31 Aug 2022 13:00 UTC</Td>
                  <Td>
                    <Button
                      href={"/training/detail/training-30-aug-2022"}
                      colorScheme="blue"
                      as="a"
                    >
                      View
                    </Button>
                  </Td>
                </Tr>
              </>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default PastTraining;
