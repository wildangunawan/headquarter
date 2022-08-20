import { VStack, Text, useColorModeValue } from '@chakra-ui/react';
import Part1 from '@components/atc-feedback/Part1';
import Part2 from '@components/atc-feedback/Part2';
import AdminLayout from '@layouts/admin';
import { useState } from 'react';

const ATCFeedback = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    // State
    const [isPart1Open, setIsPart1Open] = useState(true);
    const [isPart2Open, setIsPart2Open] = useState(false);

    return (
        <AdminLayout title="ATC Feedback">
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Send a feedback
                </Text>

                <Part1
                    isOpen={isPart1Open}
                    next={() => {
                        setIsPart1Open(false);
                        setIsPart2Open(true);
                    }}
                />
                <Part2
                    isOpen={isPart2Open}
                    back={() => {
                        setIsPart1Open(true);
                        setIsPart2Open(false);
                    }}
                />
            </VStack>
        </AdminLayout>
    );
};

export default ATCFeedback;