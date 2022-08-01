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
    useDisclosure,
    useToast,
    ButtonGroup,
    Badge,
    useColorModeValue
} from '@chakra-ui/react';
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
                <Flex align="center">
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
                <Center h={"100%"} w={"100%"} my="2em">
                    {
                        haveCPT
                            ? <VStack
                                divider={<StackDivider />}
                                spacing={4}
                            >
                                <VStack textAlign={"center"} spacing={1}>
                                    <Text>You&apos;re going to have your</Text>
                                    <Badge colorScheme={"blue"}>S2 CPT</Badge>
                                    <Text>as</Text>
                                    <HStack>
                                        <Badge colorScheme={"blue"}>WIII_TWR</Badge>
                                        <Text>at</Text>
                                        <Badge colorScheme={"blue"}>30 Aug 2022</Badge>
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
                                ? <Center height={"100%"} width={"100%"}>We have received your request. We will let you know ASAP {`(●'◡'●)`}</Center>
                                : <Center height={"100%"} width={"100%"}>You don&apos;t have any CPT planned yet.</Center>
                    }
                </Center>
            </Card>

            <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirmation - Request CPT</ModalHeader>
                    <ModalBody>
                        Are you sure that you want to proceed with your request? Once you submit your request, respective staff will process the request and you will be notified by email.
                    </ModalBody>

                    <ModalFooter>
                        <ButtonGroup spacing={3} size={"md"}>
                            <Button
                                colorScheme='red'
                                variant={'outline'}
                                onClick={onClose}
                            >
                                Cancel, I&apos;m not ready yet
                            </Button>
                            <Button
                                colorScheme='green'
                                onClick={submitApplication}
                                isLoading={loading}
                                loadingText="Submitting"
                            >
                                Yes, I&apos;m fully ready. LFG.
                            </Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CPTInformation;