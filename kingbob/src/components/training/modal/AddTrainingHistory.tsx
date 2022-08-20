import { Button, Text, Flex, Input, Select, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import Router from "next/router";
import { useState } from "react";

const AddTrainingHistory = () => {
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
                title: `Training data submitted`,
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

            Router.push("/training/detail/abcd")
        }, 2000)
    }

    const { onOpen, onClose, modal, toast } = useModal({
        title: `Add training`,
        body: <>
            <Flex direction={"column"} gap={2} mb={4}>
                <Text>Training at which vACC?</Text>
                <Select>
                    <option value='option1'>Hong Kong vACC</option>
                    <option value='option2'>Indonesia vACC</option>
                </Select>
            </Flex>
            <Flex direction={"column"} gap={2} mb={4}>
                <Text>When did/will it happen?</Text>
                <Input type={"datetime-local"} />
            </Flex>
            <FormControl display='flex' alignItems='center' gap={2}>
                <Switch id='email-alerts' colorScheme='green' defaultChecked />
                <FormLabel htmlFor='email-alerts' mb='0' fontSize={"sm"} fontWeight={400}>
                    Open session detail after submission
                </FormLabel>
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

export default AddTrainingHistory;