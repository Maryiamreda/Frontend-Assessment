import { createContext, ReactNode, useEffect, useState } from "react";

interface Item {
    name: string;
    image: string;
    price: number;
    quantitiy: number;
}

interface AppContextType {
    wishlist: Item[];
    cart: Item[];
    addToWishlist: (item: Item) => void;
    addToCart: (item: Item) => void;
    updateCartQuantity: (name: string, quantity: number) => void;
    deleteFromWishlist: (name: string) => void;
    deleteFromCart: (name: string) => void;

}

export const AppContext = createContext<AppContextType>({
    wishlist: [],
    cart: [],
    addToWishlist: () => { },
    addToCart: () => { },
    updateCartQuantity: () => { },
    deleteFromWishlist: () => { },
    deleteFromCart: () => { },

});

interface AppProviderProps {
    children: ReactNode;
}

export const AppContextProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Item[]>([]);
    const [wishlist, setWishlist] = useState<Item[]>([]);

    const addToWishlist = (item: Item) => {
        if (!wishlist.some(wItem => wItem.name === item.name)) {
            setWishlist(prev => [...prev, item]);
        }
    };

    // Cart functions
    const addToCart = (item: Item) => {
        if (!cart.some(cItem => cItem.name === item.name)) {
            setCart(prev => [...prev, { ...item, quantitiy: 1 }]); // Set initial quantity to 1
        }
    };

    const updateCartQuantity = (name: string, quantity: number) => {
        setCart(prev =>
            prev.map(item =>
                item.name === name ? { ...item, quantitiy: Math.max(1, quantity) } : item
            )
        );
    };

    const deleteFromWishlist = (name: string) => {
        setWishlist(prev => prev.filter(item => item.name !== name));
    };
    const deleteFromCart = (name: string) => {
        setCart(prev => prev.filter(item => item.name !== name))
    }
    useEffect(() => { console.log(cart) }, [cart, addToCart]);

    return (
        <AppContext.Provider
            value={{
                wishlist,
                cart,
                addToWishlist,
                addToCart,
                updateCartQuantity,
                deleteFromWishlist,
                deleteFromCart
            }}>
            {children}
        </AppContext.Provider>
    );
};
