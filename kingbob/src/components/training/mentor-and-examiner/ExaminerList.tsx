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
  Checkbox,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";
import { useState } from "react";

const ExaminerList = () => {
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
          Examiner List
        </Text>
        <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>
          Show example pls.
        </Button>
      </Flex>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th rowSpan={2}>Name</Th>
              <Th rowSpan={2}>Rating</Th>
              <Th rowSpan={2} textTransform={"inherit"}>
                vACC / Division
              </Th>
              <Th colSpan={3}>Can examine</Th>
            </Tr>
            <Tr>
              <Th>S2</Th>
              <Th>S3</Th>
              <Th>C1</Th>
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
                  <Td>Enroute Controller (C1)</Td>
                  <Td>Indonesia vACC</Td>
                  <Td>
                    <Checkbox isChecked />
                  </Td>
                  <Td>
                    <Checkbox isChecked={false} />
                  </Td>
                  <Td>
                    <Checkbox isChecked={false} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Link
                      as={NextLink}
                      href="/profile/1000001"
                      color="brand.500"
                    >
                      King Bob (1000003)
                    </Link>
                  </Td>
                  <Td>Instructor 1 (I1)</Td>
                  <Td>Malaysia vACC</Td>
                  <Td>
                    <Checkbox isChecked />
                  </Td>
                  <Td>
                    <Checkbox isChecked />
                  </Td>
                  <Td>
                    <Checkbox isChecked />
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

export default ExaminerList;
