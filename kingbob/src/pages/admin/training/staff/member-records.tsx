import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import ExaminerList from "@components/training/staff/ExaminerList";
import FutureTraining from "@components/training/staff/FutureTraining";
import MemberList from "@components/training/staff/MemberList";
import MentorList from "@components/training/staff/MentorList";
import PastTraining from "@components/training/staff/PastTraining";
import StudentList from "@components/training/staff/StudentList";
import AdminLayout from "@layouts/admin";

const MemberTrainingRecords = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="Member Training Records">
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Member Training Records
                </Text>
                <FutureTraining />
                <PastTraining />
                <StudentList />
                <MemberList />
                <MentorList />
                <ExaminerList />
            </VStack>
        </AdminLayout>
    );
};

export default MemberTrainingRecords;