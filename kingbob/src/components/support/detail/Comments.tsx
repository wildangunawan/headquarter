import { Box, Button, Flex, Text, Textarea, useColorModeValue, VStack } from '@chakra-ui/react';
import Card from '@components/card/Card';

const Comments = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const commentBg = useColorModeValue("secondaryGray.400", "whiteAlpha.100");

    return (
        <Card>
            {/* Comments */}
            <Box>
                <Text
                    me="auto"
                    color={textColor}
                    fontSize="xl"
                    fontWeight="700"
                    lineHeight="100%"
                    px="15px" py="10px"
                >
                    Comments
                </Text>
                <Flex direction={"column"} gap={4} px="15px" py="10px">
                    <Flex direction={"column"}>
                        <Flex justify={"space-between"} mb={2}>
                            <Text fontWeight={500}>
                                King Bob (1000003)
                            </Text>
                            <Text>
                                2 Aug 2022 14:30
                            </Text>
                        </Flex>
                        <Text px={4} py={2} bg={commentBg} borderRadius={3}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam fugiat qui mollitia harum ut animi eos aspernatur magnam eius porro, ducimus, at provident suscipit! Laudantium unde eligendi recusandae officiis quod magni dolor totam consequatur facilis asperiores reprehenderit quas, sunt praesentium deleniti commodi nemo perspiciatis porro accusamus voluptate suscipit! Accusantium.</Text>
                    </Flex>
                    <Flex direction={"column"}>
                        <Flex justify={"space-between"} mb={2}>
                            <Text fontWeight={500}>
                                King Bob (1000003)
                            </Text>
                            <Text>
                                3 Aug 2022 14:30
                            </Text>
                        </Flex>
                        <Text px={4} py={2} bg={commentBg} borderRadius={3}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur provident libero ut ipsum deserunt, eligendi tempora dicta iure modi accusamus iusto dolorem, mollitia eveniet sequi incidunt ab id officia similique.
                        </Text>
                    </Flex>
                </Flex>
            </Box>

            {/* Add comment */}
            <Box>
                <Text
                    me="auto"
                    color={textColor}
                    // fontSize="lg"
                    fontWeight="500"
                    lineHeight="100%"
                    px="15px" mt="10px"
                >
                    Add Comment
                </Text>
                <VStack gap={4} px="15px" py="10px">
                    <Textarea noOfLines={5} />
                    <Button colorScheme={"green"}>Submit</Button>
                </VStack>
            </Box>
        </Card>
    );
};

export default Comments;