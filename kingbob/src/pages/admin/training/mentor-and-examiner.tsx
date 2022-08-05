import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import AdminLayout from "@layouts/admin";
import MentorList from "@components/training/mentor-and-examiner/MentorList";
import ExaminerList from "@components/training/mentor-and-examiner/ExaminerList";

const MentorAndExaminer = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="Instructor/Mentor and Examiner">
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Instructor/Mentor and Examiner
                </Text>
                <MentorList />
                <ExaminerList />
            </VStack>
        </AdminLayout>
    );
};

export default MentorAndExaminer;