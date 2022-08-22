import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react';
import useModal from '@hooks/useModal';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const CreateFaq = () => {
  const [loading, setLoading] = useState(false)
  const [newQuestionAdded, setNewQuestionAdded] = useState(false)
  const { register, getFieldState, handleSubmit, formState: { errors } } = useForm({mode: "onChange"});

  const questionInvalid = getFieldState("question").isTouched && errors.question !== undefined
  const answerInvalid = getFieldState("answer").isTouched && errors.answer !== undefined


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
        <FormControl isRequired isInvalid={questionInvalid}>
          <FormLabel>Question</FormLabel>
          <Input defaultValue="" {...register("question", { required: true })} placeholder='Question' />
          {questionInvalid && <FormErrorMessage>Question is required.</FormErrorMessage>}
        </FormControl>
        <FormControl isRequired isInvalid={answerInvalid}>
          <FormLabel>Answer</FormLabel>
          <Input defaultValue="" {...register("answer", { required: true })} placeholder='Answer' />
          {answerInvalid && <FormErrorMessage>Answer is required.</FormErrorMessage>}
        </FormControl>
    </Flex>,
    footer: <Button
        colorScheme='blue'
        size={"md"}
        onClick={handleSubmit(submitApplication)}
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