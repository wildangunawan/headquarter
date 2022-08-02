import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, useToast } from '@chakra-ui/react';

interface IProps {
    title: string;
    body: JSX.Element;
    footer?: JSX.Element;
    withCloseButton?: boolean;
    size?: string;
}

const useModal = ({ title, body, footer, withCloseButton, size = "xl" }: IProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast()

    return {
        isOpen,
        onOpen,
        onClose,
        modal: <Modal isOpen={isOpen} onClose={onClose} isCentered size={size}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                {withCloseButton && <ModalCloseButton />}
                <ModalBody>{body}</ModalBody>
                {footer && <ModalFooter>{footer}</ModalFooter>}
            </ModalContent>
        </Modal>,
        toast
    };
};

export default useModal;