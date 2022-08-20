import Card from "@components/card/Card";
import { Text, useColorModeValue } from "@chakra-ui/react";

// Full calendar
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const UpcomingBookings = () => {
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
                Upcoming Bookings
            </Text>

            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={[
                    { title: 'Jakarta Turn Around 1', start: '2022-08-02T11:00:00Z', end: '2022-08-02T14:00:00Z' },
                    { title: 'Jakarta Turn Around 2', start: '2022-08-09 11:00', end: '2022-08-09 14:00', color: '#ff0000' },

                ]}
                eventDisplay="block"
            />
        </Card>
    );
};

export default UpcomingBookings;