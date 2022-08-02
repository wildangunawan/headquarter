import { Flex, Select, Textarea, Button, Text } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { useState } from "react";

const TrainingRequest = () => {
    // Request state
    const [trainingRequested, setTrainingRequested] = useState(false);
    const [loading, setLoading] = useState(false);

    const submitApplication = () => {
        // Set loading
        setLoading(true);

        // TODO: Submit to API
        setTimeout(() => {
            // Close modal
            onClose();

            // Set loading
            setLoading(false);

            // Set Training requested to true
            setTrainingRequested(true);

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
        title: "Request Training",
        body: <>
            <Flex direction={"column"} gap={2} mb={4}>
                <Text>Choose vACC</Text>
                <Select>
                    <option value='option1'>Hong Kong vACC</option>
                    <option value='option2'>Indonesia vACC</option>
                    <option value='option3'>Malaysia vACC</option>
                    <option value='option3'>Any other vACC, I am too tired to write it one by one</option>
                </Select>
            </Flex>
            <Flex direction={"column"} gap={2}>
                <Text>Any preferred date?</Text>
                <Textarea placeholder={`Tell your mentor when you're able to do the training`}></Textarea>
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

    return {
        onOpen, modal, trainingRequested
    };
};

export default TrainingRequest;