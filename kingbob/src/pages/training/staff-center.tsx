import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import CPTRequest from "@components/training/staff/CPTRequest";
import ExaminerList from "@components/training/staff/ExaminerList";
import FutureTraining from "@components/training/staff/FutureTraining";
import MemberList from "@components/training/staff/MemberList";
import MentorList from "@components/training/staff/MentorList";
import PastTraining from "@components/training/staff/PastTraining";
import StudentList from "@components/training/staff/StudentList";
import AdminLayout from "@layouts/admin";
import { ReactElement } from 'react';

const StaffCenter = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Staff Center
                </Text>

                <CPTRequest />
                <FutureTraining />
                <PastTraining />
                <StudentList />
                <MemberList />
                <MentorList />
                <ExaminerList />
            </VStack>
    );
};

StaffCenter.getLayout = (page: ReactElement) => <AdminLayout title="Staff Center">{page}</AdminLayout>
export default StaffCenter;