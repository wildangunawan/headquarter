import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Button, Center, VStack, StackDivider, Text, Link, Badge } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";
import Card from "@components/card/Card";
import NavLink from "next/link";
import { useState } from "react";

const LastTraining = () => {
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
                    Last Training
                </Text>
                <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
            </Flex>

            <Center h={"100%"} w={"100%"} my="1em" px="15px" py="10px">
                {
                    showMePls
                        ? <VStack
                            divider={<StackDivider />}
                            spacing={4}
                        >
                            <VStack textAlign={"center"} spacing={2}>
                                <Text>Your last training was 3 days ago as</Text>
                                <Badge colorScheme={"blue"}>WIII_TWR</Badge>
                                <Text>Your instructor/mentor gave 2 comments for this session.</Text>
                            </VStack>
                            <NavLink href={"/training/me"} passHref>
                                <Link color={"blue.500"}>
                                    Check my training history
                                    <ArrowForwardIcon ml={1} />
                                </Link>
                            </NavLink>
                        </VStack>
                        : <Text>You don&apos;t have any training recorded in the system yet.</Text>
                }
            </Center>
        </Card>
    );
};

export default LastTraining;