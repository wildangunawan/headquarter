import { Link, Text, useColorModeValue, Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Card from '@components/card/Card';
import NavLink from 'next/link';

// Too bad that this should begun with uppercase letter.
// Otherwise, React will say it's not a valid React component.
const VACCsInDivision = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <Card>
            <Text
                me="auto"
                color={textColor}
                fontSize="xl"
                fontWeight="700"
                lineHeight="100%"
                px="15px" py="10px"
            >
                vACCs in South East Asia
            </Text>

            <Box overflowX={"auto"}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th textTransform={"unset"}>vACC</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Hong Kong vACC</Td>
                            <Td>
                                <NavLink href="/vacc/HK" passHref>
                                    <Link color="brand.500">View vACC</Link>
                                </NavLink>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Indonesia vACC</Td>
                            <Td>
                                <NavLink href="/vacc/HK" passHref>
                                    <Link color="brand.500">View vACC</Link>
                                </NavLink>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Malaysia vACC</Td>
                            <Td>
                                <NavLink href="/vacc/HK" passHref>
                                    <Link color="brand.500">View vACC</Link>
                                </NavLink>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Myanmar vACC</Td>
                            <Td>
                                <NavLink href="/vacc/HK" passHref>
                                    <Link color="brand.500">View vACC</Link>
                                </NavLink>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Phillipines vACC</Td>
                            <Td>
                                <NavLink href="/vacc/HK" passHref>
                                    <Link color="brand.500">View vACC</Link>
                                </NavLink>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Singapore vACC</Td>
                            <Td>
                                <NavLink href="/vacc/HK" passHref>
                                    <Link color="brand.500">View vACC</Link>
                                </NavLink>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Thailand vACC</Td>
                            <Td>
                                <NavLink href="/vacc/HK" passHref>
                                    <Link color="brand.500">View vACC</Link>
                                </NavLink>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Vietnam - Cambodia - Laos vACC</Td>
                            <Td>
                                <NavLink href="/vacc/HK" passHref>
                                    <Link color="brand.500">View vACC</Link>
                                </NavLink>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Card>
    );
};

export default VACCsInDivision;