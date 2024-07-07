import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navigation from "./modules/Navigation"



function App() {

    return (
        <>
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
                <GridItem area="nav" bg="tomato">
                    <Navigation />
                </GridItem>
                <Show
                    above="lg"
                >
                    <GridItem area="aside" bg="papayawhip">
                        aside
                    </GridItem>
                </Show>
                <GridItem area="main" bg="gold">
                    main
                </GridItem>
            </Grid>
        </>
    )
}

export default App
