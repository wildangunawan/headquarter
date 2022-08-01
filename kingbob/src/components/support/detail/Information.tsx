import { Box, Link, SimpleGrid, Flex, Text, useColorModeValue, Badge, Button } from '@chakra-ui/react';
import Card from '@components/card/Card';
import NavLink from 'next/link';

const Information = () => {
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
                Information
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px" px="15px" py="10px">
                <Flex direction={"column"}>
                    <SimpleGrid columns={2} alignItems={"center"}>
                        <Text>Created by</Text>
                        <Text>
                            : <NavLink href={"/profile/1000005"} passHref>
                                <Link color={"blue.500"}>
                                    Gru (1000005)
                                </Link>
                            </NavLink>
                        </Text>
                    </SimpleGrid>
                    <SimpleGrid columns={2} alignItems={"center"}>
                        <Text>Assigned to (team)</Text>
                        <Text>
                            : <NavLink href={"/vacc/idn"} passHref>
                                <Link color={"blue.500"}>
                                    Indonesia vACC (IDN)
                                </Link>
                            </NavLink>
                        </Text>
                    </SimpleGrid>
                    <SimpleGrid columns={2} alignItems={"center"}>
                        <Text>Assigned to (staff)</Text>
                        <Text>
                            : <Button size="sm" colorScheme={"green"}>Assign Someone</Button>
                        </Text>
                    </SimpleGrid>
                </Flex>
                <Flex direction={"column"}>
                    <SimpleGrid columns={2} alignItems={"center"}>
                        <Text>Status</Text>
                        <Text>: <Badge colorScheme={"yellow"}>Pending</Badge></Text>
                    </SimpleGrid>
                    <SimpleGrid columns={2} alignItems={"center"}>
                        <Text>Created at</Text>
                        <Text>: 5 Aug 2022 12:00</Text>
                    </SimpleGrid>
                    <SimpleGrid columns={2} alignItems={"center"}>
                        <Text>Last updated at</Text>
                        <Text>: 5 Aug 2022 14:00</Text>
                    </SimpleGrid>
                </Flex>
            </SimpleGrid>

            <Flex align={"center"} justify={"center"} gap={2}>
                <Button colorScheme={"yellow"}>Transfer ticket</Button>
                <Button colorScheme={"blue"}>Close ticket</Button>
            </Flex>
        </Card>
    );
};

export default Information;