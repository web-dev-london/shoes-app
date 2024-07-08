import { RadioGroup, Stack, Radio } from "@chakra-ui/react"
import { useShoes } from "../context/shoesContext"

const Category = () => {
    const { handleRadioChange, selectedCategory } = useShoes()

    return (
        <>
            <RadioGroup onChange={handleRadioChange} value={selectedCategory}>
                <Stack direction='column'>
                    <Radio value=''>All</Radio>
                    <Radio value='sneakers'>Sneakers</Radio>
                    <Radio value='sandals'>Sandals</Radio>
                    <Radio value='heels'>Heels</Radio>
                </Stack>
            </RadioGroup>
        </>
    )
}

export default Category