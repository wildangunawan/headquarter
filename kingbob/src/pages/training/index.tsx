import {
  Button,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import LastTraining from "@components/training/student/LastTraining";
import MentorNotes from "@components/training/MentorNotes";
import NextTraining from "@components/training/student/NextTraining";
import CPTInformation from "@components/training/student/CPTInformation";
import SoloInformation from "@components/training/student/SoloInformation";
import AdminLayout from "@layouts/admin";
import NextLink from "next/link";
import FeedbackFromOtherMembers from "@components/training/Feedbacks";
import { ReactElement } from "react";

const Training = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <>
      {/* My own training */}
      <VStack spacing={"20px"} align="stretch">
        <Flex align="center" justify={"space-between"} gap={"20px"}>
          <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
            My Training
          </Text>
          <Button
            as="a"
            href="/training/me"
            colorScheme="blue"
            whiteSpace={"unset"}
            textAlign="center"
            py={{ base: "1.5em", sm: "unset" }}
          >
            View My Training Detail
          </Button>
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
        <FeedbackFromOtherMembers />
      </VStack>
    </>
  );
};

Training.getLayout = (page: ReactElement) => (
  <AdminLayout title="Training">{page}</AdminLayout>
);
export default Training;
