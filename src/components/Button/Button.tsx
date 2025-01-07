import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<'button'> {
    Icon?: React.ComponentType;
    text: string;
}


export const Button = ({ text, Icon, ...props }: ButtonProps) => {


    return (
        <button {...props}
            className={twMerge("bg-gradient-to-b from-[#00F0FF] to-[#2C82BC] text-pearl-950 p-3 rounded-lg flex items-center gap-2 outline-none", props.className)}
        >
            {Icon && <Icon />}
            <span>{text}</span>
        </button>
    );
};


