import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Flex,
  Button,
  Text,
  Link,
  VStack,
  StackDivider,
  Center,
  HStack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";
import { useState } from "react";
import CPTRequest from "../modal/CPTRequest";

const CPTInformation = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [haveCPT, setHaveCPT] = useState(false);

  // Modal
  const { onOpen, modal, CPTRequested } = CPTRequest();

  return (
    <>
      <Card>
        <Flex align="center">
          <Text
            me="auto"
            color={textColor}
            fontSize="xl"
            fontWeight="700"
            lineHeight="100%"
            px="15px"
            py="10px"
          >
            CPT Information
          </Text>
          {!haveCPT && !CPTRequested && (
            <Button colorScheme={"blue"} onClick={onOpen}>
              Request CPT
            </Button>
          )}
          {!haveCPT && (
            <Button colorScheme={"blue"} onClick={() => setHaveCPT(true)}>
              Show example pls.
            </Button>
          )}
        </Flex>
        <Center h={"100%"} w={"100%"} my="1em" px="15px" py="10px">
          {haveCPT ? (
            <VStack divider={<StackDivider />} spacing={4}>
              <VStack textAlign={"center"} spacing={1}>
                <Text>You&apos;re going to have your</Text>
                <Badge colorScheme={"blue"}>S2 CPT</Badge>
                <Text>as</Text>
                <HStack>
                  <Badge colorScheme={"blue"}>WIII_TWR</Badge>
                  <Text>at</Text>
                  <Badge colorScheme={"blue"}>30 Aug 2022</Badge>
                </HStack>
              </VStack>
              <Link
                as={NextLink}
                href={"/events/s2-cpt-wiii-twr"}
                color={"blue.500"}
              >
                <>
                  Check my CPT event
                  <ArrowForwardIcon ml={1} />
                </>
              </Link>
            </VStack>
          ) : CPTRequested ? (
            <Center height={"100%"} width={"100%"}>
              We have received your request. We will let you know ASAP{" "}
              {`(●'◡'●)`}
            </Center>
          ) : (
            <Center height={"100%"} width={"100%"}>
              You don&apos;t have any CPT planned yet.
            </Center>
          )}
        </Center>
      </Card>

      {/* Show modal */}
      {modal}
    </>
  );
};

export default CPTInformation;
