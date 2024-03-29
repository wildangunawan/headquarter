import { VStack, Text, useColorModeValue, Button, Flex, Textarea, Input } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import { ReactElement } from "react";

const EditNews = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <VStack spacing={"20px"} align="stretch">
            {/* Header */}
            <Flex align="center" justify="space-between">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Edit Merry Christmas and Happy New Year!
                </Text>
                <Button as="a" colorScheme="blue">Publish</Button>
            </Flex>

            {/* Content */}
            <Card>
                <VStack px="15px" py="10px" spacing={"20px"} align={"stretch"}>
                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>Title</Text>
                        <Input placeholder="Title" value={"Lorem, ipsum dolor."} />
                    </Flex>
                    <Flex direction={"column"} gap={2}>
                        <Text fontWeight={600}>Content</Text>
                        <Textarea placeholder="Content" value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, delectus assumenda! Illo voluptatibus consectetur ex dicta provident officiis fugiat nemo asperiores debitis omnis deserunt dolorem, corporis accusantium eum? Sapiente ad neque dolor, quas veritatis et blanditiis tempore corrupti quos dicta, dolorum doloribus libero ratione beatae ex nobis fugit incidunt quidem!" />
                    </Flex>
                </VStack>
            </Card>
        </VStack>
    );
};

EditNews.getLayout = (page: ReactElement) => <AdminLayout title="Edit Merry Christmas and Happy New Year!">{page}</AdminLayout>
export default EditNews;