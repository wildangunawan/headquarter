import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NavLink from 'next/link'

export default function Footer() {
  const textColor = useColorModeValue("gray.400", "white");

  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      align={"center"}
      justify='space-between'
      px={{ base: "30px", md: "50px" }}
      pb='30px'
    >
      <Flex
        flexDirection='column'
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        <Text as='span' ms='4px'>
          &copy; {new Date().getFullYear()} VATSIM South East Asia. All Rights Reserved.
        </Text>
        <Text as='span' ms='4px'>
          HQ made with{" "}
          <span role='img' aria-label='tears'>😭</span> and <span role='img' aria-label='#?!'>🤬</span>
          {" "}by <NavLink href='/profile/1300014' passHref>
            <Link color={'brand.400'}>
              Wildan Gunawan
            </Link>
          </NavLink> and <NavLink href='/profile/1300014' passHref>
            <Link color={'brand.400'}>
              Frederick Arisandi
            </Link>
          </NavLink>.
        </Text>
      </Flex>

      <List
        display={{
          base: "grid",
          md: "flex",
        }}
        gridTemplateRows='repeat(2, 1fr)'
        gridTemplateColumns='repeat(2, 1fr)'
        gap={{ base: "20px", md: "44px" }}
        alignItems="center"
        textAlign="center"
      >
        <ListItem>
          <NavLink href='https://vat-sea.com' passHref>
            <Link color={textColor}>
              VATSEA Website
            </Link>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink href='/support' passHref>
            <Link color={textColor}>
              Support
            </Link>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink href='https://docs.vat-sea.com' passHref>
            <Link color={textColor}>
              Docs
            </Link>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink href='https://docs.vat-sea.com/api' passHref>
            <Link color={textColor}>
              API
            </Link>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink href='https://github.com/wildangunawan/headquarter' passHref>
            <Link color={textColor}>
              Contribute
            </Link>
          </NavLink>
        </ListItem>
      </List>
    </Flex>
  );
}
