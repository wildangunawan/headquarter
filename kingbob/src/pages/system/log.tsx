import {
  Link,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import NextLink from "next/link";
import { ReactElement } from "react";

const SystemLog = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <VStack spacing={"20px"} align="stretch">
      <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
        System Log
      </Text>

      <Card>
        <Box overflowX={"auto"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Action</Th>
                <Th>By</Th>
                <Th>Timestamp</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, delectus!
                  </Text>
                </Td>
                <Td>
                  <Link as={NextLink} href="/profile/1000005" color="brand.500">
                    Gru (1000005)
                  </Link>
                </Td>
                <Td>31 Aug 2022 13:00 UTC</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, delectus!
                  </Text>
                </Td>
                <Td>
                  <Link as={NextLink} href="/profile/1000005" color="brand.500">
                    Gru (1000005)
                  </Link>
                </Td>
                <Td>31 Aug 2022 13:00 UTC</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Card>
    </VStack>
  );
};

SystemLog.getLayout = (page: ReactElement) => (
  <AdminLayout title="System Log">{page}</AdminLayout>
);
export default SystemLog;
