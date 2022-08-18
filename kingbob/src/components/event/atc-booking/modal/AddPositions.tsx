import { Button, Text, Flex, Input } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { AsyncCreatableSelect } from "chakra-react-select";
import { useState } from "react";

interface SelectData {
    value: string;
    label: string;
}

const AddPositions = () => {
    // Request state
    const [loading, setLoading] = useState(false);

    const options: SelectData[] = [
        { value: 'preset_wiii', label: 'Preset of WIII' },
        { value: 'WAAF_CTR', label: 'WAAF_CTR' },
    ]

    const asyncSelect = (inputValue: string) => {
        return new Promise<SelectData[]>((resolve) => {
            setTimeout(() => {
                resolve([
                    { value: 'WIII_APP', label: 'WIII_APP' },
                    { value: 'WIII_TWR', label: 'WIII_TWR' },
                    { value: 'WIII_GND', label: 'WIII_GND' },
                    { value: 'WIII_1_GND', label: 'WIII_1_GND' },
                    { value: 'WIII_2_GND', label: 'WIII_2_GND' },
                    { value: 'WIII_DEL', label: 'WIII_DEL' },
                ]);
            }, 1000);
        });
    }

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
                title: 'Request for WIII_APP submitted',
                description: "We'll let you know once the respective staff have approved or rejected your request.",
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
        title: "Add position(s)",
        body: <>
            <Flex direction={"column"} gap={2} mb={4}>
                <Text>Position</Text>
                <AsyncCreatableSelect defaultOptions={options} loadOptions={asyncSelect} />
            </Flex>

            <Flex direction={"column"} gap={2} mb={4}>
                <Text>Note for this position</Text>
                <Input />
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

    return { onOpen, modal };
};

export default AddPositions;