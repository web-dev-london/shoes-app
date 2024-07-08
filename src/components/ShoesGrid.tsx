import { SimpleGrid } from "@chakra-ui/react"
// import CartView from "./CartView"
import { useShoes } from "../context/shoesContext"
// import CartContainer from "./CartContainer"


const ShoesGrid = () => {
    const { data, result } = useShoes();
    void data
    console.log('Result', result);

    // const shoesCart = data && data.map(({ img, title, reviews, prevPrice, newPrice, company, color, category }, index) => {
    //     return (
    //         <CartContainer key={index} >
    //             <CartView img={img} title={title} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice} company={company} color={color} category={category} />
    //         </CartContainer>
    //     )
    // })
    return (
        <>
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 }}
                spacing={5}
                p={'10px'}
                alignContent={'center'}
            >
                {result}
            </SimpleGrid>

        </>
    )
}

export default ShoesGrid