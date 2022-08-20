import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Link, Text, useColorModeValue, VStack, HStack } from "@chakra-ui/react";
import CPTHistory from "@components/training/CPTHistory";
import MentorNotes from "@components/training/MentorNotes";
import SoloHistory from "@components/training/SoloHistory";
import StudentInformation from "@components/training/StudentInformation";
import TrainingHistory from "@components/training/TrainingHistory";
import AdminLayout from "@layouts/admin";
import router from 'next/router'

const StudentSpecificView = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="Training Detail - Mel (1000005)">
            <VStack spacing={"20px"} align="stretch">
                {/* Header */}
                <Flex align="center" justify="space-between">
                    <Link color={"blue.500"} onClick={() => router.back()}>
                        <HStack spacing={1}>
                            <ArrowBackIcon w={5} h={5} />
                            <Text>Back</Text>
                        </HStack>
                    </Link>
                    <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                        Training Detail
                    </Text>
                </Flex>

                {/* Data */}
                <StudentInformation />
                <TrainingHistory />
                <MentorNotes />
                <SoloHistory />
                <CPTHistory />
            </VStack>
        </AdminLayout >
    );
};

export default StudentSpecificView;