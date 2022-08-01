import Information from '@components/training/detail/Information';
import Comment from '@components/training/detail/Comments';
import AdminLayout from '@layouts/admin';
import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { VStack, Flex, Link, HStack, useColorModeValue, Text } from '@chakra-ui/react';
import router from 'next/router';

const TrainingDetail = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="Training #123">
            <VStack spacing={"20px"} align="stretch">
                {/* Header */}
                <Flex align="center" justify="space-between">
                    <Link color={"blue.500"} onClick={() => router.back()}>
                        <HStack spacing={1}>
                            <ArrowBackIcon w={5} h={5} />
                            <Text>Back</Text>
                        </HStack>
                    </Link>
                    <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                        Training #123
                    </Text>
                </Flex>

                {/* Data */}
                <Information />
                <Comment />
            </VStack>
        </AdminLayout>
    );
};

export default TrainingDetail;