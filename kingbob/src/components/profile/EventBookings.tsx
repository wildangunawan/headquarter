import { Flex, Table, Thead, Tr, Th, Tbody, Td, Text, useColorModeValue, Box, Link } from "@chakra-ui/react";
import Card from "@components/card/Card";
import NavLink from "next/link";

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
                    px="15px" py="10px"
                >
                    Event ATC Bookings
                </Text>
            </Flex>

            <Box>
                <Table variant='simple'>
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
                                <NavLink href="/admin/event/jakarta-turn-around-1" passHref>
                                    <Link color={'blue'}>Jakarta Turn Around 1</Link>
                                </NavLink>
                            </Td>
                            <Td>WIII_GND</Td>
                            <Td>2 Aug 2022</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <NavLink href="/admin/event/jakarta-turn-around-2" passHref>
                                    <Link color={'blue'}>Jakarta Turn Around 2</Link>
                                </NavLink>
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