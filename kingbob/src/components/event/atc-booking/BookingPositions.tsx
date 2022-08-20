import { Text, Box, useColorModeValue, Button, Flex, Link, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Card from "@components/card/Card";
import NavLink from "next/link";
import AddPositions from "./modal/AddPositions";

const BookingPositions = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    // Modal
    const { onOpen, modal } = AddPositions();

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
                        px="15px" py="10px"
                    >
                        Positions available to be booked
                    </Text>
                    <Button colorScheme={"blue"} onClick={onOpen}>Add position(s)</Button>
                </Flex>

                <Box overflowX={"auto"}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Position</Th>
                                <Th>Added by</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>WIII_TWR</Td>
                                <Td>
                                    <NavLink href="/profile/1000000" passHref>
                                        <Link color="brand.500">Kevin (1000000)</Link>
                                    </NavLink>
                                </Td>
                                <Td>
                                    <Button colorScheme="red">Delete</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>WIII_TWR</Td>
                                <Td>
                                    <NavLink href="/profile/1000000" passHref>
                                        <Link color="brand.500">Kevin (1000000)</Link>
                                    </NavLink>
                                </Td>
                                <Td>
                                    <Button colorScheme="red">Delete</Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Card>

            {/* Modal */}
            {modal}
        </>
    );
};

export default BookingPositions;