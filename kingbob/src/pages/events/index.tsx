import {
  VStack,
  Text,
  useColorModeValue,
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
import { ReactElement } from "react";

const EventsList = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <VStack spacing={"20px"} align="stretch">
      {/* Header */}
      <Flex align="center" justify="space-between">
        <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
          Events List
        </Text>
        <Button as="a" href="/events/add" colorScheme="blue">
          Add Events
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
                <Th>Start at</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>123</Td>
                <Td>Lorem, ipsum dolor.</Td>
                <Td>30 Aug 2022 12:00</Td>
                <Td>
                  <Button as="a" href="/events/abcd" colorScheme="blue">
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
                    <Button as="a" href="/events/abcd" colorScheme="blue">
                      View
                    </Button>

                    <Button
                      as="a"
                      href="/events/abcd/edit"
                      colorScheme="yellow"
                    >
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
                  <Button as="a" href="/events/abcd" colorScheme="blue">
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

EventsList.getLayout = (page: ReactElement) => (
  <AdminLayout title="Events List">{page}</AdminLayout>
);
export default EventsList;
