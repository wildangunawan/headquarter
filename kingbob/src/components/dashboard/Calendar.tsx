import Card from "@components/card/Card";

// Full calendar
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface IProps {
    [x: string]: any;
}

const Calendar = ({ ...rest }: IProps) => {
    return (
        <Card {...rest}>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={[
                    { title: 'Jakarta Turn Around 1', start: '2022-08-02T11:00:00Z', end: '2022-08-02T14:00:00Z' },
                    { title: 'Jakarta Turn Around 2', start: '2022-08-09 11:00', end: '2022-08-09 14:00' },
                ]}
            />
        </Card>
    );
};

export default Calendar;