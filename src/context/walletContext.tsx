import { FC, ReactNode, createContext, useState } from "react";
import { WalletContextType } from "./@types/wallet";

export const WalletContext = createContext<WalletContextType | null>(null);

const WalletProvider: FC<ReactNode> = ({ children }) => {
    const [wallet, setWallet] = useState('');

    const getWallet = async () => {
        if (window) {
            // @ts-ignore
            const accounts = await window.klaytn.enable();
            setWallet(accounts[0]);
        }
    }

    const removeWallet = async () => {
        setWallet('');
    }

    return (
        <WalletContext.Provider value={{ wallet, getWallet, removeWallet }}>
            {children}
        </WalletContext.Provider>
    );
};

export default WalletProvider;
