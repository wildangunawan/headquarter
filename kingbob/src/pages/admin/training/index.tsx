import { Button, Flex, SimpleGrid, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import FutureTraining from "@components/training/mentor/FutureTraining";
import MyStudent from "@components/training/mentor/MyStudent";
import TrainingRequest from "@components/training/mentor/TrainingRequest";
import LastTraining from "@components/training/student/LastTraining";
import MentorNotes from "@components/training/MentorNotes";
import NextTraining from "@components/training/student/NextTraining";
import CPTInformation from "@components/training/student/CPTInformation";
import SoloInformation from "@components/training/student/SoloInformation";
import AdminLayout from "@layouts/admin";
import CPTRequest from "@components/training/mentor/CPTRequest";
import NavLink from "next/link";

const Training = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="Training">
            {/* My own training */}
            <VStack spacing={"20px"} align="stretch">
                <Flex justify={"space-between"}>
                    <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                        My Training
                    </Text>
                    <NavLink href="/admin/training/me" passHref>
                        <Button as="a" colorScheme="blue">View My Training Detail</Button>
                    </NavLink>
                </Flex>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px">
                    <LastTraining />
                    <NextTraining />
                </SimpleGrid>
                <MentorNotes viewingMyself />
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
                <FutureTraining />
                <TrainingRequest />
                <CPTRequest />
                <MyStudent />
            </VStack>
        </AdminLayout>
    );
};

export default Training;