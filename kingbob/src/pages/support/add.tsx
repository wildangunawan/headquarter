import { VStack, Text, useColorModeValue } from '@chakra-ui/react';
import FAQRecommendation from '@components/support/add/FAQRecommendation';
import TicketForm from '@components/support/add/TicketForm';
import AdminLayout from '@layouts/admin';
import { useState, ReactElement } from 'react';

const CreateTicket = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const [subject, setSubject] = useState('');

    return (
            <VStack spacing={"20px"} align="stretch">
                {/* Header */}
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Create a ticket
                </Text>

                {/* Data */}
                <TicketForm onSubjectChange={setSubject} />
                <FAQRecommendation subject={subject} />
            </VStack>
    );
};

CreateTicket.getLayout = (page: ReactElement) => <AdminLayout title="Create a new ticket">{page}</AdminLayout>
export default CreateTicket;