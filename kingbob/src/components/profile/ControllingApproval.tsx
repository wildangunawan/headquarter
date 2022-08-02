import { Flex, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Text, useColorModeValue, Checkbox, CheckboxGroup, Highlight } from "@chakra-ui/react";
import Card from "@components/card/Card";

const ControllingApproval = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
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
                    vACC Approved
                </Text>
            </Flex>

            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            {/* Text transform to unset so it will keep it as vACC not VACC */}
                            <Th rowSpan={2} textTransform="unset">vACC</Th>
                            <Th colSpan={6} textAlign="center">Position</Th>
                        </Tr>
                        <Tr>
                            <Th>DEL</Th>
                            <Th>GND</Th>
                            <Th>TWR</Th>
                            <Th>APP</Th>
                            <Th>DEP</Th>
                            <Th>CTR</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Malaysia vACC</Td>
                            <CheckboxGroup colorScheme={"green"} size="sm">
                                <Td><Checkbox isChecked /></Td>
                                <Td><Checkbox isChecked /></Td>
                                <Td><Checkbox isChecked /></Td>
                                <Td><Checkbox isChecked /></Td>
                                <Td><Checkbox isChecked /></Td>
                                <Td><Checkbox isChecked /></Td>
                            </CheckboxGroup>
                        </Tr>
                        <Tr>
                            <Td>Indonesia vACC</Td>
                            <CheckboxGroup colorScheme={"green"} size="sm">
                                <Td><Checkbox isChecked /></Td>
                                <Td><Checkbox isChecked /></Td>
                                <Td><Checkbox isChecked={false} /></Td>
                                <Td><Checkbox isChecked={false} /></Td>
                                <Td><Checkbox isChecked={false} /></Td>
                                <Td><Checkbox isChecked={false} /></Td>
                            </CheckboxGroup>
                        </Tr>
                        <Tr>
                            <Td>Indonesia vACC</Td>
                            <Td colSpan={6}>
                                <Highlight query='WIII_TWR' styles={{ fontWeight: 'bold' }}>
                                    Solo validated for WIII_TWR
                                </Highlight>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    );
};

export default ControllingApproval;