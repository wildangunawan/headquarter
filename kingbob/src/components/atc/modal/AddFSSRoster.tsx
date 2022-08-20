import { Button, Flex, Input, FormControl, FormLabel } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { useState } from "react";

const AddFSSRoster = () => {
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
                title: `1000005 added to ASEA_FSS roster`,
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
        title: `Add new FSS roster`,
        body: <Flex direction="column" gap={4}>
            <FormControl>
                <FormLabel>CID</FormLabel>
                <Input />
            </FormControl>

            <FormControl>
                <FormLabel>Position</FormLabel>
                <Input />
            </FormControl>
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
    })

    return { onOpen, modal };
};

export default AddFSSRoster;