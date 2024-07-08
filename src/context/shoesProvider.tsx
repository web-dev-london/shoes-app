import { shoesContext } from "./shoesContext";
import { useState } from "react";
import Products from "../types";
import data from "../data";
import CartView from "../components/CartView";
import CartContainer from "../components/CartContainer";

interface ShoesProviderProps {
    children: React.ReactNode
}

const ShoesProvider = ({ children }: ShoesProviderProps) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [query, setQuery] = useState('');

    // Input handler
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const filteredTitle = data.filter((item: Products) => {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })

    // Radio handler
    const handleRadioChange = (value: string) => {
        setSelectedCategory(value);
    }

    // Button handler
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement
        setSelectedCategory(target.value);
    }

    // Filter data
    const filteredData = <U, V>(product: Products[], selected: U, query: V) => {
        let result = product;

        if (query) {
            result = filteredTitle;
        }

        if (selected) {
            result = result.filter(({ category, color, newPrice, title, company }) =>
                category === selected || color === selected || newPrice === selected || title === selected || company === selected
            )
        }
        return result.map(({ img, title, reviews, prevPrice, newPrice, company, color, category }, index) => {
            return (
                <CartContainer key={index}>
                    <CartView img={img} title={title} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice} company={company} color={color} category={category} />
                </CartContainer>
            )
        })
    }

    const result = filteredData(data, selectedCategory, query)


    return (
        <shoesContext.Provider value={{
            selectedCategory,
            setSelectedCategory,
            query,
            setQuery,
            handleInputChange,
            filteredTitle,
            handleRadioChange,
            handleClick,
            filteredData,
            data,
            result,
        }}>
            {children}
        </shoesContext.Provider>
    )

}






export default ShoesProvider