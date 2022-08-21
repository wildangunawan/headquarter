// Basically this is division and vACC list
import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, VStack, Text, useColorModeValue, StackDivider, Link, Divider } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import NavLink from "next/link"
import { ReactElement } from 'react';

const DivisionAndvACCList = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Divisions and vACCs List
                </Text>

                <Card>
                    <Accordion
                        allowMultiple
                        allowToggle
                        defaultIndex={0} // to open first item by default
                    >
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        South East Asia (SEA)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <VStack
                                    spacing={4}
                                    divider={<StackDivider />}
                                >
                                    <NavLink href="/division/SEA" passHref>
                                        <Link color="brand.500">South East Asia Division</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/HK" passHref>
                                        <Link color="brand.500">Hong Kong vACC</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/IDN" passHref>
                                        <Link color="brand.500">Indonesia vACC</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/MYS" passHref>
                                        <Link color="brand.500">Malaysia vACC</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/MYR" passHref>
                                        <Link color="brand.500">Myanmar vACC</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/PHL" passHref>
                                        <Link color="brand.500">Phillipines vACC</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/SGP" passHref>
                                        <Link color="brand.500">Singapore vACC</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/THA" passHref>
                                        <Link color="brand.500">Thailand vACC</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/VCL" passHref>
                                        <Link color="brand.500">Vietnam - Cambodia - Laos vACC</Link>
                                    </NavLink>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        West Asia (WA)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <VStack
                                    spacing={4}
                                    divider={<StackDivider />}
                                >
                                    <NavLink href="/division/WA" passHref>
                                        <Link color="brand.500">West Asia Division</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/AFG" passHref>
                                        <Link color="brand.500">Afghanistan vACC</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/BGD" passHref>
                                        <Link color="brand.500">Bangladesh vACC</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/BTN" passHref>
                                        <Link color="brand.500">Bhutan vACC</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/IND" passHref>
                                        <Link color="brand.500">India vACC</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/NPL" passHref>
                                        <Link color="brand.500">Nepal vACC</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/PAK" passHref>
                                        <Link color="brand.500">Pakistan vACC</Link>
                                    </NavLink>
                                    <NavLink href="/vacc/SRM" passHref>
                                        <Link color="brand.500">Sri Lanka & Maldives vACC</Link>
                                    </NavLink>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>

                    </Accordion>
                </Card>
            </VStack>
    );
};

DivisionAndvACCList.getLayout = (page: ReactElement) => <AdminLayout title="Division and vACC List">{page}</AdminLayout>
export default DivisionAndvACCList;