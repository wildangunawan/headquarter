import { Button, Text, Flex, Input } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { useState } from "react";

type StudentData = {
    id: string;
    name: string;
}

const IssueSolo = () => {
    // Request state
    const [loading, setLoading] = useState(false);
    const [studentData, setStudentData] = useState<StudentData>();

    // For demo
    const [position, setPosition] = useState('');

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
                title: `Solo for ${studentData?.name} (${studentData?.id}) issued`,
                description: "We have notified Bob via email as well about this",
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
        title: `Issue solo for ${studentData?.name} (${studentData?.id})`,
        body: <>
            <Flex direction={"column"} gap={2} mb={4}>
                <Text>Position</Text>
                <Input placeholder='Use WADD_TWR to show maximum 3 solo/position error' value={position} onChange={(e) => setPosition(e.target.value)} />

                {position == "WADD_TWR" && <Text color={'red'}>{`${studentData?.name} already have 3 ${position} solo. No more solo for ${position} can be issued.`}</Text>}
            </Flex>
            <Flex direction={"column"} gap={2} mb={4}>
                <Text>Start</Text>
                <Input type="date" />
            </Flex>
            <Flex direction={"column"} gap={2}>
                <Text>End</Text>
                <Input type="date" />
            </Flex>
        </>,
        footer: <Button
            colorScheme='blue'
            size={"md"}
            onClick={submitApplication}
            isLoading={loading}
            loadingText="Submitting"
            isDisabled={position === "WADD_TWR"}
        >
            Submit
        </Button>
    })

    return { onOpen, modal, setStudentData };
};

export default IssueSolo;