// This is non-event ATC booking
import { VStack, Flex, Button, Text, useColorModeValue, Alert, AlertIcon } from "@chakra-ui/react";
import CreateBooking from "@components/atc/booking/CreateBooking";
import UpcomingBookings from "@components/atc/booking/UpcomingBookings";
import AdminLayout from "@layouts/admin";

const ATCBooking = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="ATC Booking">
            <VStack spacing={"20px"} align="stretch">
                <Flex align="center" justify={"space-between"} gap={"20px"}>
                    <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                        ATC Booking
                    </Text>
                    <Button
                        as="a"
                        colorScheme="blue"
                        whiteSpace={"unset"}
                        textAlign="center"
                        py={{ base: "1.5em", sm: "unset" }}
                    >Rules for bookings</Button>
                </Flex>

                {/* Rules alert */}
                <Alert status='info'>
                    <AlertIcon />
                    Make sure you have read the rules before placing a booking.
                </Alert>

                {/* Place booking */}
                <CreateBooking />

                {/* Upcoming bookings */}
                <UpcomingBookings />
            </VStack>
        </AdminLayout>
    );
};

export default ATCBooking;