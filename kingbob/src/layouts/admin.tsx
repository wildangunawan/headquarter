// Chakra imports
import { Portal, Box, useDisclosure } from "@chakra-ui/react";
import Footer from "components/footer/FooterAdmin";

// Layout components
import Navbar from "components/navbar/NavbarAdmin";
import Sidebar from "components/sidebar/Sidebar";
import { useState } from "react";
import routes from "menu";
import Head from "next/head";

interface IProps {
    title: string;
    children: React.ReactNode;
    [rest: string]: any;
}

export default function AdminLayout(props: IProps) {
    const { title, children, ...rest } = props;
    // states and functions
    const [fixed] = useState(false);

    const { onOpen } = useDisclosure();

    // Console log for fun
    console.log(`(っ◔◡◔)っ ♥ Headquarter ♥

Hello fellow devs! What do you want to see, huh?
Anyway, do you want to help us to improve HQ?
We're actually open source. Come check our code at https://github.com/wildangunawan/headquarter.
    
See ya at pull request section ♥`);

    return (
        <>
            <Head>
                <title>{title} - Headquarter</title>
            </Head>
            <Box>
                <Sidebar routes={routes} {...rest} />
                <Box
                    float="right"
                    minHeight="100vh"
                    height="100%"
                    overflow="auto"
                    position="relative"
                    maxHeight="100%"
                    w={{ base: "100%", xl: "calc( 100% - 290px )" }}
                    maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
                    transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
                    transitionDuration=".2s, .2s, .35s"
                    transitionProperty="top, bottom, width"
                    transitionTimingFunction="linear, linear, ease"

                >
                    <Portal>
                        <Navbar
                            onOpen={onOpen}
                            fixed={fixed}
                            {...rest}
                        />
                    </Portal>

                    <Box
                        mx="auto"
                        p={{ base: "20px", md: "30px" }}
                        pe="20px"
                        minH="100vh"
                        mt={{ base: "90px", md: "80px" }}
                    >
                        {children}
                    </Box>
                    <Footer />
                </Box>
            </Box>
        </>
    );
}
