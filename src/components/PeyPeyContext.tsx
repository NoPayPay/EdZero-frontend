"use client"
import { useState, use, createContext, ReactNode } from 'react'
import { IModalState } from "@/types"

interface IProps {
  children: ReactNode
}

// @ts-ignore
const PeyPeyContext = createContext<IModalState>(null);


const PeyPeyContextProvider = ({ children }: IProps) => {
      const [openDepositModal, setDepositModal] = useState<boolean>(false)
      const [openCalculatorModal, setCalculatorModal] = useState<boolean>(false)
      const [openPayModal, setOpenPayModal] = useState<boolean>(false)
      const [openWithdrawModal, setOpenWithdrawModal] = useState<boolean>(false);
      const [selectedProduct, setSelectedProduct] = useState({
         id: 0,
         title: "",
         desc: "", 
         price: "",
         tag: ""
      });
      const [tokenToAmount, setTokenToAmount] = useState(0)

  return (
    <PeyPeyContext.Provider
      value={{
         openDepositModal, setDepositModal,
        openCalculatorModal, setCalculatorModal,
        openPayModal, setOpenPayModal,
        openWithdrawModal, setOpenWithdrawModal,
        selectedProduct, setSelectedProduct,
        setTokenToAmount, tokenToAmount
      }}
    >
      { children }
    </PeyPeyContext.Provider>
  )
}

export default PeyPeyContextProvider
// a custom hook for exporting the context
export const usePeyPeyContext = () => use(PeyPeyContext);