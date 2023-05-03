import {
  VStack,
  Text,
  useColorModeValue,
  Link,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Box,
  Flex,
  HStack,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import NextLink from "next/link";
import { ReactElement } from "react";

const NewsList = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <VStack spacing={"20px"} align="stretch">
      {/* Header */}
      <Flex align="center" justify="space-between">
        <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
          News List
        </Text>
        <Button href="/news/add" as="a" colorScheme="blue">
          Add News
        </Button>
      </Flex>

      {/* Content */}
      <Card>
        <Box>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Title</Th>
                <Th>Created at</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>123</Td>
                <Td>Lorem, ipsum dolor.</Td>
                <Td>30 Aug 2022 12:00</Td>
                <Td>
                  <Button href="/news/abcd" as="a" colorScheme="blue">
                    View
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>123</Td>
                <Td>Lorem, ipsum dolor.</Td>
                <Td>30 Aug 2022 12:00</Td>
                <Td>
                  <HStack spacing={1}>
                    <Button href="/news/abcd" as="a" colorScheme="blue">
                      View
                    </Button>

                    <Button href="/news/abcd/edit" as="a" colorScheme="yellow">
                      Edit
                    </Button>

                    <Button colorScheme="red">Delete</Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>123</Td>
                <Td>Lorem, ipsum dolor.</Td>
                <Td>30 Aug 2022 12:00</Td>
                <Td>
                  <Button href="/news/abcd" as="a" colorScheme="blue">
                    View
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Card>
    </VStack>
  );
};

NewsList.getLayout = (page: ReactElement) => (
  <AdminLayout title="News List">{page}</AdminLayout>
);
export default NewsList;
