import { VStack, Button, Text, useColorModeValue, FormControl, FormLabel, Input, Select, Textarea, Alert, AlertIcon, FormHelperText } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import { ReactElement } from "react";

const VACCSettings = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <VStack spacing={"20px"} align="stretch">
            <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                vACC Settings
            </Text>

            <Alert status="info">
                <AlertIcon />
                These setting is changeable by only by the vACC Director or vACC Deputy Director.
            </Alert>

            <Card>
                <VStack spacing={4} align="stretch" px="15px" py="10px">
                    <FormControl>
                        <FormLabel>vACC Welcome Message</FormLabel>
                        <Textarea />
                    </FormControl>

                    <FormControl>
                        <FormLabel>vACC Website</FormLabel>
                        <Input />
                    </FormControl>

                    <FormControl>
                        <FormLabel>vACC Image (16:9 recommended)</FormLabel>
                        <Input />
                    </FormControl>

                    <FormControl>
                        <FormLabel>vACC Email</FormLabel>
                        <Input />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Discord Webhook</FormLabel>
                        <Input />
                        <FormHelperText>HQ will send notification regarding events in your vACC (e.g. ticket created/replied, CPT request, ATC bookings, etc) to this webhook</FormHelperText>
                    </FormControl>

                    <Button colorScheme={"blue"}>Update</Button>
                </VStack>
            </Card>
        </VStack>
    );
};

VACCSettings.getLayout = (page: ReactElement) => <AdminLayout title="ATC Booking">{page}</AdminLayout>
export default VACCSettings;