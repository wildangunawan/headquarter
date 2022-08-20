import { Button, Flex, Select, Text } from '@chakra-ui/react';
import useModal from '@hooks/useModal';
import { useState } from 'react';
import { useRouter } from "next/router"

const TransferTicket = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

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
                title: 'Ticket transfered successfully to South East Asia Staff',
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

            // Go to tickets list since the ticket was transfered
            router.push("/support")
        }, 2000)
    }

    const { onOpen, onClose, modal, toast } = useModal({
        title: 'ATC Request',
        body: <Flex direction={"column"} gap={2} mb={4}>
            <Text>Select departement</Text>
            <Select>
                <option value='option1'>South East Asia Staff</option>
                <option value='option2'>Hong Kong vACC</option>
                <option value='option2'>Malaysia vACC</option>
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
        onOpen, modal
    };
};

export default TransferTicket;