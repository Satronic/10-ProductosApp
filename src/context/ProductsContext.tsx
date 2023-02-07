import React, { createContext, useState, useEffect } from "react";
import cafeAPI from "../api/cafeAPI";
import { Producto, Products } from '../interfaces/appInterfaces';

// 1.1. Products Props
interface ProductsContextProps {
    products: Producto[];
    getProducts: () => Promise<void>;
    getProductById: (productId: string) => Promise<Producto>;
    createProduct: (categoryId: string, productName: string) => Promise<void>;
    updateProduct: (categoryId: string, productId: string, productName: string) => Promise<void>;
    deleteProduct: (productId: string) => Promise<void>;
    uploadImage: (productId: string, data: any) => Promise<void>
}

// 2.1. Provider Props
interface ProductsProviderProps {
    children: JSX.Element | JSX.Element[];
}

// 1. Create Context
export const ProductsContext = createContext({} as ProductsContextProps);

// 2. Create Provider
export const ProductsProvider = ({ children }: ProductsProviderProps) => {

    const [products, setProducts] = useState<Producto[]>([]);

    useEffect(() => {
        getProducts();
    }, [])
    

    const getProducts = async () => {
        const response = await cafeAPI.get<Products>('/productos');
        return setProducts(response.data.productos);
    };

    const getProductById = async (productId: string) => {
        throw new Error('Not implemented')
    };

    const createProduct = async (categoryId: string, productName: string) => {

    };

    const updateProduct = async (categoryId: string, productId: string, productName: string) => {

    };

    const deleteProduct = async (productId: string) => {

    };

    const uploadImage = async (productId: string, data: any) => {

    };

    return (
        <ProductsContext.Provider value={{
            products,
            getProducts,
            getProductById,
            createProduct,
            updateProduct,
            deleteProduct,
            uploadImage,
        }}>
            {children}
        </ProductsContext.Provider>
    )
};