import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Button, Text, Link, VStack, StackDivider, Center } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/system';
import Card from '@components/card/Card';
import NavLink from 'next/link';
import { useState } from 'react';

const SoloInformation = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const [showMePls, setShowMePls] = useState(false);

    return (
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
                    Solo Information
                </Text>
                <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
            </Flex>

            <Center h={"100%"} w={"100%"}>
                {
                    showMePls
                        ? <VStack
                            divider={<StackDivider />}
                            spacing={4}
                        >
                            <VStack textAlign={"center"} spacing={2}>
                                <Text>You&lsquo;re approved for</Text>
                                <Button colorScheme={"blue"} as="p" p={6}>WIII_TWR</Button>
                                <Text>until 30 Aug 2022</Text>
                            </VStack>
                            <NavLink href={"/training/solo/history"} passHref>
                                <Link color={"blue.500"}>
                                    Check my solo history
                                    <ArrowForwardIcon ml={1} />
                                </Link>
                            </NavLink>
                        </VStack>
                        : <Center height={"100%"} width={"100%"} my="2em">You don&lsquo;t have any solo approval yet.</Center>
                }
            </Center>
        </Card>
    );
};

export default SoloInformation;