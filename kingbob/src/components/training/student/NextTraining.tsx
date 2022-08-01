import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useDisclosure, useToast, Flex, Button, Center, VStack, StackDivider, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, Textarea, ModalFooter, Text, Link, Select, Badge } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";
import Card from "@components/card/Card";
import NavLink from "next/link";
import { useState } from "react";

const NextTraining = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const [haveTraining, setHaveTraining] = useState(false);
    const [trainingRequested, setTrainingRequested] = useState(false);
    const [inQueue, setInQueue] = useState(false);

    // Training request state
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(false);
    const toast = useToast()

    const submitApplication = () => {
        // Set loading
        setLoading(true);

        // TODO: Submit to API
        setTimeout(() => {
            // Close modal
            onClose();

            // Set loading
            setLoading(false);

            // Set Training requested to true
            setTrainingRequested(true);

            // Show toast that application was submitted
            toast({
                title: 'Request submitted',
                description: "Respective staff be in touch with you ASAP",
                status: 'success',
                position: 'bottom-right',
                duration: 5000,
                isClosable: true,
            })

            // Show toast that application was failed to submit
            toast({
                title: 'Failed to submit request',
                description: "There is an error in our system. Please try again.",
                status: 'error',
                position: 'bottom-right',
                duration: 5000,
                isClosable: true,
            })
        }, 2000);
    }

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
                        (!haveTraining && !trainingRequested) && <Button colorScheme={"blue"} onClick={onOpen}>Request training</Button>
                    }
                    {
                        (!haveTraining && trainingRequested) && <Button colorScheme={"blue"} onClick={() => setInQueue(true)}>Show when on queue</Button>
                    }
                    {
                        !haveTraining && <Button colorScheme={"blue"} onClick={() => setHaveTraining(true)}>Show example pls.</Button>
                    }
                </Flex>
                <Center h={"100%"} w={"100%"} my="2em">
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
                                <NavLink href={"/admin/training/detail/training-30-aug-2022"} passHref>
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

            <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Request Training</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction={"column"} gap={2} mb={4}>
                            <Text>Choose vACC</Text>
                            <Select>
                                <option value='option1'>Hong Kong vACC</option>
                                <option value='option2'>Indonesia vACC</option>
                                <option value='option3'>Malaysia vACC</option>
                                <option value='option3'>Any other vACC, I am too tired to write it one by one</option>
                            </Select>
                        </Flex>
                        <Flex direction={"column"} gap={2}>
                            <Text>Any preferred date?</Text>
                            <Textarea placeholder={`Tell your mentor when you're able to do the training`}></Textarea>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme='blue'
                            p={6}
                            onClick={submitApplication}
                            isLoading={loading}
                            loadingText="Submitting"
                        >
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default NextTraining;