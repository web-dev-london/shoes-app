import { createContext, useContext } from "react";
import Products from "../types";


interface ShoesContextProps {
    selectedCategory: string;
    setSelectedCategory: (selectedCategory: string) => void;
    query: string;
    setQuery: (query: string) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRadioChange: (value: string) => void;
    filteredTitle: Products[];
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    filteredData: <U, V>(product: Products[], selected: U, query: V) => JSX.Element[];
    data: Products[];
    result: JSX.Element[];
}


export const shoesContext = createContext<ShoesContextProps | null>(null)

export const useShoes = () => {
    const value = useContext(shoesContext);
    if (!value) {
        throw new Error("useShoes must be used within a shoesProvider");
    }
    return value;
}
