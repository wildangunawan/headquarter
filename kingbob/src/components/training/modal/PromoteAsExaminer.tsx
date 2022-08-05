import { Button, Text, Flex, FormControl, Switch, FormLabel } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { useState } from "react";

type MemberData = {
    id: string;
    name: string;
}

const PromoteAsExaminer = () => {
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
        title: `Promote ${memberData?.name} (${memberData?.id}) as an examiner`,
        body: <Flex direction={"column"} gap={2} mb={4}>
            <Text>{memberData?.name} can examine</Text>
            <Flex>
                {/* S2 */}
                <FormControl display='flex' alignItems='center' gap={2}>
                    <Switch id='can-examine-s2' colorScheme='green' />
                    <FormLabel htmlFor='can-examine-s2' mb='0' fontSize={"sm"} fontWeight={400}>
                        S2 CPT
                    </FormLabel>
                </FormControl>

                {/* S3 */}
                <FormControl display='flex' alignItems='center' gap={2}>
                    <Switch id='can-examine-s3' colorScheme='green' />
                    <FormLabel htmlFor='can-examine-s3' mb='0' fontSize={"sm"} fontWeight={400}>
                        S3 CPT
                    </FormLabel>
                </FormControl>

                {/* C1 */}
                <FormControl display='flex' alignItems='center' gap={2}>
                    <Switch id='can-examine-c1' colorScheme='green' />
                    <FormLabel htmlFor='can-examine-c1' mb='0' fontSize={"sm"} fontWeight={400}>
                        C1 CPT
                    </FormLabel>
                </FormControl>
            </Flex>
        </Flex>
        ,
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

export default PromoteAsExaminer;