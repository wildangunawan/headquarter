import { VStack, Text, useColorModeValue, Button, Flex, Textarea, Input } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import { ReactElement } from "react";

const EventEdit = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
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
                        />
                    </Flex>

                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>Start time</Text>
                        <Input
                            placeholder="Start time"
                            type="datetime-local"
                        />
                    </Flex>
                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>End time</Text>
                        <Input
                            placeholder="End time"
                            type="datetime-local"
                        />
                    </Flex>
                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>Link to event</Text>
                        <Input
                            placeholder="Link to event"
                        />
                    </Flex>
                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>Banner</Text>
                        <Input
                            placeholder="Banner"
                        />
                    </Flex>
                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>Description</Text>
                        <Textarea
                            placeholder="Description"
                        />
                    </Flex>

                    <Button colorScheme={"green"}>Update event</Button>
                </VStack>
            </Card>
        </VStack >
    );
};

EventEdit.getLayout = (page: ReactElement) => <AdminLayout title="Edit Swagatam Singapore">{page}</AdminLayout>
export default EventEdit;