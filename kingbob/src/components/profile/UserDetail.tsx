// Chakra imports
import { Avatar, Badge, Box, Flex, Icon, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card";
import { MdMailOutline } from "react-icons/md";

interface IProps {
  name: string;
  rating: string;
  atc_hrs: number;
  pilot_hrs: number;
}

export default function UserDetail({ name, rating, atc_hrs, pilot_hrs }: IProps) {
  // Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );

  return (
    <Card align="center">
      <Box
        bg={`url(https://source.unsplash.com/random/900x131/?plane)`}
        bgSize="cover"
        bgPos={"center"}
        borderRadius="16px"
        h="131px"
        w="100%"
      />
      <Avatar
        mx="auto"
        color="white"
        name={name}
        bg={"navy.900"}
        h="87px"
        w="87px"
        mt="-43px"
        border="4px solid"
        borderColor={borderColor}
      />
      <Flex
        direction={{ base: "column", md: "row" }}
        align={"center"}
        justify={"center"}
        gap={1}
      >
        <Badge colorScheme={"yellow"}>Your Student</Badge>
        <Flex
          align={"center"}
          justify={"center"}
          gap={1}
        >
          <Text color={textColorPrimary} fontWeight="bold" fontSize="xl">
            Nolan Liew Boon Xiong (1427462)
          </Text>
          <IconButton
            aria-label={`View ${name}'s email`}
            icon={<Icon as={MdMailOutline} w={5} h={5} color="blue" />}
            size="sm"
          />
        </Flex>
      </Flex>
      <Text color={textColorSecondary} fontSize="sm">
        {rating}
      </Text>

      <Flex w="max-content" mx="auto" mt="1em" gap="60px">
        <Flex mx="auto" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {atc_hrs}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            ATC hrs
          </Text>
        </Flex>
        <Flex mx="auto" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {pilot_hrs}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Pilot hrs
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
