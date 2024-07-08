import { Heading, HStack } from "@chakra-ui/react"
import ButtonView from "../components/ButtonView"
import { useShoes } from "../context/shoesContext"

const Recomended = () => {
    const { handleClick } = useShoes()
    return (
        <>
            <Heading p={'10px'}>Recomended</Heading>
            <HStack p={'10px'}>
                <ButtonView onClick={handleClick} value="" title="All" />
                <ButtonView onClick={handleClick} value="Nike" title="Nike" />
                <ButtonView onClick={handleClick} value="Adidas" title="Adidas" />
                <ButtonView onClick={handleClick} value="Puma" title="Puma" />
                <ButtonView onClick={handleClick} value="Vans" title="Vans" />
            </HStack>
        </>
    )
}

export default Recomended