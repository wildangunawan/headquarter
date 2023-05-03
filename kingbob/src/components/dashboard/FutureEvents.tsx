import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Link,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";
import Card from "@components/card/Card";
import NextLink from "next/link";
import { MdCalendarViewMonth } from "react-icons/md";

interface IProps {
  [x: string]: any;
}

const FutureEvents = ({ ...rest }: IProps) => {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";

  return (
    <Card {...rest}>
      <Flex>
        <Text
          me="auto"
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
          px="15px"
          py="10px"
        >
          Incoming Events
        </Text>
      </Flex>

      <VStack
        spacing="20px"
        align="stretch"
        px="15px"
        py="10px"
        divider={<StackDivider borderColor="gray.200" />}
      >
        <Box>
          <Flex align={"center"} gap={1} color={"gray.400"} fontSize="sm">
            <Icon as={MdCalendarViewMonth} />
            <Text fontWeight={500} color={textColorSecondary} fontSize="sm">
              9 August 2022 11:00
            </Text>
          </Flex>

          {/* Title */}
          <Link
            href={"/events/jakarta-turn-around-1"}
            as={NextLink}
            fontWeight={600}
            color={textColor}
          >
            Jakarta Turn Around 1
          </Link>

          {/* Content, but truncated anyway */}
          <Text fontSize={"sm"} noOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            aperiam voluptatibus? Nesciunt saepe ex veritatis ducimus
            voluptatibus perferendis eum doloribus, soluta aliquid! Voluptate
            quidem dolorum aspernatur corporis adipisci? Odio facere provident
            recusandae esse, nihil corrupti fugit molestiae quisquam voluptate
            animi inventore eos tempora porro nesciunt ipsa eveniet, id numquam
            beatae.
          </Text>

          {/* CTA */}
          <Link
            href={"/events/jakarta-turn-around-1"}
            as={NextLink}
            color={"blue.500"}
            fontSize="xs"
          >
            Read more
          </Link>
        </Box>

        <Box>
          <Flex align={"center"} gap={1} color={"gray.400"} fontSize="sm">
            <Icon as={MdCalendarViewMonth} />
            <Text fontWeight={500} color={textColorSecondary} fontSize="sm">
              16 August 2022 11:00
            </Text>
          </Flex>

          {/* Title */}
          <Link
            href={"/events/jakarta-turn-around-1"}
            as={NextLink}
            fontWeight={600}
            color={textColor}
          >
            Jakarta Turn Around 2
          </Link>

          {/* Content, but truncated anyway */}
          <Text fontSize={"sm"} noOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            aperiam voluptatibus? Nesciunt saepe ex veritatis ducimus
            voluptatibus perferendis eum doloribus, soluta aliquid! Voluptate
            quidem dolorum aspernatur corporis adipisci? Odio facere provident
            recusandae esse, nihil corrupti fugit molestiae quisquam voluptate
            animi inventore eos tempora porro nesciunt ipsa eveniet, id numquam
            beatae.
          </Text>

          {/* CTA */}
          <Link
            href={"/events/jakarta-turn-around-1"}
            as={NextLink}
            color={"blue.500"}
            fontSize="xs"
          >
            Read more
          </Link>
        </Box>

        {/* Read more */}
        <Link
          href={"/events"}
          as={NextLink}
          color={"blue.500"}
          textAlign="center"
        >
          <>
            Check all events
            <ArrowForwardIcon ml={1} />
          </>
        </Link>
      </VStack>
    </Card>
  );
};

export default FutureEvents;
