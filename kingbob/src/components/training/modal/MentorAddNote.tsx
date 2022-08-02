import { Button, Text, Flex, FormControl, FormLabel, Select, Switch, Textarea } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { useState } from "react";

const MentorAddNote = () => {
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
                title: 'Note added',
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
        title: "Confirmation - Request CPT",
        body: <>
            <Flex direction={"column"} gap={2} mb={4}>
                <Text>Comment / note</Text>
                <Textarea />
            </Flex>
            <Flex direction={"column"} gap={2} mb={4}>
                <Text>For training</Text>
                <Select>
                    <option>None</option>
                    <option>#123 at 25 Aug 2022</option>
                    <option>#124 at 26 Aug 2022</option>
                </Select>
                <Text fontSize={"xs"}>If this note is not about any training, select &quot;None&quot;</Text>
            </Flex>

            <FormControl display='flex' alignItems='center' gap={2}>
                <Switch id='email-alerts' colorScheme='green' />
                <FormLabel htmlFor='email-alerts' mb='0' fontSize={"sm"} fontWeight={400}>
                    Student can see this note
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

export default MentorAddNote;