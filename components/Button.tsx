import Image from "next/image";
import React from "react";
import Link from "next/link";

type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: string;
    action?: string;
};

const Button = ({ type, title, icon, variant, action = "" }: ButtonProps) => {
    return !!action ? (
        <Link href={action} key={title}>
            <button className={`flexCenter gap-3 rounded-full border ${variant} `} type={type}>
                {icon && <Image src={icon} alt={title} width={24} height={24} />}
                <label className="bold-16 whitespace-nowrap">{title}</label>
            </button>
        </Link>
    ) : (
        <button className={`flexCenter gap-3 rounded-full border ${variant} `} type={type}>
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label className="bold-16 whitespace-nowrap">{title}</label>
        </button>
    );
};

export default Button;
