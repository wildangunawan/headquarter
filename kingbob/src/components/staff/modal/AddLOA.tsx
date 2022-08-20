import { Button, Input, FormControl, FormLabel, Flex, VStack } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { useState } from "react";

const AddLOA = () => {
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
                title: `LOA for 1000005 issued`,
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
        title: `Add new LOA`,
        body: <VStack gap={2}>
            <FormControl>
                <FormLabel>Controller&apos;s CID</FormLabel>
                <Input />
            </FormControl>
            <FormControl>
                <FormLabel>Starting from</FormLabel>
                <Input type="datetime-local" />
            </FormControl>
            <FormControl>
                <FormLabel>Leave until</FormLabel>
                <Input type="datetime-local" />
            </FormControl>
            <FormControl>
                <FormLabel>Reason</FormLabel>
                <Input />
            </FormControl>
        </VStack>,
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

export default AddLOA;