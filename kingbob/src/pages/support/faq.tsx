import { Button, Flex, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import PendingTickets from '@components/support/PendingTickets';
import ResolvedTickets from '@components/support/ResolvedTickets';
import AdminLayout from '@layouts/admin';
import NavLink from "next/link"
import { ReactElement } from 'react';
import CreateFaq from "../../components/support/modal/CreateFaq";

const FaqPage = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    // Modal
    const {
      onOpen: openCreateFaqModal,
      modal: CreateFaqModal,
      newQuestionAdded
    } = CreateFaq();

    return (
      <>
            <VStack spacing={"20px"} align="stretch">
                {/* Header */}
                <Flex justify={"space-between"}>
                    <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                        FAQ
                    </Text>
                    <Button as="a" colorScheme="blue" onClick={openCreateFaqModal}>Create FAQ</Button>
                </Flex>

                {/* Data */}
                <PendingTickets />
            </VStack>

            {/* Show modal */}
            {CreateFaqModal}
      </>
    );
};

FaqPage.getLayout = (page: ReactElement) => <AdminLayout title="FAQ">{page}</AdminLayout>
export default FaqPage;