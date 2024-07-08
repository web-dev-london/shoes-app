import { Input } from "@chakra-ui/react"
import { useShoes } from "../context/shoesContext"

const SearchView = () => {
    const { query, handleInputChange } = useShoes()
    return (
        <Input
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
        />
    )
}

export default SearchView