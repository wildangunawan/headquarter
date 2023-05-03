import { VStack, Text, useColorModeValue, Icon, Flex, HStack, Button, Box, Select, Textarea, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import { GiControlTower, GiAirplaneDeparture } from "react-icons/gi";
import Image from "next/legacy/image";
import { MdEdit, MdSave } from "react-icons/md";
import { ReactElement } from "react";

const EventDetail = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <VStack spacing={"20px"} align="stretch">
            {/* Content */}
            <Card>
                <VStack px="15px" py="10px" spacing={3} align={"stretch"}>
                    <Flex gap={2} align="center" direction="column" mb={3}>
                        <Box>
                            <Text
                                fontWeight={800}
                                fontSize="2xl"
                            >
                                Swagatam Singapore
                            </Text>
                            <Text color={"gray.400"} fontSize="sm">Event start: 20 August 2022 13:00 UTC</Text>
                        </Box>

                        <HStack>
                            <Button
                                colorScheme={"orange"}
                                leftIcon={<Icon as={MdEdit} />}
                            >Edit event</Button>
                            <Button
                                colorScheme={"green"}
                                leftIcon={<Icon as={GiControlTower} />}
                            >ATC booking</Button>
                            <Button
                                colorScheme={"blue"}
                                leftIcon={<Icon as={GiAirplaneDeparture} />}
                            >Flight booking</Button>
                        </HStack>
                    </Flex>

                    <Image
                        src="https://media.discordapp.net/attachments/996016798958886994/1004505556603654214/unknown.png?width=1201&height=676"
                        alt="Swagatam Singapore"
                        height="1080"
                        width="1920"
                    />

                    <Text>
                        Nepal vACC in collaboration with Singapore vACC are pleased to announce “Swagatam Singapore”. Depart from the beautiful City of Singapore and enjoy ATC all the way to Kathmandu. Make sure to bring some extra fuel in case of holdings.
                        <br /><br />
                        <b>Singapore Scenery</b>: https://sinvacc.org/scenery/<br />
                        <b>WSSS Briefing</b>: https://bit.ly/wsssbrief<br />
                        <b>VNKT Charts</b>: https://vats.im/vnkt_chart<br />
                        <b>Routing</b>: AROSO Y513 KALIL Y504 GUNIP KARON IKULA L515 OBMOG M770 DABEN W112 DOPID CEA ROMEO
                    </Text>
                </VStack>
            </Card>

            {/* Submit feedback */}
            <Card>
                <Text
                    me="auto"
                    color={textColor}
                    fontSize="xl"
                    fontWeight="700"
                    lineHeight="100%"
                    px="15px" py="10px"
                >
                    Share what you think about this event
                </Text>
                <Text fontSize={"sm"} px="15px" pb="10px">Your feedback will be carefully reviewed by respective staff and will be used to improve events in the future</Text>

                <VStack px="15px" pb="10px" spacing={3} align={"stretch"}>
                    <Flex gap={2} direction="column" mb={3}>
                        <Text fontWeight={600}>Rating</Text>
                        <Select>
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </Select>
                    </Flex>
                    <Flex gap={2} direction="column" mb={3}>
                        <Text fontWeight={600}>Feedback</Text>
                        <Textarea placeholder="Tell us what do you think about this event" />
                    </Flex>

                    <Button
                        colorScheme={"blue"}
                        leftIcon={<Icon as={MdSave} />}
                    >Submit</Button>
                </VStack>
            </Card>

            {/* Feedbacks */}
            <Card>
                <Text
                    me="auto"
                    color={textColor}
                    fontSize="xl"
                    fontWeight="700"
                    lineHeight="100%"
                    px="15px" py="10px"
                >
                    Feedbacks
                </Text>

                <Box overflowX={"auto"}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Rating</Th>
                                <Th>Comment</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>4</Td>
                                <Td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos. Quis incidunt esse molestiae sequi tempora magnam eum ullam quidem exercitationem consequatur eveniet accusantium praesentium quibusdam, ipsam hic eos sit.</Td>
                            </Tr>
                            <Tr>
                                <Td>4</Td>
                                <Td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos. Quis incidunt esse molestiae sequi tempora magnam eum ullam quidem exercitationem consequatur eveniet accusantium praesentium quibusdam, ipsam hic eos sit.</Td>
                            </Tr>
                            <Tr>
                                <Td>4</Td>
                                <Td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos. Quis incidunt esse molestiae sequi tempora magnam eum ullam quidem exercitationem consequatur eveniet accusantium praesentium quibusdam, ipsam hic eos sit.</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Card>
        </VStack>
    );
};

EventDetail.getLayout = (page: ReactElement) => <AdminLayout title="Swagatam Singapore">{page}</AdminLayout>
export default EventDetail;