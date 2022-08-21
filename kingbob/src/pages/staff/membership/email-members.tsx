import { VStack, Button, Text, useColorModeValue, FormControl, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import { ReactElement } from "react";

const EmailMembers = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Mass Email Members
                </Text>

                <Card>
                    <VStack spacing={4} align="stretch" px="15px" py="10px">
                        <FormControl>
                            <FormLabel>Group</FormLabel>
                            <Select>
                                <option>Indonesia vACC Staff</option>
                                <option>Indonesia vACC Staff & Mentors/Instructors</option>
                                <option>Indonesia vACC Mentors/Instructors</option>
                                <option>Indonesia vACC ATC</option>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Subject</FormLabel>
                            <Input />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Message</FormLabel>
                            <Textarea />
                        </FormControl>

                        <Button colorScheme={"blue"}>Send email</Button>
                    </VStack>
                </Card>
            </VStack>
    );
};

EmailMembers.getLayout = (page: ReactElement) => <AdminLayout title="Mass Email Members">{page}</AdminLayout>
export default EmailMembers;