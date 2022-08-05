import { ChevronDownIcon } from '@chakra-ui/icons';
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
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Checkbox,
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import { useState } from 'react';
import AddToFSSRoster from '../modal/AddToFSSRoster';
import EndorsePosition from '../modal/EndorsePosition';
import IssueSolo from '../modal/IssueSolo';
import PromoteAsExaminer from '../modal/PromoteAsExaminer';
import PromoteAsMentor from '../modal/PromoteAsMentor';

const MemberList = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    // State
    const [showMePls, setShowMePls] = useState(false);

    // Modal
    const { onOpen: openSoloModal, modal: SoloModal, setStudentData } = IssueSolo();
    const { onOpen: openEndorseModal, modal: EndorseModal, setMemberData: setEndorseData } = EndorsePosition();
    const { onOpen: openFSSModal, modal: FSSModal, setMemberData: setFSSData } = AddToFSSRoster();
    const { onOpen: openMentorModal, modal: MentorModal, setMemberData: setMentorData } = PromoteAsMentor();
    const { onOpen: openExaminerModal, modal: ExaminerModal, setMemberData: setExaminerData } = PromoteAsExaminer();

    // Helper
    const openModal = (studentData: any, type: string) => {
        switch (type) {
            case "solo":
                setStudentData(studentData);
                openSoloModal();
                break;
            case "endorse":
                setEndorseData(studentData);
                openEndorseModal();
                break;
            case "fss":
                setFSSData(studentData);
                openFSSModal();
                break;
            case "mentor":
                setMentorData(studentData);
                openMentorModal();
                break;
            case "examiner":
                setExaminerData(studentData);
                openExaminerModal();
                break;
        }
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
                        Members List
                    </Text>
                    <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
                </Flex>

                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Name (CID)</Th>
                                <Th>Current Rating</Th>
                                <Th>Solo</Th>
                                <Th>Mentor</Th>
                                <Th>Is mentor</Th>
                                <Th>Is examiner</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                showMePls
                                && <>
                                    <Tr>
                                        <Td>
                                            <NavLink href="/admin/profile/1000000" passHref>
                                                <Link color="brand.500">Kevin (1000000)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>Student 1 (S1)</Td>
                                        <Td><Checkbox isChecked /></Td>
                                        <Td>
                                            <NavLink href="/admin/profile/1000005" passHref>
                                                <Link color="brand.500">Gru (1000005)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td><Checkbox isChecked={false} /></Td>
                                        <Td><Checkbox isChecked={false} /></Td>
                                        <Td>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                    Actions
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>
                                                        <NavLink href="/admin/training/1000000" passHref>
                                                            <Link>View training record</Link>
                                                        </NavLink>
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000000",
                                                            name: "Kevin",
                                                        }, 'solo')}
                                                    >Issue solo</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000000",
                                                            name: "Kevin",
                                                        }, 'endorse')}
                                                    >Endorse for a position</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000000",
                                                            name: "Kevin",
                                                        }, 'fss')}
                                                    >Add to FSS roster</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000000",
                                                            name: "Kevin",
                                                        }, 'mentor')}
                                                    >Promote as mentor</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000000",
                                                            name: "Kevin",
                                                        }, 'examiner')}
                                                    >Promote as examiner</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <NavLink href="/admin/profile/1000001" passHref>
                                                <Link color="brand.500">Stuart (1000001)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>Student 2 (S2)</Td>
                                        <Td><Checkbox isChecked={false} /></Td>
                                        <Td>-</Td>
                                        <Td><Checkbox isChecked={false} /></Td>
                                        <Td><Checkbox isChecked={false} /></Td>
                                        <Td>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                    Actions
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>
                                                        <NavLink href="/admin/training/1000001" passHref>
                                                            <Link>View training record</Link>
                                                        </NavLink>
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000001",
                                                            name: "Stuart",
                                                        }, 'solo')}
                                                    >Issue solo</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000001",
                                                            name: "Stuart",
                                                        }, 'endorse')}
                                                    >Endorse for a position</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000001",
                                                            name: "Stuart",
                                                        }, 'fss')}
                                                    >Add to FSS roster</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000001",
                                                            name: "Stuart",
                                                        }, 'mentor')}
                                                    >Promote as mentor</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000001",
                                                            name: "Stuart",
                                                        }, 'examiner')}
                                                    >Promote as examiner</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <NavLink href="/admin/profile/1000002" passHref>
                                                <Link color="brand.500">King Bob (1000002)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>Student 1 (S1)</Td>
                                        <Td><Checkbox isChecked={false} /></Td>
                                        <Td>
                                            <NavLink href="/admin/profile/1000005" passHref>
                                                <Link color="brand.500">Gru (1000005)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td><Checkbox isChecked={false} /></Td>
                                        <Td><Checkbox isChecked={false} /></Td>
                                        <Td>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                    Actions
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>
                                                        <NavLink href="/admin/training/1000002" passHref>
                                                            <Link>View training record</Link>
                                                        </NavLink>
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000002",
                                                            name: "King Bob",
                                                        }, 'solo')}
                                                    >Issue solo</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000002",
                                                            name: "King Bob",
                                                        }, 'endorse')}
                                                    >Endorse for a position</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000002",
                                                            name: "King Bob",
                                                        }, 'fss')}
                                                    >Add to FSS roster</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000002",
                                                            name: "King Bob",
                                                        }, 'mentor')}
                                                    >Promote as mentor</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000002",
                                                            name: "King Bob",
                                                        }, 'examiner')}
                                                    >Promote as examiner</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <NavLink href="/admin/profile/1000005" passHref>
                                                <Link color="brand.500">Gru (1000002)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>Enroute Controller (C1)</Td>
                                        <Td><Checkbox isChecked={false} /></Td>
                                        <Td>-</Td>
                                        <Td><Checkbox isChecked /></Td>
                                        <Td><Checkbox isChecked /></Td>
                                        <Td>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                    Actions
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>
                                                        <NavLink href="/admin/training/1000002" passHref>
                                                            <Link>View training record</Link>
                                                        </NavLink>
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000002",
                                                            name: "King Bob",
                                                        }, 'solo')}
                                                    >Issue solo</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000002",
                                                            name: "King Bob",
                                                        }, 'endorse')}
                                                    >Endorse for a position</MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000002",
                                                            name: "King Bob",
                                                        }, 'fss')}
                                                    >Add to FSS roster</MenuItem>
                                                    <MenuItem>Remove from mentor</MenuItem>
                                                    <MenuItem>Remove from examiner</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                </>
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Card>

            {/* Show modal */}
            {SoloModal}
            {FSSModal}
            {EndorseModal}
            {MentorModal}
            {ExaminerModal}
        </>
    );
};

export default MemberList;