import {
  Button,
  Flex,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import PendingTickets from "@components/support/PendingTickets";
import ResolvedTickets from "@components/support/ResolvedTickets";
import AdminLayout from "@layouts/admin";
import NextLink from "next/link";
import { ReactElement } from "react";

const Tickets = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <VStack spacing={"20px"} align="stretch">
      {/* Header */}
      <Flex justify={"space-between"}>
        <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
          Support Center
        </Text>
        <Button as="a" href="/support/add" colorScheme="blue">
          Create ticket
        </Button>
      </Flex>

      {/* Data */}
      <PendingTickets />
      <ResolvedTickets />
    </VStack>
  );
};

Tickets.getLayout = (page: ReactElement) => (
  <AdminLayout title="Ticket #123">{page}</AdminLayout>
);
export default Tickets;
