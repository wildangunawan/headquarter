import { Box, Button, Flex, Highlight, Link, Text, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";
import Card from "@components/card/Card";
import Image from "next/image"
import NavLink from "next/link"

const FeaturedEvents = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <Card>
            <Flex>
                <Text
                    me="auto"
                    color={textColor}
                    fontSize="xl"
                    fontWeight="700"
                    lineHeight="100%"
                    px="15px" py="10px"
                >
                    Featured Events
                </Text>
            </Flex>

            <VStack align="stretch" px="15px" py="10px">
                <Image
                    src="https://source.unsplash.com/random/?plane"
                    alt={"Nanti dulu ya"}
                    width="1920"
                    height="1080"
                    style={{ borderRadius: '16px' }}
                />
                <Box>
                    <NavLink href="/event/jakarta-turn-around-1" passHref>
                        <Link
                            color={textColor}
                            fontSize="lg"
                            fontWeight="500"
                            me="14px"
                        >
                            Jakarta Turn Around 1
                        </Link>
                    </NavLink>
                    <Text color={'gray.900'} noOfLines={3}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, fugiat! Repellat, totam. Harum enim perferendis nisi repellendus et? Soluta, enim?</Text>

                    <Flex align={"center"} justify="space-between" mt={3}>
                        <Box>
                            <Highlight
                                query="3 days!"
                                styles={{ bg: 'blue', color: 'white', px: 2, py: 1 }}
                            >
                                Starting in 3 days!
                            </Highlight>
                        </Box>
                        <NavLink href="/event/jakarta-turn-around-1" passHref>
                            <Button as="a" colorScheme={"blue"}>Check it out</Button>
                        </NavLink>
                    </Flex>
                </Box>
            </VStack>
        </Card>
    );
};

export default FeaturedEvents;