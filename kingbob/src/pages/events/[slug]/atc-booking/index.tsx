import { useColorModeValue, Text, VStack } from "@chakra-ui/react";
import BookingPositions from "@components/event/atc-booking/BookingPositions";
import BookingEventWideNotes from "@components/event/atc-booking/BookingEventWideNotes";
import BookingList from "@components/event/atc-booking/BookingList";
import AdminLayout from "@layouts/admin";
import { ReactElement } from "react";

const ATCBooking = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <VStack spacing={"20px"} align="stretch">
            {/* Header */}
            <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                ATC bookings for Swagatam Singapore
            </Text>

            {/* Event wide notes */}
            <BookingPositions />

            {/* Event wide notes */}
            <BookingEventWideNotes />

            {/* Bookings list */}
            <BookingList />
        </VStack>
    );
};

ATCBooking.getLayout = (page: ReactElement) => <AdminLayout title="ATC Booking for Swagatam Singapore">{page}</AdminLayout>
export default ATCBooking;