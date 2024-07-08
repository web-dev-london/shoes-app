import { Card, Img } from "@chakra-ui/react"

const CartView = (props: {
    img: string,
    title: string,
    reviews: string,
    prevPrice: string,
    newPrice: string,
    company: string,
    color: string,
    category: string
}) => {
    return (
        <>
            <Card
                maxW='sm'
            >
                <Img src={props.img} alt={props.title} />
                <p>{props.title}</p>
                <p>{props.reviews}</p>
                <p>{props.prevPrice}</p>
                <p>{props.newPrice}</p>
                <p>{props.company}</p>
                <p>{props.color}</p>
                <p>{props.category}</p>
            </Card>
        </>
    )
}

export default CartView