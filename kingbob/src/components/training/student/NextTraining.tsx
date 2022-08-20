import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Button, Center, VStack, StackDivider, HStack, Text, Link, Badge } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";
import Card from "@components/card/Card";
import NavLink from "next/link";
import { useState } from "react";
import TrainingRequest from "../modal/TrainingRequest";

const NextTraining = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const [haveTraining, setHaveTraining] = useState(false);
    const [inQueue, setInQueue] = useState(false);

    // Modal
    const { onOpen, modal, trainingRequested } = TrainingRequest();

    return (
        <>
            <Card>
                <Flex align="center">
                    <Text
                        me="auto"
                        color={textColor}
                        fontSize="xl"
                        fontWeight="700"
                        lineHeight="100%"
                        px="15px" py="10px"
                    >
                        Next Training
                    </Text>
                    {
                        (!haveTraining && !trainingRequested)
                        && <Button
                            colorScheme={"blue"}
                            onClick={onOpen}
                        >Request training</Button>
                    }
                    {
                        (!haveTraining && trainingRequested) && <Button colorScheme={"blue"} onClick={() => setInQueue(true)}>Show when on queue</Button>
                    }
                    {
                        !haveTraining && <Button colorScheme={"blue"} onClick={() => setHaveTraining(true)}>Show example pls.</Button>
                    }
                </Flex>
                <Center h={"100%"} w={"100%"} my="1em" px="15px" py="10px">
                    {/* 
                    * Apologies for if in another if, here is the logic if translated to non-JSX
                    *   if (haveTraining) { Show training info card }
                    *   else {
                    *       if (trainingRequested) {
                    *          if (inQueue) { Request approved and user has been put in queue }
                    *          else { Request received but not yet approved } 
                    *       }
                    *       else { No training planned }
                    *   }
                    */}

                    {
                        haveTraining
                            ? <VStack
                                divider={<StackDivider />}
                                spacing={4}
                            >
                                <VStack textAlign={"center"} spacing={1}>
                                    <Text>You&apos;re going to have your</Text>
                                    <HStack>
                                        <Badge colorScheme={"blue"}>S2 Training</Badge>
                                        <Text>at</Text>
                                        <Badge colorScheme={"blue"}>30 Aug 2022</Badge>
                                    </HStack>
                                    <Text>
                                        with{" "}
                                        <NavLink href={"/profile/1000005"} passHref>
                                            <Link color={"blue.500"}>
                                                Gru (1000005)
                                            </Link>
                                        </NavLink>
                                    </Text>
                                </VStack>
                                <NavLink href={"/training/detail/training-30-aug-2022"} passHref>
                                    <Link color={"blue.500"}>
                                        Check training detail
                                        <ArrowForwardIcon ml={1} />
                                    </Link>
                                </NavLink>
                            </VStack>
                            : trainingRequested
                                ? inQueue
                                    ? <VStack textAlign={"center"} spacing={1}>
                                        <HStack>
                                            <Text>You&apos;re number</Text>
                                            <Badge colorScheme={"blue"}>30</Badge>
                                            <Text>in queue.</Text>
                                        </HStack>
                                        <HStack>
                                            <Text>Expect training begin in</Text>
                                            <Badge colorScheme={"blue"}>365 day(s)</Badge>
                                            <Text>
                                                with{" "}
                                                <NavLink href={"/profile/1000005"} passHref>
                                                    <Link color={"blue.500"}>
                                                        Gru (1000005)
                                                    </Link>
                                                </NavLink>.
                                            </Text>
                                        </HStack>
                                    </VStack>
                                    : <Text>We have received your request. We will let you know ASAP {`(●'◡'●)`}</Text>
                                : <Text>You don&apos;t have any training planned yet.</Text>
                    }
                </Center>
            </Card>

            {/* Show modal */}
            {modal}
        </>
    );
};

export default NextTraining;