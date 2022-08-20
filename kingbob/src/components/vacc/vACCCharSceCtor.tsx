import { Box, Link, Tab, Table, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import Card from '@components/card/Card';
import NavLink from "next/link"

const ReusableTable = () => {
    return <Box overflowX={"auto"}>
        <Table variant='simple'>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Link</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Chart</Td>
                    <Td>
                        <NavLink href="https://vats.im/idn/chart" passHref>
                            <Link color="brand.500">https://vats.im/idn/chart</Link>
                        </NavLink>
                    </Td>
                </Tr>
            </Tbody>
        </Table>
    </Box>
}

const VACCCharSceCtor = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <Card>
            <Tabs isFitted px="15px" py="10px">
                <TabList>
                    <Tab>Charts</Tab>
                    <Tab>Sector Files</Tab>
                    <Tab>Scenery</Tab>
                    <Tab>SOP</Tab>
                    <Tab>Misc</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <ReusableTable />
                    </TabPanel>
                    <TabPanel>
                        <ReusableTable />
                    </TabPanel>
                    <TabPanel>
                        <ReusableTable />
                    </TabPanel>
                    <TabPanel>
                        <ReusableTable />
                    </TabPanel>
                    <TabPanel>
                        <ReusableTable />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Card>
    );
};

export default VACCCharSceCtor;