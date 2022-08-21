import { VStack, Text, useColorModeValue, Button, Flex, Textarea, Input } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import { ReactElement } from "react";

const AddNews = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <VStack spacing={"20px"} align="stretch">
            {/* Header */}
            <Flex align="center" justify="space-between">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Add News
                </Text>
                <Button as="a" colorScheme="blue">Publish</Button>
            </Flex>

            {/* Content */}
            <Card>
                <VStack px="15px" py="10px" spacing={"20px"} align={"stretch"}>
                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>Title</Text>
                        <Input placeholder="Title" />
                    </Flex>
                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>Content</Text>
                        <Textarea placeholder="Content" />
                    </Flex>
                </VStack>
            </Card>
        </VStack>
    );
};

AddNews.getLayout = (page: ReactElement) => <AdminLayout title="Add news">{page}</AdminLayout>
export default AddNews;