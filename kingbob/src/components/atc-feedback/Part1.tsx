import { Text, useColorModeValue, Button, Flex, FormControl, FormLabel, Input, Collapse } from '@chakra-ui/react';
import Card from '@components/card/Card';

const Part1 = ({ isOpen, next }: { isOpen: boolean, next: () => void }) => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <Card
            bg={isOpen ? 'white' : 'gray.50'}
        >
            <Text
                me="auto"
                color={isOpen ? textColor : 'gray.400'}
                fontSize="xl"
                fontWeight="700"
                lineHeight="100%"
                px="15px" py="10px"
            >
                1. Controller&apos;s info
            </Text>

            <Collapse in={isOpen} animateOpacity>
                <Flex px="15px" py="10px" direction='column' gap={2} justify='center' align='center'>
                    <FormControl>
                        <FormLabel>Controller&apos;s CID</FormLabel>
                        <Input type='text' />
                    </FormControl>
                    <Button
                        colorScheme='green'
                        type='submit'
                        maxW='min-content'
                        onClick={next}
                    >
                        Next
                    </Button>
                </Flex>
            </Collapse>

        </Card>
    );
};

export default Part1;