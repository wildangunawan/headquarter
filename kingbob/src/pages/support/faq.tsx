import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Link, StackDivider, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Card from '@components/card/Card';
import NextLink from "next/link"
import AdminLayout from '@layouts/admin';
import { ReactElement } from 'react';
import CreateFaq from "../../components/support/modal/CreateFaq";

const FaqPage = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const faqs = [
    { question: "South East Asia Division - Question 1?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "South East Asia Division - Question 2?", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { question: "Indonesia vACC - Question 3?", answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { question: "HQ System - Question 4?", answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  ]

  // Modal
  const {
    onOpen: openCreateFaqModal,
    modal: CreateFaqModal,
    newQuestionAdded
  } = CreateFaq();

  return (
    <>
      <VStack spacing={"20px"} align="stretch">
        {/* Header */}
        <Flex justify={"space-between"}>
          <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
            Frequently Asked Questions (FAQs)
          </Text>
          <Button as="a" colorScheme="blue" onClick={openCreateFaqModal}>Create FAQ</Button>
        </Flex>

        {/* Data */}
        <Card>
          <Accordion
            allowMultiple
            allowToggle
          >
            {faqs.map((item) => {
              return (<AccordionItem key={item.question}>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <b>{item.question}</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {item.answer}
                  <Flex mt={2} gap={1}>
                    <Button colorScheme="orange">Edit</Button>
                    <Button colorScheme="red">Delete</Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              );
            })}
          </Accordion>
        </Card>
      </VStack>

      {/* Show modal */}
      {CreateFaqModal}
    </>
  );
};

FaqPage.getLayout = (page: ReactElement) => <AdminLayout title="FAQ">{page}</AdminLayout>
export default FaqPage;