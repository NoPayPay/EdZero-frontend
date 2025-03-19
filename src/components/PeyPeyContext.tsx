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

  return (
    <PeyPeyContext.Provider
      value={{
         openDepositModal, setDepositModal,
        openCalculatorModal, setCalculatorModal,
        openPayModal, setOpenPayModal
      }}
    >
      { children }
    </PeyPeyContext.Provider>
  )
}

export default PeyPeyContextProvider
// a custom hook for exporting the context
export const usePeyPeyContext = () => use(PeyPeyContext);