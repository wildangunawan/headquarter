import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    useColorModeValue,
    Link,
    Button,
    Flex,
    Center,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useToast,
    useDisclosure,
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import { useState } from 'react';

const SoloHistory = ({ viewingMyself = false }: { viewingMyself?: boolean }) => {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()

    // State
    const [showMePls, setShowMePls] = useState(false);
    const [loading, setLoading] = useState(false)

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
                title: 'Solo for Bob (1000004) issued',
                description: "We have notified Bob via email as well about this",
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
        }, 2000)
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
                        Solo History
                    </Text>
                    <Button colorScheme={"blue"} onClick={onOpen}>Issue solo</Button>
                    <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
                </Flex>
                {
                    showMePls
                        ? <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Position</Th>
                                        <Th>Approved until</Th>
                                        <Th>Issued by</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>WIII_TWR</Td>
                                        <Td>30 Aug 2022</Td>
                                        <Td>
                                            <NavLink href="/profile/1000000" passHref>
                                                <Link color="brand.500">Kevin (1000000)</Link>
                                            </NavLink>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>WIII_TWR</Td>
                                        <Td>30 Jul 2022</Td>
                                        <Td>
                                            <NavLink href="/profile/1000000" passHref>
                                                <Link color="brand.500">Kevin (1000000)</Link>
                                            </NavLink>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        : <Center h={"100%"} w={"100%"} my="2em">
                            {viewingMyself ? "You don't" : "This student doesn't"} have any solo approval yet.
                        </Center>
                }
            </Card>

            <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction={"column"} gap={2} mb={4}>
                            <Text>Position</Text>
                            <Input placeholder='WIII_TWR' />
                        </Flex>
                        <Flex direction={"column"} gap={2} mb={4}>
                            <Text>Start</Text>
                            <Input
                                type="date"
                            />
                        </Flex>
                        <Flex direction={"column"} gap={2}>
                            <Text>End</Text>
                            <Input
                                type="date"
                            />
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

export default SoloHistory;