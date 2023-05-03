import {
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  useColorModeValue,
  Box,
  Link,
  TableContainer,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";

const EventBookings = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

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
          Event ATC Bookings
        </Text>
      </Flex>

      <Box overflowX={"auto"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Event</Th>
              <Th>Position</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Link
                  as={NextLink}
                  href="/events/jakarta-turn-around-1"
                  color={"blue"}
                >
                  Jakarta Turn Around 1
                </Link>
              </Td>
              <Td>WIII_GND</Td>
              <Td>2 Aug 2022</Td>
            </Tr>
            <Tr>
              <Td>
                <Link
                  as={NextLink}
                  href="/events/jakarta-turn-around-2"
                  color={"blue"}
                >
                  Jakarta Turn Around 2
                </Link>
              </Td>
              <Td>WIIF_CTR</Td>
              <Td>9 Aug 2022</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
};

export default EventBookings;
