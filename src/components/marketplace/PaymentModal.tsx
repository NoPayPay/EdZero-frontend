import { Dispatch, SetStateAction } from 'react'
import { CustomButton } from "@/components"
import { CreditCard, X } from 'lucide-react'
import { usePeyPeyContext } from "@/components/PeyPeyContext"
import { useAccount } from 'wagmi'
import CustomWalletConnect from '../header/CustomWalletConnect'

const PaymentModal = () => {
        const { openPayModal, setOpenPayModal, selectedProduct } = usePeyPeyContext()
        const { address: userAddr } = useAccount()


   const handleItemDetails = (title: string, value: string) => {
       return (
         <div className="w-full flex items-center justify-between">
            <h3 className="text-[#7f7f80] font-bold"> {title}: </h3>
            <h4 className="font-bold"> {title == "price" && "$"}{value} </h4>
         </div>
       )
   }

   const handleDepositDetails = (title: string, value: string) => {
    console.log("title", title)

      return (
          <div className="w-full flex items-center justify-between">
            <h3 className="text-[#7f7f80] font-bold"> {title}: </h3>
            <h4 className={`font-bold ${title.toLowerCase() == "estimated yield" && "text-[#11afb8]"}`}> {value} </h4>
         </div>
      )
   }

  return (
    <div 
      className={`transition-all duration-500 ${!openPayModal ? "hidden h-0 w-0" : "h-screen fixed left-0 flex top-0 w-full"} `}>

       <div 
          onClick={() => setOpenPayModal(false)}
          className="absolute top-0 w-full h-full glass-modal" />
       
       {/* payment card */}
        <div className="flex h-[70%] w-[60%] xl:w-[30%] lg:w-[40%] mx-auto translate-y-[100px] flex-col glass-card border-[1px] border-[#202021] rounded-[15px] gap-[25px] p-[20px] overflow-y-scroll">

            <div className="w-full flex justify-between">
                <div className="flex flex-col gap-[10px]">
                    <h2 className="font-bold responsive-headerText"> Choose Payment Method </h2>
                    <p className="font-semibold text-(--paraph-color) responsive-paraph"> Select how you'd like to pay for this purchase </p>
                </div>

                <X className="w-[20px] cursor-pointer" onClick={() => setOpenPayModal(false)} />
            </div>

            <div className="w-full flex flex-col gap-[10px] border-b-[1px] border-[rgba(255, 255, 255, 0.125)] p-[10px]">
              { handleItemDetails("Item", selectedProduct.title) }
              { handleItemDetails("Price", `$${selectedProduct.price}`) }
              { handleItemDetails("Source", selectedProduct.tag) }
            </div>

            <h2 className="font-bold responsive-headerText"> Payment Methods </h2>
            <div className="flex w-full flex-col border-[1px] border-[rgba(255, 255, 255, 0.125)] p-[20px] rounded-[15px]">
                <div className="w-full flex items-start gap-[10px]">
                    <input type='radio' className=""  name='buy' />

                    <div className="flex flex-col gap-[10px]">
                        <aside className="flex w-full items-center gap-[10px] cursor-pointer justify-between">
                            <h3 className="font-bold"> Buy Now, Pay Never </h3>
                            <h3 className="font-bold text-[#11afb8]"> Recommended </h3>
                        </aside>

                        <div className="w-full flex flex-col gap-[15px]">
                          <p className="text-(--paraph-color) font-semibold"> Pay using your future yield without upfront payment. We'll allocate a portion of your yield to cover this purchase over time. </p>
                          {/* separator */}
                          <div className="w-full h-[0.5px] bg-[#7f7f80]" />

                          {/* deposit details */}
                          { handleDepositDetails("Required Deposit", "650 PT") }
                          { handleDepositDetails("Estimated Yield", "129.99 YT / month") }
                        </div>
                    </div>
                </div>
            </div>

              { userAddr ? 
                <CustomButton
                    onClick={() => {}}
                    disabled={false}
                    style={`bg-gradient`}
                          >
                    <CreditCard className="" />
                    Pay Now
                </CustomButton>
                :
                <CustomWalletConnect />
              }
        </div>


    </div>
  )
}

export default PaymentModal