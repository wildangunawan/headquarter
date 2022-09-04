// Chakra imports
import { Button, Divider, Grid, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import AdminLayout from "layouts/admin";

// Custom components
import ExtraInformation from "@components/profile/ExtraInformation";
import UserDetail from "@components/profile/UserDetail";
import ControllingApproval from "@components/profile/ControllingApproval";
import EventBookings from "@components/profile/EventBookings";
import { ReactElement } from "react";
import Card from "@components/card/Card";

export default function MyData() {
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const textColorSecondary = "gray.400";
    const borderColor = useColorModeValue(
      "white !important",
      "#111C44 !important"
    );


    return (
        <>
            {/* Main Fields */}
            <Grid
                templateColumns={{
                    base: "1fr"
                }
                }
                gap="20px"
                mb="20px"
            >
                <Card>
                  <Stack spacing={8}>
                    <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" align="center">
                      VATSIM Southeast Asia HQ - View/Download Your Data
                    </Text>
                    <Text>
                      Per the VATSIM Data Protection and Handling Policy, below is link to your data for viewing or downloading. Downloaded data will be given in a PDF file from the HQ system. This is the data that the HQ system holds about you in order for us to deliver our services to you. Your personal information is given to the HQ system through the VATSIM SSO such as name and email.
                    </Text>
                    <Text as='b'>
                      This page is ONLY visible to you. No other member or staff can see your data from this page.
                    </Text>
                    <Text>
                      When clicking download, please wait a few minutes for the system to download your data.
                    </Text>
                    <Button colorScheme='blue' size='md'>Download My Data</Button>
                  </Stack>
                </Card>

                <Card>
                  <Stack spacing={3}>
                    <Text color={textColorPrimary} fontWeight="bold" fontSize="l">
                      Personal Information
                    </Text>
                    <Text>
                      Information we receive from VATSIM through the VATSIM SSO or collect during the HQ login process from VATSIM APIs
                    </Text>

                    <TableContainer>
                      <Table variant='striped' colorScheme='blue'>
                        <Thead>
                          <Tr>
                            <Th>VATSIM ID</Th>
                            <Th>Name</Th>
                            <Th>E-Mail Address</Th>
                            <Th>E-mail Subscription</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>1427462</Td>
                            <Td>Nolan Liew Boon Xiong</Td>
                            <Td>place.holder@gmail.com</Td>
                            <Td>yes</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                    <TableContainer>
                      <Table variant='striped' colorScheme='blue'>
                        <Thead>
                          <Tr>
                            <Th>ATC Rating (Short)</Th>
                            <Th>ATC Rating</Th>
                            <Th>Pilot Rating (Short)</Th>
                            <Th>Pilot Rating</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>8</Td>
                            <Td>Instructor (I1)</Td>
                            <Td>3</Td>
                            <Td>Instrument Rating (IR)</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                    <TableContainer>
                      <Table variant='striped' colorScheme='blue'>
                        <Thead>
                          <Tr>
                            <Th>Region Code</Th>
                            <Th>Region Name</Th>
                            <Th>Division Code</Th>
                            <Th>Division Name</Th>
                            <Th>vACC Code</Th>
                            <Th>vACC Name</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>APAC</Td>
                            <Td>Asia Pacific</Td>
                            <Td>SEA</Td>
                            <Td>Southeast Asia (VATSEA)</Td>
                            <Td>IDN</Td>
                            <Td>Indonesia</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Stack>
                </Card>

                <Card>
                  <Stack spacing={3}>
                    <Text color={textColorPrimary} fontWeight="bold" fontSize="l">
                      System Log
                    </Text>
                    <Text>
                      Certain actions that you do or that are done to you are logged in the system. Example: staff approved you for a ATC position.
                    </Text>

                    <TableContainer>
                      <Table variant='striped' colorScheme='blue'>
                        <Thead>
                          <Tr>
                            <Th>Action</Th>
                            <Th>Timestamp</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>Added 1420693 to mentor list at IDN</Td>
                            <Td>08 October 2020, 16:14 UTC</Td>
                          </Tr>
                          <Tr>
                            <Td>Added 1420693 to mentor list at IDN</Td>
                            <Td>08 October 2020, 16:15 UTC</Td>
                          </Tr>
                          <Tr>
                            <Td>Added 1420693 to mentor list at IDN</Td>
                            <Td>08 October 2020, 16:15 UTC</Td>
                          </Tr>
                          <Tr>
                            <Td>Added 1420693 to mentor list at IDN</Td>
                            <Td>08 October 2020, 16:15 UTC</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Stack>
                </Card>

                <Card>
                  <Stack spacing={3}>
                    <Text color={textColorPrimary} fontWeight="bold" fontSize="l">
                      ATC
                    </Text>
                    <Text fontWeight="bold">
                      Solo Validations
                    </Text>
                    <Text>
                      Any solo validations.
                    </Text>

                    <TableContainer>
                      <Table variant='striped' colorScheme='blue'>
                        <Thead>
                          <Tr>
                            <Th>Position</Th>
                            <Th>Student</Th>
                            <Th>Instructor</Th>
                            <Th>Start</Th>
                            <Th>End</Th>
                            <Th>Region</Th>
                            <Th>Division</Th>
                            <Th>vACC</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>WIII_APP</Td>
                            <Td>1493181</Td>
                            <Td>1427462</Td>
                            <Td>10 October 2020</Td>
                            <Td>09 November 2020</Td>
                            <Td>APAC</Td>
                            <Td>SEA</Td>
                            <Td>IDN</Td>
                          </Tr>
                          <Tr>
                            <Td>WIII_APP</Td>
                            <Td>1493181</Td>
                            <Td>1427462</Td>
                            <Td>04 April 2021</Td>
                            <Td>03 May 2021</Td>
                            <Td>APAC</Td>
                            <Td>SEA</Td>
                            <Td>IDN</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                    <br></br>

                    <Text fontWeight="bold">
                      ATC Bookings
                    </Text>
                    <Text>
                      Any non-event ATC Bookings made by you.
                    </Text>
                    <TableContainer>
                      <Table variant='striped' colorScheme='blue'>
                        <Thead>
                          <Tr>
                            <Th>Position</Th>
                            <Th>Start</Th>
                            <Th>End</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>WIII_APP</Td>
                            <Td>10 October 2020</Td>
                            <Td>09 November 2020</Td>
                          </Tr>
                          <Tr>
                            <Td>WIII_APP</Td>
                            <Td>04 April 2021</Td>
                            <Td>03 May 2021</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                    <br></br>

                    <Text fontWeight="bold">
                      Visiting Controller Roster
                    </Text>
                    <Text>
                      Any vACC in HQ where you are a visitor controller.
                    </Text>
                    <TableContainer>
                      <Table variant='striped' colorScheme='blue'>
                        <Thead>
                          <Tr>
                            <Th>vACC</Th>
                            <Th>Approved For</Th>
                            <Th>VATSIM ID</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>SING</Td>
                            <Td>DEL,GND,TWR,APP,CTR</Td>
                            <Td>1427462</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Stack>
                </Card>

                <Card>
                  <Stack spacing={3}>
                    <Text color={textColorPrimary} fontWeight="bold" fontSize="l">
                      Events
                    </Text>
                    <Text fontWeight="bold">
                      Event ATC
                    </Text>
                    <Text>
                      Events where you have requested ATC positions OR approved someone for an ATC position as staff.
                    </Text>

                    <TableContainer>
                      <Table variant='striped' colorScheme='blue'>
                        <Thead>
                          <Tr>
                            <Th>Event ID</Th>
                            <Th>Position</Th>
                            <Th>Start</Th>
                            <Th>End</Th>
                            <Th>Requested By</Th>
                            <Th>Confirmed By</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>1</Td>
                            <Td>WAAF_CTR</Td>
                            <Td>17 October 2020, 09:00</Td>
                            <Td>17 October 2020, 14:00</Td>
                            <Td>1433164</Td>
                            <Td>1420693</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                    <br></br>

                    <Text fontWeight="bold">
                      Event ATC Positions Added By You
                    </Text>
                    <Text>
                      Event ATC positions that you add as a staff are recorded for auditing.
                    </Text>
                    <TableContainer>
                      <Table variant='striped' colorScheme='blue'>
                        <Thead>
                          <Tr>
                            <Th>Event ID</Th>
                            <Th>Position</Th>
                            <Th>Added By</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>1</Td>
                            <Td>WAAF_CTR</Td>
                            <Td>1420693</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Stack>
                </Card>

                <Card>
                  <Stack spacing={3}>
                    <Text color={textColorPrimary} fontWeight="bold" fontSize="l">
                      Group Flights
                    </Text>
                    <Text fontWeight="bold">
                      Group Flights Created By You
                    </Text>
                    <Text>
                      Group flights that were created by you.
                    </Text>

                    <TableContainer>
                      <Table variant='striped' colorScheme='blue'>
                        <Thead>
                          <Tr>
                            <Th>Group Flight ID</Th>
                            <Th>DEP</Th>
                            <Th>ARR</Th>
                            <Th>Departure Time</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>1</Td>
                            <Td>WIII</Td>
                            <Td>WADD</Td>
                            <Td>17 October 2020, 14:00</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                    <br></br>

                    <Text fontWeight="bold">
                      Group Flights Participated In
                    </Text>
                    <Text>
                      Group flights that you participated in.
                    </Text>
                    <TableContainer>
                      <Table variant='striped' colorScheme='blue'>
                        <Thead>
                          <Tr>
                            <Th>Group Flight ID</Th>
                            <Th>DEP</Th>
                            <Th>ARR</Th>
                            <Th>Departure Time</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>1</Td>
                            <Td>WIII</Td>
                            <Td>WADD</Td>
                            <Td>17 October 2020, 14:00</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Stack>
                </Card>

                <Card>
                  <Stack spacing={3}>
                    <Text color={textColorPrimary} fontWeight="bold" fontSize="l">
                      Support Ticket
                    </Text>
                    <Text>
                      Any HQ support tickets created by you or closed by you.
                    </Text>

                    <TableContainer>
                      <Table variant='striped' colorScheme='blue'>
                        <Thead>
                          <Tr>
                            <Th>Ticket ID</Th>
                            <Th>Subject</Th>
                            <Th>Created By</Th>
                            <Th>Region</Th>
                            <Th>Division</Th>
                            <Th>vACC</Th>
                            <Th>Closed By</Th>
                            <Th>Last Updated</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>1</Td>
                            <Td>1321199</Td>
                            <Td>Nolan Liew Boon Xiong (1427462)</Td>
                            <Td>APAC</Td>
                            <Td>SEA</Td>
                            <Td>IDN</Td>
                            <Td>Nolan Liew Boon Xiong (1427462)</Td>
                            <Td>17 October 2020, 14:00</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Stack>
                </Card>
            </Grid>
        </>
    );
}

MyData.getLayout = (page: ReactElement) => <AdminLayout title="My Profile">{page}</AdminLayout>