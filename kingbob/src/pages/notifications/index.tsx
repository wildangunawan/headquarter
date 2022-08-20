import { Table, Thead, Tr, Th, Tbody, Td, Box, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";

const NotificationList = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="Notifications">
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Notifications
                </Text>

                <Card>
                    <Box overflowX={"auto"}>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Detail</Th>
                                    <Th>Timestamp</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Text fontWeight={800}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, delectus!</Text>
                                    </Td>
                                    <Td fontWeight={800}>31 Aug 2022 13:00 UTC</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, delectus!</Text>
                                    </Td>
                                    <Td>31 Aug 2022 13:00 UTC</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, delectus!</Text>
                                    </Td>
                                    <Td>31 Aug 2022 13:00 UTC</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                </Card>
            </VStack>
        </AdminLayout>
    );
};

export default NotificationList;