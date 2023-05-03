import Information from "@components/support/detail/Information";
import Comment from "@components/support/detail/Comments";
import AdminLayout from "@layouts/admin";
import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  VStack,
  Flex,
  Link,
  HStack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import router from "next/router";
import { ReactElement } from "react";
import NextLink from "next/link";

const TicketDetail = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <VStack spacing={"20px"} align="stretch">
      {/* Header */}
      <Flex align="center" justify="space-between">
        <Link as={NextLink} color={"blue.500"} onClick={() => router.back()}>
          <HStack spacing={1}>
            <ArrowBackIcon w={5} h={5} />
            <Text>Back</Text>
          </HStack>
        </Link>
        <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
          Ticket #123
        </Text>
      </Flex>

      {/* Data */}
      <Information />
      <Comment />
    </VStack>
  );
};

TicketDetail.getLayout = (page: ReactElement) => (
  <AdminLayout title="Support Center">{page}</AdminLayout>
);
export default TicketDetail;
