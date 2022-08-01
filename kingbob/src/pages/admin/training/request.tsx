import {
    Button,
    Flex,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Select,
    Textarea,
    useToast,

    // Alert to show other page as well
    // Only for demo purpose
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";
import AdminLayout from "@layouts/admin";
import { useState } from "react";

const Training = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loading, setLoading] = useState(false)
    const [requestSubmitted, setRequestSubmitted] = useState(false)
    const toast = useToast()

    const submitApplication = () => {
        // Set loading
        setLoading(true)

        // TODO: Make request to API
        // We'll use setTimeout for now
        setTimeout(() => {
            // Reset loading
            setLoading(false)

            // Close modal
            onClose()

            // Show toast that application was submitted
            toast({
                title: 'Request submitted',
                description: "We'll report whether you're accepted or rejected",
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

            // Set request submitted
            setRequestSubmitted(true)
        }, 2000)
    }

    return (
        <AdminLayout title="Training System">
            <Flex
                width={{ base: "90vw", xl: "80vw" }}
                align="center"
                height="80vh"
                justify="center"
                gap={4}
                direction={"column"}
            >
                {
                    requestSubmitted
                        ? <Alert
                            status='success'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                            height='200px'
                            width={{ base: "90vw", xl: "40vw" }}
                        >
                            <AlertIcon boxSize='40px' mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                Application submitted!
                            </AlertTitle>
                            <AlertDescription maxWidth='sm'>
                                We already have your training request and will respond to it ASAP. Please wait for a few days to get your answer.
                            </AlertDescription>
                        </Alert>
                        : <>
                            <Text maxW="50ch" textAlign={"center"}>You&lsquo;re not registered as ATC in any vACC under any vACC. To start controlling, you can register using button below.</Text>
                            <Button colorScheme={"blue"} p={6} onClick={onOpen}>Register now</Button>
                        </>
                }
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction={"column"} gap={2} mb={4}>
                            <Text>Choose your vACC</Text>
                            <Select>
                                <option value='option1'>Hong Kong vACC</option>
                                <option value='option2'>Indonesia vACC</option>
                                <option value='option3'>Malaysia vACC</option>
                                <option value='option3'>Any other vACC, I am too tired to write it one by one</option>
                            </Select>
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
        </AdminLayout >
    );
};

export default Training;