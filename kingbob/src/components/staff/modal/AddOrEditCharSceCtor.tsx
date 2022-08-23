import { Button, Input, FormControl, FormLabel, VStack } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { Select } from "chakra-react-select";
import { useState } from "react";

interface IData {
    type: string;
    name: string;
    link: string;
}

const charscectorTypes = [
    { value: "chart", label: "Chart" },
    { value: "scenery", label: "Scenery" },
    { value: "sct", label: "Sector files" },
    { value: "sop", label: "Standard Operational Procedures (SOP)" },
    { value: "misc", label: "Miscellaneous" },
]

const AddOrEditCharSceCtor = () => {
    // Request state
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<IData>({
        type: "",
        name: "",
        link: "",
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
        title: data.name == "" ? "Add new data" : `Edit ${data.name}`,
        body: <VStack spacing={2}>
            <FormControl>
                <FormLabel htmlFor="type">Type</FormLabel>
                <Select
                    options={charscectorTypes}
                    id="type"
                    value={
                        charscectorTypes.find(type => type.value === data?.type) ?? charscectorTypes[0]
                    }
                    onChange={(e) =>
                        e != null && setData({
                            ...data,
                            type: e.value,
                        })
                    }
                    isSearchable={false}
                />
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                    id="name"
                    placeholder="Name"
                    value={data?.name}
                    onChange={(e) =>
                        setData({
                            ...data,
                            name: e.target.value,
                        })
                    }
                />
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="link">Link</FormLabel>
                <Input
                    id="link"
                    placeholder="Link"
                    value={data?.link}
                    onChange={(e) =>
                        setData({
                            ...data,
                            link: e.target.value,
                        })
                    }
                />
            </FormControl>
        </VStack>,
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

    return { onOpen, modal, setData };
};

export default AddOrEditCharSceCtor;