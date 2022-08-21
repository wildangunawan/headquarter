import { VStack, Text, useColorModeValue, Button, Flex, Input, Box, IconButton, Icon, useToast, Textarea } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import { ReactElement, useState } from "react";
import { IoMdPaperPlane } from "react-icons/io"

interface Organiser {
    region: string;
    division: string;
    subdivision?: any;
    organised_by_vatsim: boolean;
}

interface Airport {
    icao: string;
}

interface APIData {
    id: number;
    type: string;
    vso_name?: any;
    name: string;
    link: string;
    organisers: Organiser[];
    airports: Airport[];
    routes: any[];
    start_time: string;
    end_time: string;
    short_description: string;
    description: string;
    banner: string;
}

interface FormData {
    name: string;
    start: string;
    end: string;
    link_to_event: string;
    banner: string;
    description: string;
}

const AddEvent = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const [myVATSIMLink, setMyVATSIMLink] = useState("");
    const [formPart, setFormPart] = useState(1);
    const [formData, setFormData] = useState<FormData>();
    const toast = useToast();

    const handleMyVATSIMFetch = async () => {
        toast({
            title: 'Fetching event data from myVATSIM ...',
            description: "A form with data filled from myVATSIM will open shortly",
            status: 'success',
            duration: 4000,
            isClosable: true,
            position: 'bottom-right',
        })

        // Get event slug
        const eventSlug = myVATSIMLink.split("/")[4];

        // Fetch my VATSIM link
        const response = await fetch(`/api/get_event_from_myvatsim`, {
            method: "POST",
            body: JSON.stringify({
                slug: eventSlug,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = (await response.json()).data;

        setFormData({
            name: data.name,
            start: data.start_time,
            end: data.end_time,
            link_to_event: data.link,
            banner: data.banner,
            description: data.description
        });

        // Continue to next part
        setFormPart(2);
    }

    if (formPart == 1) return (
        <VStack spacing={"20px"} align="stretch">
            {/* Header */}
            <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                Create new event
            </Text>

            {/* Content */}
            <Card>
                <VStack px="15px" py="10px" align="center" justify="center" spacing={4}>
                    <Box textAlign={"center"}>
                        <Text fontWeight={800}>Do you want to fetch event from myVATSIM?</Text>
                        <Text color="gray.400" fontSize="sm" maxW="50ch">It&apos;s easier to use this method if your event already approved in myVATSIM. You still need to fill some field though.</Text>

                        <Flex align="center" justify="center" mt={3} gap={1}>
                            <Input
                                type="text"
                                placeholder="myVATSIM event link"
                                onChange={(e) => setMyVATSIMLink(e.target.value)}
                                value={myVATSIMLink}
                            />
                            <IconButton
                                colorScheme={"blue"}
                                icon={<IoMdPaperPlane />}
                                aria-label={"Fetch from myVATSIM"}
                                onClick={handleMyVATSIMFetch}
                            />
                        </Flex>
                    </Box>

                    <Text>OR</Text>

                    <Box textAlign={"center"}>
                        <Text fontWeight={800}>You want to create from scratch?</Text>
                        <Text color="gray.400" fontSize="sm" maxW="50ch">This is suitable for events that doesn&apos;t/shouldn&apos;t go to myVATSIM</Text>

                        <Button mt={2} colorScheme={"green"} onClick={() => setFormPart(2)}>Create from scratch</Button>
                    </Box>
                </VStack>
            </Card>
        </VStack>
    );

    if (formPart == 2) return (
        <VStack spacing={"20px"} align="stretch">
            {/* Header */}
            <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                Create new event
            </Text>

            {/* Content */}
            <Card>
                <VStack px="15px" py="10px" spacing={"20px"} align={"stretch"}>
                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>Title</Text>
                        <Input
                            placeholder="Title"
                            value={formData?.name}
                        />
                    </Flex>

                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>Start time</Text>
                        <Input
                            placeholder="Start time"
                            value={formData?.start}
                            type="datetime-local"
                        />
                    </Flex>
                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>End time</Text>
                        <Input
                            placeholder="End time"
                            value={formData?.end}
                            type="datetime-local"
                        />
                    </Flex>
                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>Link to event</Text>
                        <Input
                            placeholder="Link to event"
                            value={formData?.link_to_event}
                        />
                    </Flex>
                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>Banner</Text>
                        <Input
                            placeholder="Banner"
                            value={formData?.banner}
                        />
                    </Flex>
                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>Description</Text>
                        <Textarea
                            placeholder="Description"
                            value={formData?.description}
                        />
                    </Flex>

                    <Button colorScheme={"green"}>Publish event</Button>
                </VStack>
            </Card>
        </VStack >
    );
};

AddEvent.getLayout = (page: ReactElement) => <AdminLayout title="Create new event">{page}</AdminLayout>
export default AddEvent;