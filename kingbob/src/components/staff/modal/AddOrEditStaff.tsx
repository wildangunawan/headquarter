import { Button, Input, FormControl, FormLabel, VStack } from "@chakra-ui/react";
import useModal from "@hooks/useModal";
import { Select } from "chakra-react-select";
import { useState } from "react";

interface IPosition {
    callsign: string;
    position: string;
    assignedTo: string;
    region: string;
    division: string;
    vACC: string;
    group: string;
}

const demoRegion = [
    { value: "APAC", label: "Asia Pacific (APAC)" },
]

const demoDivision = [
    { value: "SEA", label: "South East Asia (SEA)" },
    { value: "WA", label: "West Asia (WA)" },
]

const demoVACC = [
    { value: "IDN", label: "Indonesia vACC" },
    { value: "MYS", label: "Malaysia vACC" },
]

const staffGroups = [
    { value: "vacc_director", label: "vACC Director" },
    { value: "vacc_deputy_director", label: "vACC Deputy Director" },
    { value: "vacc_atc_training_director", label: "vACC ATC Training Director" },
]

const demoUsers = [
    { value: "1000000", label: "Kevin (1000000)" },
    { value: "1000005", label: "Gru (1000005)" },
    { value: "1000006", label: "Mel (1000006)" },
]

const AddOrEditStaff = () => {
    // Request state
    const [loading, setLoading] = useState(false);
    const [position, setPosition] = useState<IPosition>({
        callsign: "",
        position: "",
        assignedTo: "",
        region: "",
        division: "",
        vACC: "",
        group: "",
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
        title: position.callsign == "" ? "Add new position" : `Edit ${position.callsign}`,
        body: <VStack spacing={2}>
            <FormControl>
                <FormLabel htmlFor="region">Region</FormLabel>
                <Select
                    options={demoRegion}
                    id="region"
                    value={
                        demoRegion.find(region => region.value === position?.region) ?? demoRegion[0]
                    }
                    onChange={(e) =>
                        e != null && setPosition({
                            ...position,
                            region: e.value,
                        })
                    }
                    isSearchable={false}
                />
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="division">Division</FormLabel>
                <Select
                    options={demoDivision}
                    id="division"
                    value={
                        demoDivision.find(division => division.value === position?.division) ?? demoDivision[0]
                    }
                    onChange={(e) =>
                        e != null && setPosition({
                            ...position,
                            division: e.value,
                        })
                    }
                    isSearchable={false}
                />
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="vacc">vACC</FormLabel>
                <Select
                    options={demoVACC}
                    id="vacc"
                    value={
                        demoVACC.find(vACC => vACC.value === position?.vACC) ?? demoVACC[0]
                    }
                    onChange={(e) =>
                        e != null && setPosition({
                            ...position,
                            vACC: e.value,
                        })
                    }
                    isSearchable={false}
                />
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="callsign">Callsign</FormLabel>
                <Input
                    id="callsign"
                    placeholder="Callsign"
                    value={position?.callsign}
                    onChange={(e) =>
                        setPosition({
                            ...position,
                            callsign: e.target.value,
                        })
                    }
                />
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="position">Position Name</FormLabel>
                <Input
                    id="position"
                    placeholder="Position"
                    value={position?.position}
                    onChange={(e) =>
                        setPosition({
                            ...position,
                            position: e.target.value,
                        })
                    }
                />
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="group">Group</FormLabel>
                <Select
                    options={staffGroups}
                    id="group"
                    value={
                        staffGroups.find(group => group.value === position?.group) ?? staffGroups[0]
                    }
                    onChange={(e) =>
                        e != null && setPosition({
                            ...position,
                            group: e.value,
                        })
                    }
                    isSearchable={false}
                />
            </FormControl>

            <FormControl>
                <FormLabel id="assigned_to">Assign to</FormLabel>
                <Select
                    options={demoUsers}
                    id="assigned_to"
                    value={
                        demoUsers.find(user => user.value === position?.assignedTo) ?? demoUsers[0]
                    }
                    onChange={(e) =>
                        e != null && setPosition({
                            ...position,
                            assignedTo: e.value,
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

    return { onOpen, modal, setPosition };
};

export default AddOrEditStaff;