import { ReactNode } from "react";

export interface Button {
    className?: string;
    textClassName?: string;
    children: ReactNode;
    props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}
export function Button({ className = "", textClassName = "", children, ...props }: Button) {

    return <button  {...props.props}
        className={`bg-primary-main hover:bg-primary-dark active:bg-primary-light rounded-[24px] ${className}`}>
        <p className={`text-primary-contrast text-[17px] leading-[21px] font-medium text-center ${textClassName}`}>{children}</p>
    </button>
}