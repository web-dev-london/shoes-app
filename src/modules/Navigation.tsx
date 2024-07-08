import { HStack } from "@chakra-ui/react"
import NavButtonsView from "../components/NavButtonsView"
import SearchView from "../components/SearchView"

const Navigation = () => {

    return (
        <>
            <HStack
                p={'10px'}
            >
                <SearchView />
                <NavButtonsView />
            </HStack>
        </>
    )
}

export default Navigation