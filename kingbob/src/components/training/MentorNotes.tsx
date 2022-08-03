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
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import { useState } from 'react';
import MentorAddNote from './modal/MentorAddNote';

const MentorNotes = ({ viewingMyself = false }: { viewingMyself?: boolean }) => {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const [showMePls, setShowMePls] = useState(false);

    // Modal
    const { onOpen, modal } = MentorAddNote();

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
                    {!viewingMyself && <Button colorScheme={"blue"} onClick={onOpen}>Add note</Button>}
                    <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
                </Flex>

                <Center h={"100%"} w={"100%"} my="1em" px="15px" py="10px">
                    {
                        showMePls
                            ? <Box overflowX={"auto"}>
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
                            : <Text>
                                No one has ever said anything about {viewingMyself ? "you" : "this student"}.
                            </Text>
                    }
                </Center>
            </Card>

            {/* Show modal */}
            {modal}
        </>
    );
};

export default MentorNotes;