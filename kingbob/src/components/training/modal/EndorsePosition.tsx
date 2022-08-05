import { Button, Text, Flex, Input } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { useState } from "react";

type MemberData = {
    id: string;
    name: string;
}

const EndorsePosition = () => {
    // Request state
    const [loading, setLoading] = useState(false);
    const [memberData, setMemberData] = useState<MemberData>();

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
                title: `Endorsement for ${memberData?.name} (${memberData?.id}) issued`,
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
        title: `Endorse a position for ${memberData?.name} (${memberData?.id})`,
        body: <>
            <Flex direction={"column"} gap={2} mb={4}>
                <Text>Position</Text>
                <Input placeholder='WIII_TWR' />
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

    return { onOpen, modal, setMemberData };
};

export default EndorsePosition;