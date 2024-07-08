import { RadioGroup, Stack, Radio } from "@chakra-ui/react"
import { useShoes } from "../context/shoesContext"

const Price = () => {
    const { handleRadioChange, selectedCategory } = useShoes()

    return (
        <>
            <RadioGroup onChange={handleRadioChange} value={selectedCategory}>
                <Stack direction='column'>
                    <Radio value=''>All</Radio>
                    <Radio value='100'>$50 - $100</Radio>
                    <Radio value='150'>$100 - $150</Radio>
                    <Radio value='200'>$150 - $200</Radio>
                </Stack>
            </RadioGroup>
        </>
    )
}

export default Price