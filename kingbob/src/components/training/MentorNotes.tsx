import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Text,
    useColorModeValue,
    Link,
    Box,
    Flex,
    Button,
    Center,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    useToast,
    Textarea,
    Select,
    Checkbox,
    Switch,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import { useState } from 'react';

const MentorNotes = ({ viewingMyself = false }: { viewingMyself?: boolean }) => {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const [showMePls, setShowMePls] = useState(false);

    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                title: 'Note added',
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
                        Mentor Notes
                    </Text>
                    <Button colorScheme={"blue"} onClick={onOpen}>Add note</Button>
                    <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
                </Flex>
                {
                    showMePls
                        ? <Box>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Mentor</Th>
                                        <Th>Comment / Note</Th>
                                        <Th>For training</Th>
                                        <Th>Added at</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <NavLink href="/profile/1000000" passHref>
                                                <Link color="brand.500">Otto (1000004)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>
                                            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus praesentium optio harum laudantium ipsam earum! Dolore esse magnam sint quasi! Enim facilis aperiam laboriosam sit amet explicabo iusto, natus perspiciatis.</Text>
                                        </Td>
                                        <Td>#123 at 25 Aug 2022</Td>
                                        <Td>31 Aug 2022 13:00 UTC</Td>
                                    </Tr>
                                    <Tr height={"auto"}>
                                        <Td>
                                            <NavLink href="/profile/1000000" passHref>
                                                <Link color="brand.500">Otto (1000004)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, possimus?
                                        </Td>
                                        <Td>-</Td>
                                        <Td>31 Aug 2022 13:00 UTC</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Box>
                        : <Center height={"100%"} width={"100%"} my="2em">
                            No one has ever said anything about {viewingMyself ? "you" : "this student"}.
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
                            <Text>Comment / note</Text>
                            <Textarea />
                        </Flex>
                        <Flex direction={"column"} gap={2} mb={4}>
                            <Text>For training</Text>
                            <Select>
                                <option>None</option>
                                <option>#123 at 25 Aug 2022</option>
                                <option>#124 at 26 Aug 2022</option>
                            </Select>
                            <Text fontSize={"xs"}>If this note is not about any training, select &quot;None&quot;</Text>
                        </Flex>

                        <FormControl display='flex' alignItems='center' gap={2}>
                            <Switch id='email-alerts' colorScheme='green' />
                            <FormLabel htmlFor='email-alerts' mb='0' fontSize={"sm"} fontWeight={400}>
                                Student can see this note
                            </FormLabel>
                        </FormControl>
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

export default MentorNotes;