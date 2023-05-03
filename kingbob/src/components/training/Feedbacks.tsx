import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Text,
    useColorModeValue,
    Link,
    Box,
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NextLink from "next/link"

const FeedbackFromOtherMembers = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <Card>
            <Text
                me="auto"
                color={textColor}
                fontSize="xl"
                fontWeight="700"
                lineHeight="100%"
                px="15px" py="10px"
            >
                Feedback From Other Members
            </Text>

            <Box overflowX={"auto"}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Comment</Th>
                            <Th>For session</Th>
                            <Th>Added at</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus praesentium optio harum laudantium ipsam earum! Dolore esse magnam sint quasi! Enim facilis aperiam laboriosam sit amet explicabo iusto, natus perspiciatis.</Text>
                            </Td>
                            <Td>WIII_TWR at 25 Aug 2022</Td>
                            <Td>31 Aug 2022 13:00 UTC</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus praesentium optio harum laudantium ipsam earum! Dolore esse magnam sint quasi! Enim facilis aperiam laboriosam sit amet explicabo iusto, natus perspiciatis.</Text>
                            </Td>
                            <Td>WIII_TWR at 25 Aug 2022</Td>
                            <Td>31 Aug 2022 13:00 UTC</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus praesentium optio harum laudantium ipsam earum! Dolore esse magnam sint quasi! Enim facilis aperiam laboriosam sit amet explicabo iusto, natus perspiciatis.</Text>
                            </Td>
                            <Td>WIII_TWR at 25 Aug 2022</Td>
                            <Td>31 Aug 2022 13:00 UTC</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Card>
    );
};

export default FeedbackFromOtherMembers;