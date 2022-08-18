import { VStack, StackDivider, Text, Box, useColorModeValue, Button, Flex } from "@chakra-ui/react";
import Card from "@components/card/Card";
import CreateEditNote from "./modal/CreateEditNote";

const BookingEventWideNotes = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    // Modal
    const { onOpen, modal } = CreateEditNote();

    return (
        <>
            <Card>
                <Flex>
                    <Text
                        me="auto"
                        color={textColor}
                        fontSize="xl"
                        fontWeight="700"
                        lineHeight="100%"
                        px="15px" py="10px"
                    >
                        Notes from staff
                    </Text>
                    <Button colorScheme={"blue"} onClick={onOpen}>Create/edit note</Button>
                </Flex>

                <VStack
                    spacing="20px"
                    align="stretch"
                    px="15px"
                    py="10px"
                    divider={<StackDivider borderColor='gray.200' />}
                >
                    <Box>
                        {/* Title */}
                        <Flex justify={"space-between"} color={textColor}>
                            <Text
                                fontWeight={800}
                                fontSize="md"
                            >
                                Singapore vACC
                            </Text>
                            <Text
                                fontSize="sm"
                            >
                                by Gru (1000005)
                            </Text>
                        </Flex>

                        {/* Content, but truncated anyway */}
                        <Text fontSize={"md"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aperiam voluptatibus? Nesciunt saepe ex veritatis ducimus voluptatibus perferendis eum doloribus, soluta aliquid! Voluptate quidem dolorum aspernatur corporis adipisci? Odio facere provident recusandae esse, nihil corrupti fugit molestiae quisquam voluptate animi inventore eos tempora porro nesciunt ipsa eveniet, id numquam beatae.</Text>
                    </Box>
                    <Box>
                        {/* Title */}
                        <Flex justify={"space-between"} color={textColor}>
                            <Text
                                fontWeight={800}
                                fontSize="md"
                            >
                                Indonesia vACC
                            </Text>
                            <Text
                                fontSize="sm"
                            >
                                by Gru (1000005)
                            </Text>
                        </Flex>

                        {/* Content, but truncated anyway */}
                        <Text fontSize={"md"} noOfLines={2}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, error.
                        </Text>
                    </Box>
                </VStack>
            </Card>

            {/* Modal */}
            {modal}
        </>
    );
};

export default BookingEventWideNotes;