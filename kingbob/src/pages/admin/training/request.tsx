import {
    Button,
    Flex,
    Text,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";
import ATCRequestModal from "@components/training/modal/ATCRequest";
import AdminLayout from "@layouts/admin";

const Training = () => {
    const { onOpen, modal, requestSubmitted } = ATCRequestModal()
    console.log(ATCRequestModal);

    return (
        <AdminLayout title="Training System">
            <Flex
                width={{ base: "90vw", xl: "80vw" }}
                align="center"
                height="80vh"
                justify="center"
                gap={4}
                direction={"column"}
            >
                {
                    requestSubmitted
                        ? <Alert
                            status='success'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                            height='200px'
                            width={{ base: "90vw", xl: "40vw" }}
                        >
                            <AlertIcon boxSize='40px' mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                Application submitted!
                            </AlertTitle>
                            <AlertDescription maxWidth='sm'>
                                We already have your training request and will respond to it ASAP. Please wait for a few days to get your answer.
                            </AlertDescription>
                        </Alert>
                        : <>
                            <Text maxW="50ch" textAlign={"center"}>You&apos;re not registered as ATC in any vACC under any vACC. To start controlling, you can register using button below.</Text>
                            <Button colorScheme={"blue"} p={6} onClick={onOpen}>Register now</Button>
                        </>
                }
            </Flex>

            {/* Show modal */}
            {modal}
        </AdminLayout >
    );
};

export default Training;