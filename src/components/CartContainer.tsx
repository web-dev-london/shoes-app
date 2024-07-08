import { Box } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode
}

const CartContainer = ({ children }: Props) => {
    return (
        <>
            <Box
                borderRadius={10}
                overflow={'hidden'}
            >
                {children}
            </Box>
        </>
    )
}

export default CartContainer