import AdminLayout from '@layouts/admin';
import { SimpleGrid, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import VACCStaffs from '@components/vacc/vACCStaffs';
import VACCInfo from '@components/vacc/vACCInfo';
import VACCPolicies from '@components/vacc/vACCPolicies';
import VACCATCRoster from '@components/vacc/vACCATCRoster';
import VACCCharSceCtor from '@components/vacc/vACCCharSceCtor';
import { ReactElement } from 'react';

const VACCDetail = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Indonesia vACC
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px">
                    <VACCInfo />
                    <VACCStaffs />
                </SimpleGrid>

                <VACCCharSceCtor />
                <VACCPolicies />
                <VACCATCRoster />
            </VStack>
    );
};

VACCDetail.getLayout = (page: ReactElement) => <AdminLayout title="Indonesia vACC">{page}</AdminLayout>
export default VACCDetail;