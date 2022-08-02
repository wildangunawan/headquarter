import { Button, Flex, Select, Text } from '@chakra-ui/react';
import useModal from '@hooks/useModal';
import React, { useState } from 'react';

const AssignTicket = () => {
    const [loading, setLoading] = useState(false)
    const [ticketAssigned, setTicketAssigned] = useState(false)

    const submitApplication = () => {
        // Set loading
        setLoading(true)

        // TODO: Make request to API
        // We'll use setTimeout for now
        setTimeout(() => {
            // Reset loading
            setLoading(false)

            // Close modal
            onClose()

            // Show toast that application was submitted
            toast({
                title: 'Ticket assigned successfully to King Bob (1000003)',
                status: 'success',
                position: 'bottom-right',
                duration: 5000,
                isClosable: true,
            })

            // Show toast that application was failed to submit
            toast({
                title: 'Failed to submit request',
                description: "There is an error in our system. Please try again.",
                status: 'error',
                position: 'bottom-right',
                duration: 5000,
                isClosable: true,
            })

            // Set ticket assigned
            setTicketAssigned(true)
        }, 2000)
    }

    const { onOpen, onClose, modal, toast } = useModal({
        title: 'ATC Request',
        body: <Flex direction={"column"} gap={2} mb={4}>
            <Text>Select staff</Text>
            <Select>
                <option value='option1'>King Bob (1000003)</option>
                <option value='option2'>Mel (1000006)</option>
            </Select>
        </Flex>,
        footer: <Button
            colorScheme='blue'
            size={"md"}
            onClick={submitApplication}
            isLoading={loading}
            loadingText="Submitting"
        >
            Submit
        </Button>
    });

    return {
        onOpen, modal, ticketAssigned
    };
};

export default AssignTicket;