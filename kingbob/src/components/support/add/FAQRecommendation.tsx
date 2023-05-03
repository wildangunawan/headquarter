import {
  Flex,
  Link,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";
import { useEffect } from "react";

interface IProps {
  subject: string;
}

const FAQRecommendation = ({ subject }: IProps) => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  useEffect(() => {
    // If subject length < 5 then quit
    if (subject.length == 0) return;

    // If subject length > 5 then get FAQ recommendations from the backend
    // TODO: Get FAQ recommendations from the backend
  }, [subject]);

  // If length of subject is not enough then quit
  if (subject.length < 5) return null;

  // Else show recommendations
  return (
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
        Frequently asked question
      </Text>
      <VStack
        divider={<StackDivider />}
        gap={2}
        px="15px"
        pb="10px"
        align={"stretch"}
      >
        <Text>
          Below is some FAQs based on &quot;{subject}&quot;. You may find some
          that&apos;s useful before you open a new ticket.
        </Text>

        <Flex direction={"column"} gap={1}>
          <Link
            as={NextLink}
            href={"/faq/lorem-ipsum-dolor-sit"}
            fontWeight={700}
          >
            Lorem ipsum dolor sit.
          </Link>

          <Text noOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe
            asperiores sint sapiente blanditiis odit officiis vitae qui veniam!
            Ab accusantium numquam ipsa ratione consequuntur harum excepturi
            eius magni neque.
          </Text>

          {/* CTA */}
          <Link
            as={NextLink}
            href={"/faq/lorem-ipsum-dolor-sit"}
            color={"blue.500"}
            fontSize="xs"
          >
            Read more
          </Link>
        </Flex>

        <Flex direction={"column"} gap={1}>
          <Link
            as={NextLink}
            href={"/faq/lorem-ipsum-dolor-sit"}
            fontWeight={700}
          >
            Lorem ipsum dolor sit.
          </Link>

          <Text noOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe
            asperiores sint sapiente blanditiis odit officiis vitae qui veniam!
            Ab accusantium numquam ipsa ratione consequuntur harum excepturi
            eius magni neque.
          </Text>

          {/* CTA */}
          <Link
            as={NextLink}
            href={"/faq/lorem-ipsum-dolor-sit"}
            color={"blue.500"}
            fontSize="xs"
          >
            Read more
          </Link>
        </Flex>
      </VStack>
    </Card>
  );
};

export default FAQRecommendation;
