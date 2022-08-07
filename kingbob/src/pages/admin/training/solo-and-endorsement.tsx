import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import AdminLayout from "@layouts/admin";
import SoloList from "@components/training/solo-endorsement-and-fss/SoloList";
import EndorsementList from "@components/training/solo-endorsement-and-fss/EndorsementList";
import FSSRoster from "@components/training/solo-endorsement-and-fss/FSSRoster";

const SoloAndEndorsement = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="Solo and Endorsement">
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Solo and Endorsement
                </Text>
                <SoloList />
                <EndorsementList />
            </VStack>
        </AdminLayout>
    );
};

export default SoloAndEndorsement;