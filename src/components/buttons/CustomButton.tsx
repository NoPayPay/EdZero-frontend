import { ReactNode, Ref, forwardRef, MouseEventHandler } from 'react'

interface IProps {
    children: ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    style?: string,
    mouseEvent?: MouseEventHandler<HTMLButtonElement>;
    mouseLeave?: MouseEventHandler<HTMLButtonElement>;
}
// forwardRef will expose the btn dom to the parent component
const CustomButton = forwardRef(({ children, onClick, disabled, style, mouseEvent, mouseLeave}: IProps, ref: Ref<HTMLButtonElement>) => {

  return (
    <button 
        ref={ref}
        onClick={onClick}
        onMouseOver={mouseEvent}
        onMouseLeave={mouseLeave}
        className={`flex items-center justify-center gap-[10px] text-white font-semibold rounded-[10px] cursor-pointer py-[6px] px-[10px] ${style} `}>
        { children }
    </button>
  )
})

export default CustomButton