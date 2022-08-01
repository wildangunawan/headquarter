import { SimpleGrid, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import FutureTraining from "@components/training/mentor/FutureTraining";
import MyStudent from "@components/training/mentor/MyStudent";
import TrainingRequest from "@components/training/mentor/TrainingRequest";
import LastTraining from "@components/training/student/LastTraining";
import MentorNotes from "@components/training/student/MentorNotes";
import NextTraining from "@components/training/student/NextTraining";
import CPTInformation from "@components/training/student/CPTInformation";
import SoloInformation from "@components/training/student/SoloInformation";
import AdminLayout from "@layouts/admin";

const Training = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="Training">
            {/* My own training */}
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    My Training
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px">
                    <LastTraining />
                    <NextTraining />
                </SimpleGrid>
                <MentorNotes />
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px">
                    <SoloInformation />
                    <CPTInformation />
                </SimpleGrid>
            </VStack>

            {/* Mentor */}
            <VStack spacing={"20px"} align="stretch" mt="45px">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Instructor / Mentor
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px">
                    <TrainingRequest />
                    <FutureTraining />
                </SimpleGrid>
                <MyStudent />
            </VStack>
        </AdminLayout>
    );
};

export default Training;