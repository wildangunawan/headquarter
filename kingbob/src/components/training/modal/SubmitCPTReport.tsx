import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { useState } from "react";

const SubmitCPTReport = () => {
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
                title: 'Report submitted. Thanks for your contribution!',
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
        title: "CPT Report for King Bob's S2 exam - 31 Aug 2022",
        body: <>
            <FormControl>
                <FormLabel>Report URL</FormLabel>
                <Input type='text' />
            </FormControl>
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

export default SubmitCPTReport;