import { Button, Text, Flex, Select, Input, VStack } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { useState } from "react";

const CreateBooking = () => {
    // Request state
    const [loading, setLoading] = useState(false);

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
                title: 'Request for WIII_APP submitted',
                description: "We'll let you know once the respective staff have approved or rejected your request.",
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
        }, 2000)
    }

    const { onOpen, onClose, modal, toast } = useModal({
        title: "Request for a position",
        body: <>
            <VStack spacing={-0.5} fontSize="xs" mb={4}>
                <Text fontWeight={"bold"}>Only book ATC positions you are approved for!</Text>
                <Text>Approver can edit your booking time and position. Check daily to see if there is any change.</Text>
                <Text>You will also be notified by email and HQ notification about your booking detail (and its change if any).</Text>
            </VStack>

            <Flex direction={"column"} gap={2} mb={4}>
                <Text>Choose position</Text>
                <Select>
                    <option>WIII_TWR</option>
                    <option>WIII_APP</option>
                    <option>WIIF_CTR</option>
                </Select>
                <Text fontSize={"sm"}>Note for this position: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui!</Text>
            </Flex>

            <Flex direction={"column"} gap={2} mb={4}>
                <Text>Start</Text>
                <Input type="datetime-local" />
            </Flex>

            <Flex direction={"column"} gap={2} mb={4}>
                <Text>End</Text>
                <Input type="datetime-local" />
            </Flex>
        </>,
        footer: <Button
            colorScheme='blue'
            size={"md"}
            onClick={submitApplication}
            isLoading={loading}
            loadingText="Submitting"
        >
            Submit
        </Button>
    })

    return { onOpen, modal };
};

export default CreateBooking;