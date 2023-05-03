import {
  Box,
  Link,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue,
  Badge,
  Button,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";
import AssignTicket from "../modal/AssignTicket";
import TransferTicket from "../modal/TransferTicket";

const Information = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  // Modals
  const {
    onOpen: openAssignTicketModal,
    modal: AssignTicketModal,
    ticketAssigned,
  } = AssignTicket();
  const { onOpen: openTransferTicketModal, modal: TransferTicketModal } =
    TransferTicket();

  return (
    <>
      <Card>
        <Text
          me="auto"
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
          px="15px"
          py="10px"
        >
          Information
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px" px="15px" py="10px">
          <Flex direction={"column"}>
            <SimpleGrid columns={2} alignItems={"center"}>
              <Text>Created by</Text>
              <Text>
                :{" "}
                <Link
                  as={NextLink}
                  href={"/profile/1000005"}
                  color={"blue.500"}
                >
                  Gru (1000005)
                </Link>
              </Text>
            </SimpleGrid>
            <SimpleGrid columns={2} alignItems={"center"}>
              <Text>Assigned to (team)</Text>
              <Text>
                :{" "}
                <Link as={NextLink} href={"/vacc/idn"} color={"blue.500"}>
                  Indonesia vACC (IDN)
                </Link>
              </Text>
            </SimpleGrid>
            <SimpleGrid columns={2} alignItems={"center"}>
              <Text>Assigned to (staff)</Text>
              <Text>
                :{" "}
                {ticketAssigned ? (
                  <Link
                    as={NextLink}
                    href={"/profile/1000006"}
                    color={"blue.500"}
                  >
                    Mel (1000006)
                  </Link>
                ) : (
                  <Button
                    size="sm"
                    colorScheme={"green"}
                    onClick={openAssignTicketModal}
                  >
                    Assign Someone
                  </Button>
                )}
              </Text>
            </SimpleGrid>
          </Flex>
          <Flex direction={"column"}>
            <SimpleGrid columns={2} alignItems={"center"}>
              <Text>Status</Text>
              <Text>
                : <Badge colorScheme={"yellow"}>Pending</Badge>
              </Text>
            </SimpleGrid>
            <SimpleGrid columns={2} alignItems={"center"}>
              <Text>Created at</Text>
              <Text>: 5 Aug 2022 12:00</Text>
            </SimpleGrid>
            <SimpleGrid columns={2} alignItems={"center"}>
              <Text>Last updated at</Text>
              <Text>: 5 Aug 2022 14:00</Text>
            </SimpleGrid>
          </Flex>
        </SimpleGrid>

        <Flex align={"center"} justify={"center"} gap={2}>
          <Button colorScheme={"yellow"} onClick={openTransferTicketModal}>
            Transfer ticket
          </Button>
          <Button colorScheme={"blue"}>Close ticket</Button>
        </Flex>
      </Card>

      {/* Show modal */}
      {AssignTicketModal}
      {TransferTicketModal}
    </>
  );
};

export default Information;
