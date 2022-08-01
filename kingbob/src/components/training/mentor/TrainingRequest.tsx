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
    ButtonGroup,
    Flex,
    Center,
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import { useState } from 'react';

const TrainingRequest = () => {
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
                    px="15px" py="10px"
                >
                    Training Request
                </Text>
                <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
            </Flex>

            {
                showMePls
                    ? <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Name (CID)</Th>
                                    <Th>Rating</Th>
                                    <Th>Date and time</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <NavLink href="/profile/1000000" passHref>
                                            <Link color="brand.500">Kevin (1000000)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>Student 1 (S1)</Td>
                                    <Td>31 Aug 2022 13:00 UTC</Td>
                                    <Td>
                                        <ButtonGroup spacing={1}>
                                            <Button colorScheme="green">Approve</Button>
                                            <Button colorScheme="red">Reject</Button>
                                        </ButtonGroup>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <NavLink href="/profile/1000001" passHref>
                                            <Link color="brand.500">Stuart (1000001)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>Student 2 (S2)</Td>
                                    <Td>31 Aug 2022 13:00 UTC</Td>
                                    <Td>
                                        <ButtonGroup spacing={1}>
                                            <Button colorScheme="green">Approve</Button>
                                            <Button colorScheme="red">Reject</Button>
                                        </ButtonGroup>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <NavLink href="/profile/1000002" passHref>
                                            <Link color="brand.500">King Bob (1000002)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>Student 1 (S1)</Td>
                                    <Td>31 Aug 2022 13:00 UTC</Td>
                                    <Td>
                                        <ButtonGroup spacing={1}>
                                            <Button colorScheme="green">Approve</Button>
                                            <Button colorScheme="red">Reject</Button>
                                        </ButtonGroup>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                    : <Center h={"100%"} w={"100%"} my="2em">There is no training requested by student.</Center>
            }
        </Card>
    );
};

export default TrainingRequest;