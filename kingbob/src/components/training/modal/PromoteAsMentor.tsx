import { Button, Text, Flex, FormControl, Switch, FormLabel } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { useState } from "react";

type MemberData = {
    id: string;
    name: string;
}

const PromoteAsMentor = () => {
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
                title: `${memberData?.name} (${memberData?.id}) promoted as mentor at Indonesia vACC`,
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
        title: `Promote ${memberData?.name} (${memberData?.id}) as a mentor`,
        body: <>
            <Flex direction={"column"} gap={2} mb={4}>
                <Text>{memberData?.name} can mentor</Text>
                <Flex>
                    {/* S1 */}
                    <FormControl display='flex' alignItems='center' gap={2}>
                        <Switch id='can-mentor-s1' colorScheme='green' />
                        <FormLabel htmlFor='can-mentor-s1' mb='0' fontSize={"sm"} fontWeight={400}>
                            S1
                        </FormLabel>
                    </FormControl>

                    {/* S2 */}
                    <FormControl display='flex' alignItems='center' gap={2}>
                        <Switch id='can-mentor-s2' colorScheme='green' />
                        <FormLabel htmlFor='can-mentor-s2' mb='0' fontSize={"sm"} fontWeight={400}>
                            S2
                        </FormLabel>
                    </FormControl>

                    {/* S3 */}
                    <FormControl display='flex' alignItems='center' gap={2}>
                        <Switch id='can-mentor-s3' colorScheme='green' />
                        <FormLabel htmlFor='can-mentor-s3' mb='0' fontSize={"sm"} fontWeight={400}>
                            S3
                        </FormLabel>
                    </FormControl>
                </Flex>
            </Flex>

            <FormControl display='flex' alignItems='center' gap={2}>
                <Switch id='can-issue-solo' colorScheme='green' />
                <FormLabel htmlFor='can-issue-solo' mb='0' fontSize={"sm"} fontWeight={400}>
                    {memberData?.name} can issue solo
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

    return { onOpen, modal, setMemberData };
};

export default PromoteAsMentor;