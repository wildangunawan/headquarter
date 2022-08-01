import { Button, Flex, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import PendingTickets from '@components/support/PendingTickets';
import ResolvedTickets from '@components/support/ResolvedTickets';
import AdminLayout from '@layouts/admin';
import NavLink from "next/link"

const Tickets = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="Ticket #123">
            <VStack spacing={"20px"} align="stretch">
                {/* Header */}
                <Flex justify={"space-between"}>
                    <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                        Support Center
                    </Text>
                    <NavLink href="/admin/training/me" passHref>
                        <Button as="a" colorScheme="blue">Create Ticket</Button>
                    </NavLink>
                </Flex>

                {/* Data */}
                <PendingTickets />
                <ResolvedTickets />
            </VStack>
        </AdminLayout>
    );
};

export default Tickets;