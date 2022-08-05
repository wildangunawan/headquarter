import { Button, Flex, Input, Select, Text, Textarea, VStack } from '@chakra-ui/react';
import Card from '@components/card/Card';
import { useEffect, useState } from 'react';

interface IProps {
    onSubjectChange: (data: string) => void;
}

const TicketForm = ({ onSubjectChange }: IProps) => {
    const [subject, setSubject] = useState("");

    // Give the subject value to the parent component
    useEffect(() => {
        const timeoutId = setTimeout(() => onSubjectChange(subject), 500);
        return () => clearTimeout(timeoutId);
    }, [subject]);

    return (
        <Card>
            <VStack gap={4} px="15px" py="10px" align="stretch">
                <Flex direction={"column"} gap={2}>
                    <Text>Subject</Text>
                    <Input type="text" onChange={(e) => setSubject(e.target.value)} />
                </Flex>

                <Flex direction={"column"} gap={2}>
                    <Text>Assign staff</Text>
                    <Select>
                        <option value='option0'>South East Asia Division Staff</option>
                        <option value='option1'>Hong Kong vACC</option>
                        <option value='option2'>Indonesia vACC</option>
                        <option value='option3'>Malaysia vACC</option>
                        <option value='option3'>Any other vACC, I am too tired to write it one by one</option>
                    </Select>
                </Flex>

                <Flex direction={"column"} gap={2}>
                    <Text>Description</Text>
                    <Textarea />
                </Flex>

                <Button colorScheme={"green"}>Submit</Button>
            </VStack>
        </Card>
    );
};

export default TicketForm;