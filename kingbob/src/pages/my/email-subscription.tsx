import { VStack, Text, useColorModeValue, FormControl, FormLabel, Switch, Divider, Button, Flex } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import { ReactElement } from "react";

const EmailSubscriptionSetting = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <VStack spacing={"20px"} align="stretch">
            <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                Email Subscription
            </Text>

            <Card>
                <VStack px="15px" py="10px" spacing={3} align="stretch">
                    <Text>Regarding the General Data Protection Regulation (GDPR) policies on VATSIM, ALL users of this system require to opt-in to receiving marketing emails. Marketing e-mails are those e-mails sent by staff members informing you of upcoming events, changes in the vACCs such as sector file updates, and other activities in the vACC, division, or region.</Text>
                    <Text><strong>E-mails sent by the automated HQ system</strong> (such as rating upgrades or changes to your profile such as approvals) are not considered marketing e-mail. This also includes flight or ATC booking that you have been confirmed for - by submitting an ATC or flight booking request, you consent to receiving a confirmation e-mail from the system.</Text>
                    <Text>We highly recommend all members subscribe to e-mails. If you are a staff in the HQ, you should subscribe to this otherwise you will not receive e-mails sent by your staff members from the system!</Text>
                    <Text>By checking the box below and submitting the form, you agree to receive marketing and activity emails from this HQ System. If you do not want to receive any marketing e-mails, do not check the box and click Submit.</Text>
                    <Text>You can change this setting any time (on the HQ MENU &gt; Members &gt; Membership &gt; Email Subscription)</Text>

                    <Divider />

                    <Flex direction='column' gap={2} justify='center' align='center'>
                        <FormControl display='flex' alignItems='center' justifyContent={'center'} gap={2}>
                            <Switch size='lg' id='subscribe-to-email-system' />
                            <FormLabel htmlFor='subscribe-to-email-system' mb='0'>
                                Subscribe to HQ emailing system
                            </FormLabel>
                        </FormControl>
                        <Button
                            colorScheme='blue'
                            type='submit'
                            maxW='min-content'
                        >
                            Submit
                        </Button>
                    </Flex>
                </VStack>
            </Card>
        </VStack>
    );
};

EmailSubscriptionSetting.getLayout = (page: ReactElement) => <AdminLayout title="Email Subscription">{page}</AdminLayout>
export default EmailSubscriptionSetting;