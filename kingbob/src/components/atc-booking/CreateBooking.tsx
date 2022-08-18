import Card from "@components/card/Card";
import { Button, Flex, Grid, Input, Text, useColorModeValue, VStack } from "@chakra-ui/react";

const CreateBooking = () => {
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
                Create a booking
            </Text>

            <VStack spacing={{
                base: "0px",
                lg: "10px",
            }} align="stretch" px="15px" py="10px">
                <Grid
                    templateColumns={{
                        base: "1fr",
                        lg: "0.2fr 1.8fr"
                    }}
                    templateRows={{
                        base: "repeat(2, 1fr)",
                        lg: "1fr"
                    }}

                    alignItems={"center"}
                >
                    <Text>Position</Text>
                    <Input />
                </Grid>
                <Grid
                    templateColumns={{
                        base: "1fr",
                        lg: "0.2fr 1.8fr"
                    }}
                    templateRows={{
                        base: "repeat(2, 1fr)",
                        lg: "1fr"
                    }}

                    alignItems={"center"}
                >
                    <Text>Start (UTC)</Text>
                    <Input type="datetime-local" />
                </Grid>
                <Grid
                    templateColumns={{
                        base: "1fr",
                        lg: "0.2fr 1.8fr"
                    }}
                    templateRows={{
                        base: "repeat(2, 1fr)",
                        lg: "1fr"
                    }}

                    alignItems={"center"}
                >
                    <Text>End (UTC)</Text>
                    <Input type="datetime-local" />
                </Grid>

                <Button colorScheme={"blue"}>Submit</Button>
            </VStack>
        </Card>
    );
};

export default CreateBooking;