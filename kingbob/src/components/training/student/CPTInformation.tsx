import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
    Flex,
    Button,
    Text,
    Link,
    VStack,
    StackDivider,
    Center,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast,
    Select,
    Textarea,
    Input,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/system';
import Card from '@components/card/Card';
import NavLink from 'next/link';
import { useState } from 'react';

const CPTInformation = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const [haveCPT, setHaveCPT] = useState(false);
    const [CPTRequested, setCPTRequested] = useState(false);

    // CPT request state
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

            // Set CPT requested to true
            setCPTRequested(true);

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
                <Flex>
                    <Text
                        me="auto"
                        color={textColor}
                        fontSize="xl"
                        fontWeight="700"
                        lineHeight="100%"
                        px="15px" py="10px"
                    >
                        CPT Information
                    </Text>
                    {
                        (!haveCPT && !CPTRequested) && <Button colorScheme={"blue"} onClick={onOpen}>Request CPT</Button>
                    }
                    {
                        !haveCPT && <Button colorScheme={"blue"} onClick={() => setHaveCPT(true)}>Show example pls.</Button>
                    }
                </Flex>
                <Center h={"100%"} w={"100%"}>
                    {
                        haveCPT
                            ? <VStack
                                divider={<StackDivider />}
                                spacing={4}
                            >
                                <VStack textAlign={"center"} spacing={1}>
                                    <Text>You&lsquo;re going to have your</Text>
                                    <Button colorScheme={"blue"} as="p" p={6}>S2 CPT</Button>
                                    <Text>as</Text>
                                    <HStack>
                                        <Button colorScheme={"blue"} as="p" p={6}>WIII_TWR</Button>
                                        <Text>at</Text>
                                        <Button colorScheme={"blue"} as="p" p={6}>30 Aug 2022</Button>
                                    </HStack>
                                </VStack>
                                <NavLink href={"/event/s2-cpt-wiii-twr"} passHref>
                                    <Link color={"blue.500"}>
                                        Check my CPT event
                                        <ArrowForwardIcon ml={1} />
                                    </Link>
                                </NavLink>
                            </VStack>
                            : CPTRequested
                                ? <Center height={"100%"} width={"100%"} my="2em">We have received your request. We will let you know ASAP {`(●'◡'●)`}</Center>
                                : <Center height={"100%"} width={"100%"} my="2em">You don&lsquo;t have any CPT planned yet.</Center>
                    }
                </Center>
            </Card>

            <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Request CPT</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction={"column"} gap={2} mb={4}>
                            <Text>Position</Text>
                            <Input disabled value={"WIII_TWR"} />
                        </Flex>
                        <Flex direction={"column"} gap={2}>
                            <Text>Free text area</Text>
                            <Textarea placeholder={`1. Why do you choose us?\n2. Do you have any real aviation experiences?`}></Textarea>
                            <Text fontSize={"sm"}>Some vACC may request you to put your reason and/or reasons why you choose them. Use this free text area to answer that.</Text>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme='blue'
                            p={6}
                            mr={3}
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

export default CPTInformation;