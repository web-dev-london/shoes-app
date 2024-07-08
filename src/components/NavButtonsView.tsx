
import { Button, HStack } from "@chakra-ui/react";
import { AiOutlineUserAdd, AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
const NavButtonsView = () => {
    return (
        <>
            <HStack>
                <Button>
                    <CiHeart />
                </Button>
                <Button>
                    <AiOutlineShoppingCart />
                </Button>
                <Button>
                    <AiOutlineUserAdd />
                </Button>
            </HStack>
        </>
    )
}

export default NavButtonsView