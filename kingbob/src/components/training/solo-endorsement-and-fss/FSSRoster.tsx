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
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import { useState } from 'react';

const FSSRoster = () => {
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
                    FSS Roster
                </Text>
                <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
            </Flex>

            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Name (CID)</Th>
                            <Th>Approved for</Th>
                            <Th>Approved by</Th>
                            <Th>Since</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            showMePls
                            && <>
                                <Tr>
                                    <Td>
                                        <NavLink href="/admin/profile/1000000" passHref>
                                            <Link color="brand.500">Kevin (1000000)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>ASEA_FSS</Td>
                                    <Td>
                                        <NavLink href="/admin/profile/1000005" passHref>
                                            <Link color="brand.500">Gru (1000005)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>3 Aug 2022</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <NavLink href="/admin/profile/1000000" passHref>
                                            <Link color="brand.500">Kevin (1000000)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>ASEA_FSS</Td>
                                    <Td>
                                        <NavLink href="/admin/profile/1000005" passHref>
                                            <Link color="brand.500">Gru (1000005)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>3 Aug 2022</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <NavLink href="/admin/profile/1000000" passHref>
                                            <Link color="brand.500">Kevin (1000000)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>ASEA_FSS</Td>
                                    <Td>
                                        <NavLink href="/admin/profile/1000005" passHref>
                                            <Link color="brand.500">Gru (1000005)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>3 Aug 2022</Td>
                                </Tr>

                            </>
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    );
};

export default FSSRoster;