import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react';
import useModal from '@hooks/useModal';
import React, { useState } from 'react';

const CreateFaq = () => {
  const [loading, setLoading] = useState(false)
  const [newQuestionAdded, setNewQuestionAdded] = useState(false)
  const [question, setQuestion] = useState({
    value: "",
    isError: false,
    touched: false
  })
  const [answer, setAnswer] = useState({
    value: "",
    isError: false,
    touched: false
  })

  const handleQuestionOnChange = (event: any) => setQuestion(event.target.value)
  const handleAnswerOnChange = (event: any) => setAnswer(event.target.value)

  const changeHandler = (type: string, event: any) => {
    const inputValue = event.target.value.trim()
    let isError = inputValue.length === 0
    
    if (type === "question") {
      setQuestion(currentValue => ({
        ...currentValue,
      value: event.target.value,
      isError,
      }))
    }

    if (type === "answer") {
      setAnswer(currentValue => ({
        ...currentValue,
      value: event.target.value,
      isError,
      }))
    }
  }

  const blurHandler = (type: string, event: any) => {
    if (type === "question") {
      setQuestion(currentValue => ({
        ...currentValue,
      value: event.target.value,
      touched: true,
      }))
    }

    if (type === "answer") {
      setAnswer(currentValue => ({
        ...currentValue,
      value: event.target.value,
      touched: true,
      }))
    }
  }

  const submitApplication = () => {
    // Set loading
    setLoading(true)

    // TODO: Make request to API
    // We'll use setTimeout for now
    setTimeout(() => {
        // Reset loading
        setLoading(false)

        // Close modal
        onClose()

        // Show toast that application was submitted
        toast({
            title: 'New FAQ has been created',
            status: 'success',
            position: 'bottom-right',
            duration: 5000,
            isClosable: true,
        })

        // Show toast that application was failed to submit
        toast({
            title: 'Failed to submit request',
            description: "There is an error in our system. Please try again.",
            status: 'error',
            position: 'bottom-right',
            duration: 5000,
            isClosable: true,
        })

        // set newQuestionAdded
        setNewQuestionAdded(true);
    }, 2000)
  }

  const { onOpen, onClose, modal, toast } = useModal({
    title: 'Create new FAQ',
    body: 
    <Flex direction={"column"} gap={3} mb={4}>
        <FormControl isRequired isInvalid={question.touched && question.isError}>
          <FormLabel>Question</FormLabel>
          <Input value={question.value} onChange={(e) =>changeHandler("question", e)} 
                  onBlur={(e) => blurHandler("question", e)} placeholder='Question' />
          {question.isError && <FormErrorMessage>Question is required.</FormErrorMessage>}
        </FormControl>
        <FormControl isRequired isInvalid={answer.touched && answer.isError}>
          <FormLabel>Answer</FormLabel>
          <Input value={answer.value} onChange={(e) =>changeHandler("answer", e)}
                  onBlur={(e) => blurHandler("answer", e)} placeholder='Answer' />
          {answer.isError && <FormErrorMessage>Answer is required.</FormErrorMessage>}
        </FormControl>
    </Flex>,
    footer: <Button
        colorScheme='blue'
        size={"md"}
        onClick={submitApplication}
        isDisabled={question.value === "" || answer.value === ""}
        isLoading={loading}
        loadingText="Submitting"
    >
        Submit
    </Button>
  });

  return {
    onOpen, modal, newQuestionAdded
  };


};

export default CreateFaq;