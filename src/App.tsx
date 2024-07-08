import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navigation from "./modules/Navigation"
import Recomended from "./modules/Recomended"
import ShoesProvider from "./context/shoesProvider"
import ShoesGrid from "./components/ShoesGrid"
import Category from "./components/Category"
import Price from "./components/Price"



function App() {

    return (
        <>
            <ShoesProvider>
                <Grid
                    templateAreas={{
                        base: `"nav" "main"`,
                        lg: `"nav nav" "aside main"`,
                    }}
                    templateColumns={{
                        base: "1fr",
                        lg: "200px 1fr",
                    }}
                >
                    <GridItem area="nav">
                        <Navigation />
                    </GridItem>
                    <Show
                        above="lg"
                    >
                        <GridItem area="aside" bg="papayawhip">
                            <Category />
                            <Price />
                        </GridItem>
                    </Show>
                    <GridItem area="main" bg="gold">
                        <Recomended />
                        <ShoesGrid />
                    </GridItem>
                </Grid>
            </ShoesProvider>
        </>
    )
}

export default App
