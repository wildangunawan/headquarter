import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import FutureTraining from "@components/training/mentor/FutureTraining";
import MyStudent from "@components/training/mentor/MyStudent";
import TrainingRequest from "@components/training/mentor/TrainingRequest";
import AdminLayout from "@layouts/admin";
import CPTRequest from "@components/training/mentor/CPTRequest";
import { ReactElement } from 'react';

const MentorCenter = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <>
            {/* Mentor */}
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Instructor / Mentor
                </Text>
                <FutureTraining />
                <TrainingRequest />
                <CPTRequest />
                <MyStudent />
            </VStack>
        </>
    );
};

MentorCenter.getLayout = (page: ReactElement) => <AdminLayout title="Mentor Center">{page}</AdminLayout>
export default MentorCenter;