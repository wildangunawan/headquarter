import { Button, Text, Flex, Input, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { useState } from "react";

type MemberData = {
    id: string;
    name: string;
}

const ControllingApproval = () => {
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
                title: `Approval for ${memberData?.name} (${memberData?.id}) updated`,
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
        title: `Set controlling approval for ${memberData?.name} (${memberData?.id})`,
        body: <>
            <Flex>
                <FormControl display='flex' alignItems='center' gap={2}>
                    <Switch id='del' colorScheme='green' />
                    <FormLabel htmlFor='del' mb='0' fontSize={"sm"} fontWeight={400}>
                        DEL
                    </FormLabel>
                </FormControl>

                <FormControl display='flex' alignItems='center' gap={2}>
                    <Switch id='gnd' colorScheme='green' />
                    <FormLabel htmlFor='gnd' mb='0' fontSize={"sm"} fontWeight={400}>
                        GND
                    </FormLabel>
                </FormControl>

                <FormControl display='flex' alignItems='center' gap={2}>
                    <Switch id='twr' colorScheme='green' />
                    <FormLabel htmlFor='twr' mb='0' fontSize={"sm"} fontWeight={400}>
                        TWR
                    </FormLabel>
                </FormControl>

                <FormControl display='flex' alignItems='center' gap={2}>
                    <Switch id='app' colorScheme='green' />
                    <FormLabel htmlFor='app' mb='0' fontSize={"sm"} fontWeight={400}>
                        APP
                    </FormLabel>
                </FormControl>

                <FormControl display='flex' alignItems='center' gap={2}>
                    <Switch id='ctr' colorScheme='green' />
                    <FormLabel htmlFor='ctr' mb='0' fontSize={"sm"} fontWeight={400}>
                        CTR
                    </FormLabel>
                </FormControl>
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

export default ControllingApproval;