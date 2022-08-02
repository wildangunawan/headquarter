import { Button, Text, ButtonGroup } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { useState } from "react";

const CPTRequest = () => {
    // Request state
    const [CPTRequested, setCPTRequested] = useState(false);
    const [loading, setLoading] = useState(false);

    const closeModal = () => onClose();
    const submitApplication = () => {
        // Set loading
        setLoading(true);

        // TODO: Submit to API
        setTimeout(() => {
            // Close modal
            onClose();

            // Set loading
            setLoading(false);

            // Set CPT requested to true
            setCPTRequested(true);

            // Show toast that application was submitted
            toast({
                title: 'Request submitted',
                description: "Respective staff be in touch with you ASAP",
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
        }, 2000);
    }

    const { onOpen, onClose, modal, toast } = useModal({
        title: "Confirmation - Request CPT",
        body: <Text>Are you sure that you want to proceed with your request? Once you submit your request, respective staff will process the request and you will be notified by email.</Text>,
        footer: <ButtonGroup spacing={3} size={"md"}>
            <Button
                colorScheme='red'
                variant={'outline'}
                onClick={closeModal}
            >
                Cancel, I&apos;m not ready yet
            </Button>
            <Button
                colorScheme='green'
                onClick={submitApplication}
                isLoading={loading}
                loadingText="Submitting"
            >
                Yes, I&apos;m fully ready. LFG.
            </Button>
        </ButtonGroup>
    })

    return {
        onOpen, modal, CPTRequested
    };
};

export default CPTRequest;