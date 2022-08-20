import { Text, useColorModeValue, Button, Flex, FormControl, FormLabel, Input, Select, Textarea, useDisclosure, Collapse } from '@chakra-ui/react';
import Card from '@components/card/Card';

const Part2 = ({ isOpen, back }: { isOpen: boolean, back: () => void }) => {
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
                2. Your feedback
            </Text>

            <Collapse in={isOpen} animateOpacity>
                <Flex px="15px" py="10px" direction='column' gap={4} justify='center' align='center'>
                    <FormControl>
                        <FormLabel>Controller</FormLabel>
                        <Input type='text' value='Gru (1000005)' disabled />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Which division/vACC?</FormLabel>
                        <Select>
                            <option>Indonesia vACC</option>
                            <option>Singapore vACC</option>
                            <option>Malaysia vACC</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Position</FormLabel>
                        <Input type='email' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Rating</FormLabel>
                        <Select>
                            <option>Excellent ⭐⭐⭐⭐⭐</option>
                            <option>Very Good ⭐⭐⭐⭐</option>
                            <option>Good ⭐⭐⭐</option>
                            <option>OK ⭐⭐</option>
                            <option>Poor ⭐</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Comments</FormLabel>
                        <Textarea />
                    </FormControl>

                    <Flex gap={2}>
                        <Button
                            colorScheme='green'
                            variant={'outline'}
                            type='submit'
                            maxW='min-content'
                            onClick={back}
                        >
                            Back
                        </Button>
                        <Button
                            colorScheme='green'
                            type='submit'
                            maxW='min-content'
                        >
                            Submit
                        </Button>
                    </Flex>
                </Flex>
            </Collapse>
        </Card>
    );
};

export default Part2;