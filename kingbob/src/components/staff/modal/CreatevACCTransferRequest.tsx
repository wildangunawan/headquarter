import { Button, Input, FormControl, FormLabel, Select, Flex, VStack, Switch, Textarea } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { useState } from "react";

interface IFormRequest {
    type: number;
    cid: number;
    reason: string;
    would_like_to_request_for_training_data: boolean;
}

const CreatevACCTransferRequest = () => {
    // Request state
    const [loading, setLoading] = useState(false);

    // Part
    const [part, setPart] = useState(1);

    // Form data
    const [formData, setFormData] = useState<IFormRequest>({
        type: 1,
        cid: 0,
        reason: "",
        would_like_to_request_for_training_data: false,
    });

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
                title: `1000005 added as visitor at Indonesia vACC`,
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
        title: `Create vACC transfer request for a member`,
        body: part === 1
            ? <FormControl>
                <FormLabel>Type of transfer</FormLabel>
                <Select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: Number(e.target.value) })}
                >
                    <option value={1}>New ATC applicant (Pilot/OBS rated)</option>
                    <option value={2}>Member transfer request to my vACC (member already holds ATC rating)</option>
                </Select>
            </FormControl>
            : <VStack spacing={2}>
                <FormControl>
                    <FormLabel>Member&apos;s CID</FormLabel>
                    <Input
                        value={formData.cid}
                        onChange={(e) => setFormData({ ...formData, cid: Number(e.target.value) })}
                    />
                </FormControl>

                {
                    formData.type === 2 &&
                    <>
                        <FormControl>
                            <FormLabel>Member&apos;s Reason</FormLabel>
                            <Textarea
                                value={formData.reason}
                                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            />
                        </FormControl>

                        <FormControl display='flex' alignItems='center' gap={2}>
                            <Switch
                                id='request-training-data'
                                onChange={(e) => setFormData({ ...formData, would_like_to_request_for_training_data: e.target.checked })}
                            />
                            <FormLabel htmlFor='request-training-data' mb='0'>
                                I would like to request for training data.
                            </FormLabel>
                        </FormControl>
                    </>
                }

                <FormControl display='flex' alignItems='center' gap={2}>
                    <Switch id='data-is-correct' />
                    <FormLabel htmlFor='data-is-correct' mb='0'>
                        I have verified all data is correct and wish to submit.
                    </FormLabel>
                </FormControl>
            </VStack>,
        footer: part === 1
            ? <Button
                colorScheme='blue'
                size={"md"}
                onClick={() => setPart(2)}
                isLoading={loading}
                loadingText="Submitting"
            >
                Next
            </Button>
            : <Flex gap={1}>
                <Button
                    colorScheme='blue'
                    variant="outline"
                    size={"md"}
                    onClick={() => setPart(1)}
                >
                    Back
                </Button>
                <Button
                    colorScheme='blue'
                    size={"md"}
                    onClick={submitApplication}
                    isLoading={loading}
                    loadingText="Submitting"
                >
                    Submit
                </Button>
            </Flex>
    })

    return { onOpen, modal };
};

export default CreatevACCTransferRequest;