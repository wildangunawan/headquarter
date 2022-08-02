import { Button, Flex, useColorModeValue } from '@chakra-ui/react';
import Information from './Information';

const ExtraInformation = () => {
    const cardShadow = useColorModeValue(
        "0px 18px 40px rgba(112, 144, 176, 0.12)",
        "unset"
    );

    return (
        <Flex direction={"column"} gap="20px">
            <Information
                boxShadow={cardShadow}
                title="Region"
                value="Asia Pacific (APAC)"
            />
            <Information
                boxShadow={cardShadow}
                title="Division"
                value="South East Asia (SEA)"
            />
            <Information
                boxShadow={cardShadow}
                title="Home vACC"
                value="Indonesia vACC (IDN)"
            />
            <Button colorScheme={"blue"}>View Training</Button>
        </Flex>
    );
};

export default ExtraInformation;