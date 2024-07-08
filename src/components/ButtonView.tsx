import { Button } from "@chakra-ui/react"


const ButtonView = (props: {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    title: string;
    value: string
}) => {
    return (
        <>
            <Button
                onClick={props.onClick}
                value={props.value}
            >
                {props.title}
            </Button>
        </>
    )
}

export default ButtonView