import {
  VStack,
  Text,
  useColorModeValue,
  Icon,
  Flex,
  Link,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import { FiClock } from "react-icons/fi";
import NextLink from "next/link";
import { ReactElement } from "react";

const NewsDetail = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <VStack spacing={"20px"} align="stretch">
      {/* Title */}
      <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
        Merry Christmas and Happy New Year!
      </Text>

      {/* Content */}
      <Card>
        <VStack px="15px" py="10px" spacing={"10px"} align={"stretch"}>
          <Flex align={"center"} gap={1} color={"gray.400"} fontSize="sm">
            <Icon as={FiClock} />
            <Text>
              20 August 2022 13:00 UTC by{" "}
              <Link
                as={NextLink}
                href="/events/jakarta-turn-around-1"
                color={"blue.400"}
              >
                Mel (1000005)
              </Link>
            </Text>
          </Flex>
          <Text>
            Season greetings from VATSIM South East Asia!
            <br />
            It has been a rough road for many this year but we believe that 2021
            will hold a brighter future.
            <br />
            <br />
            We wish to thank all VATSEA vACC staff members, controllers, pilots
            as well as our fellow neighbours for their contributions this year.
            Wishing one and all a Merry Christmas and a Happy New Year!
          </Text>
        </VStack>
      </Card>
    </VStack>
  );
};

NewsDetail.getLayout = (page: ReactElement) => (
  <AdminLayout title="Merry Christmas and Happy New Year!">{page}</AdminLayout>
);
export default NewsDetail;
