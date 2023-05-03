import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Footer() {
  const textColor = useColorModeValue("gray.400", "white");

  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      align={"center"}
      justify="space-between"
      px={{ base: "30px", md: "50px" }}
      pb="30px"
    >
      <Flex
        flexDirection="column"
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        <Text as="span" ms="4px">
          &copy; {new Date().getFullYear()} VATSIM South East Asia. All Rights
          Reserved.
        </Text>
        <Text as="span" ms="4px">
          HQ made with{" "}
          <span role="img" aria-label="tears">
            😭
          </span>{" "}
          and{" "}
          <span role="img" aria-label="#?!">
            🤬
          </span>{" "}
          by{" "}
          <Link href="/profile/1300014" as={NextLink} color={"brand.400"}>
            Wildan Gunawan
          </Link>{" "}
          and{" "}
          <Link href="/profile/1300014" as={NextLink} color={"brand.400"}>
            Frederick Arisandi
          </Link>
          .
        </Text>
      </Flex>

      <List
        display={{
          base: "grid",
          md: "flex",
        }}
        gridTemplateRows="repeat(2, 1fr)"
        gridTemplateColumns="repeat(2, 1fr)"
        gap={{ base: "20px", md: "44px" }}
        alignItems="center"
        textAlign="center"
      >
        <ListItem>
          <Link as={NextLink} href="https://vat-sea.com" color={textColor}>
            VATSEA Website
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NextLink} href="/support" color={textColor}>
            Support
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NextLink} href="https://docs.vat-sea.com" color={textColor}>
            Docs
          </Link>
        </ListItem>
        <ListItem>
          <Link
            as={NextLink}
            href="https://docs.vat-sea.com/api"
            color={textColor}
          >
            API
          </Link>
        </ListItem>
        <ListItem>
          <Link
            as={NextLink}
            href="https://github.com/wildangunawan/headquarter"
            color={textColor}
          >
            Contribute
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
