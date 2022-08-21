import { VStack, Flex, Button, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Text, Link, useColorModeValue, Alert, AlertIcon } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AddVisitor from "@components/staff/modal/AddVisitor";
import AdminLayout from "@layouts/admin";
import NavLink from "next/link";
import { ReactElement } from "react";

const VisitorList = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    // Modal
    const { onOpen, modal } = AddVisitor();

    return (
        <>
            <VStack spacing={"20px"} align="stretch">
                <Flex align="center" justify={"space-between"}>
                    <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                        Visitors List
                    </Text>
                    <Button colorScheme={"blue"} onClick={onOpen}>Add visitor</Button>
                </Flex>

                <Alert status="info">
                    <AlertIcon />
                    To update visitor&apos;s controlling approval, go to Training Center &gt; Staff Center and look for Member List table.
                </Alert>

                <Card>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Controller</Th>
                                    <Th>Rating</Th>
                                    <Th>Origin</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <NavLink href="/profile/1000000" passHref>
                                            <Link color="brand.500">Kevin (1000000)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>Instructor (I1)</Td>
                                    <Td>EUD / FRA</Td>
                                    <Td>
                                        <Button colorScheme={"red"}>Remove</Button>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        <NavLink href="/profile/1000000" passHref>
                                            <Link color="brand.500">Kevin (1000000)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>Supervisor (SUP)</Td>
                                    <Td>SEA / MYS</Td>
                                    <Td>
                                        <Button colorScheme={"red"}>Remove</Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Card>
            </VStack>

            {/* Modal */}
            {modal}
        </>
    );
};

VisitorList.getLayout = (page: ReactElement) => <AdminLayout title="Visitors List">{page}</AdminLayout>
export default VisitorList;