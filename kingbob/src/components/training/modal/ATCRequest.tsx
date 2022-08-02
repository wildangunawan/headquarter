import { Button, Flex, Select, Text, Textarea } from '@chakra-ui/react';
import useModal from '@hooks/useModal';
import React, { useState } from 'react';

const ATCRequest = () => {
    const [loading, setLoading] = useState(false)
    const [requestSubmitted, setRequestSubmitted] = useState(false)

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
                title: 'Request submitted',
                description: "We'll report whether you're accepted or rejected",
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

            // Set request submitted
            setRequestSubmitted(true)
        }, 2000)
    }

    const { onOpen, onClose, modal, toast } = useModal({
        title: 'ATC Request',
        body: <>
            <Flex direction={"column"} gap={2} mb={4}>
                <Text>Choose your vACC</Text>
                <Select>
                    <option value='option1'>Hong Kong vACC</option>
                    <option value='option2'>Indonesia vACC</option>
                    <option value='option3'>Malaysia vACC</option>
                    <option value='option3'>Any other vACC, I am too tired to write it one by one</option>
                </Select>
            </Flex>
            <Flex direction={"column"} gap={2}>
                <Text>Free text area</Text>
                <Textarea placeholder={`1. Why do you choose us?\n2. Do you have any real aviation experiences?`}></Textarea>
                <Text fontSize={"sm"}>Some vACC may request you to put your reason and/or reasons why you choose them. Use this free text area to answer that.</Text>
            </Flex>
        </>,
        footer: <Button
            colorScheme='blue'
            p={6}
            onClick={submitApplication}
            isLoading={loading}
            loadingText="Submitting"
        >
            Submit
        </Button>
    });

    return {
        onOpen, modal, requestSubmitted
    };
};

export default ATCRequest;