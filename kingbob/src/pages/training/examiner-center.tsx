import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import FutureCPT from "@components/training/examiner/FutureCPT";
import PastCPT from "@components/training/examiner/PastCPT";
import AdminLayout from "@layouts/admin";
import { ReactElement } from 'react';

const ExaminerCenter = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <VStack spacing={"20px"} align="stretch" >
            <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                Examiner Center
            </Text>
            <FutureCPT />
            <PastCPT />
        </VStack>
    );
};

ExaminerCenter.getLayout = (page: ReactElement) => <AdminLayout title="Mentor Center">{page}</AdminLayout>
export default ExaminerCenter;