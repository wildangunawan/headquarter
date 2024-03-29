import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import AdminLayout from "@layouts/admin";
import SoloList from "@components/training/solo-and-endorsement/SoloList";
import EndorsementList from "@components/training/solo-and-endorsement/EndorsementList";
import { ReactElement } from 'react';

const SoloAndEndorsement = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Solo and Endorsement
                </Text>
                <SoloList />
                <EndorsementList />
            </VStack>
    );
};

SoloAndEndorsement.getLayout = (page: ReactElement) => <AdminLayout title="Solo and Endorsement">{page}</AdminLayout>
export default SoloAndEndorsement;