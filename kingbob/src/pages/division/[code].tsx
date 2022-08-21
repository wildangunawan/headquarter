import AdminLayout from '@layouts/admin';
import { SimpleGrid, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import DivisionStaffs from '@components/division/DivisionStaffs';
import DivisionInfo from '@components/division/DivisionInfo';
import VACCsInDivision from '@components/division/vACCsInDivision';
import DivisionPolicies from '@components/division/DivisionPolicies';
import { ReactElement } from 'react';

const DivisionDetail = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <VStack spacing={"20px"} align="stretch">
            <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                South East Asia Division
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px">
                <DivisionInfo />
                <DivisionStaffs />
            </SimpleGrid>

            <VACCsInDivision />
            <DivisionPolicies />
        </VStack>
    );
};

DivisionDetail.getLayout = (page: ReactElement) => <AdminLayout title="South East Asia Division">{page}</AdminLayout>
export default DivisionDetail;