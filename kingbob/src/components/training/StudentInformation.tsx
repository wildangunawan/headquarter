import { Box, Flex, Link, Progress, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import Card from '@components/card/Card';
import NavLink from "next/link";

const StudentInformation = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <Card>
            <Text
                me="auto"
                color={textColor}
                fontSize="xl"
                fontWeight="700"
                lineHeight="100%"
                px="15px" py="10px"
            >
                Mel (1000006)
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px" px="15px" py="10px">
                <Box>
                    <Text
                        color={textColor}
                        fontSize="lg"
                        fontWeight="500"
                    >
                        Information
                    </Text>
                    <Flex direction={"column"}>
                        <SimpleGrid columns={2} alignItems={"center"}>
                            <Text>Rating</Text>
                            <Text>: Student 3 (S3)</Text>
                        </SimpleGrid>
                        <SimpleGrid columns={2} alignItems={"center"}>
                            <Text>Mentor</Text>
                            <Text>
                                : <NavLink href={"/profile/1000005"} passHref>
                                    <Link color={"blue.500"}>
                                        Gru (1000005)
                                    </Link>
                                </NavLink>
                            </Text>
                        </SimpleGrid>
                        <SimpleGrid columns={2} alignItems={"center"}>
                            <Text>Last training was at</Text>
                            <Text>: 5 Aug 2022 (10 days ago)</Text>
                        </SimpleGrid>
                        <SimpleGrid columns={2} alignItems={"center"}>
                            <Text>Solo validated at</Text>
                            <Text>: WIIF_CTR</Text>
                        </SimpleGrid>
                    </Flex>
                </Box>

                <Box>
                    <Text
                        color={textColor}
                        fontSize="lg"
                        fontWeight="500"
                    >
                        Progress
                    </Text>
                    <Flex align="center" gap={2}>
                        <Progress value={62.5} w="100%" bg="gray.200" />
                        <Text>62.5%</Text>
                    </Flex>

                    <Flex direction={"column"}>
                        <SimpleGrid columns={2} alignItems={"center"}>
                            <Text>Student 1 (S1)</Text>
                            <Text>: 3 Aug 2022 - 2 Sept 2022 (30 days)</Text>
                        </SimpleGrid>
                        <SimpleGrid columns={2} alignItems={"center"}>
                            <Text>Student 2 (S2)</Text>
                            <Text>: 2 Sept 2022 - 2 Oct 2022 (30 days)</Text>
                        </SimpleGrid>
                        <SimpleGrid columns={2} alignItems={"center"}>
                            <Text>Student 3 (S3)</Text>
                            <Text>: 2 Oct 2022 - now</Text>
                        </SimpleGrid>
                    </Flex>
                </Box>
            </SimpleGrid>
        </Card>
    );
};

export default StudentInformation;