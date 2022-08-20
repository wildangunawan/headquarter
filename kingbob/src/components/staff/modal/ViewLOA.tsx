import { Text } from "@chakra-ui/react";
import useModal from "@hooks/useModal";

const ViewLOA = () => {
    const { onOpen, modal } = useModal({
        title: `Bob's (1000002) LOA reason`,
        body: <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, laudantium fugit eos ipsum id iste vero recusandae neque, ullam incidunt consequatur error laboriosam facilis optio nesciunt aspernatur voluptas dolores beatae.</Text>,
        footer: <></>
    })

    return { onOpen, modal };
};

export default ViewLOA;