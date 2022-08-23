import { ChevronDownIcon } from "@chakra-ui/icons";
import { VStack, Flex, Button, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Menu, MenuButton, MenuList, MenuItem, Text, useColorModeValue, Link } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import { ReactElement } from "react";
import NavLink from "next/link";
import AddOrEditCharSceCtor from "@components/staff/modal/AddOrEditCharSceCtor";

const CharSceCtor = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    // Modal
    const { onOpen, modal, setData } = AddOrEditCharSceCtor();

    return (
        <>
            <VStack spacing={"20px"} align="stretch">
                <Flex align="center" justify={"space-between"}>
                    <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                        Chart - Scenery - Sector Files (CharSceCtor)
                    </Text>
                    <Button
                        colorScheme={"blue"}
                        onClick={() => {
                            setData({
                                type: "",
                                name: "",
                                link: ""
                            });
                            onOpen();
                        }}
                    >Add data</Button>
                </Flex>

                <Card>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Link</Th>
                                    <Th>Type</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>[WADD] I Gusti Ngurah Rai Intl Airport SOP</Td>
                                    <Td>
                                        <NavLink href="https://vats.im/idn/wadd-sop" passHref>
                                            <Link color="brand.500">https://vats.im/idn/wadd-sop</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>SOP</Td>
                                    <Td>
                                        <Menu>
                                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                Actions
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem onClick={
                                                    () => {
                                                        setData({
                                                            type: "sop",
                                                            name: "[WADD] I Gusti Ngurah Rai Intl Airport SOP",
                                                            link: "https://vats.im/idn/wadd-sop"
                                                        });
                                                        onOpen();
                                                    }
                                                }>Edit</MenuItem>
                                                <MenuItem>Remove</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>[WIII] Soekarno-Hatta Intl Airport SOP</Td>
                                    <Td>
                                        <NavLink href="https://vats.im/idn/wiii-sop" passHref>
                                            <Link color="brand.500">https://vats.im/idn/wiii-sop</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>SOP</Td>
                                    <Td>
                                        <Menu>
                                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                Actions
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem onClick={
                                                    () => {
                                                        setData({
                                                            type: "sop",
                                                            name: "[WIII] Soekarno-Hatta Intl Airport SOP",
                                                            link: "https://vats.im/idn/wiii-sop"
                                                        });
                                                        onOpen();
                                                    }
                                                }>Edit</MenuItem>
                                                <MenuItem>Remove</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>Discord</Td>
                                    <Td>
                                        <NavLink href="https://vats.im/idn/discord" passHref>
                                            <Link color="brand.500">https://vats.im/idn/discord</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>Miscellaneous</Td>
                                    <Td>
                                        <Menu>
                                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                Actions
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem onClick={
                                                    () => {
                                                        setData({
                                                            type: "misc",
                                                            name: "Discord",
                                                            link: "https://vats.im/idn/discord"
                                                        });
                                                        onOpen();
                                                    }
                                                }>Edit</MenuItem>
                                                <MenuItem>Remove</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Card>
            </VStack>

            {/* Modal */}
            {modal}
        </>
    );
};

CharSceCtor.getLayout = (page: ReactElement) => <AdminLayout title="CharSceCtor">{page}</AdminLayout>
export default CharSceCtor;