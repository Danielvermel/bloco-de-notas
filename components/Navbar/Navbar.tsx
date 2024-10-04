"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Button from "../Button";
import { usePathname } from "next/navigation";
import "./styles.css";

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle mobile menu visibility
    };

    return (
        <nav className="flexBetween padding-container z-30 py-5 fixed top-0 left-0 w-full bg-white shadow-sm">
            <Image src="/logos/logo_2.png" alt="logo" height={150} width={220} />

            {/* Desktop Menu */}
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            href={link.href}
                            key={link.key}
                            className={`regular-16 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-cyan-600`}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </ul>

            {/* Contact Button */}
            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Contacte-nos"
                    icon="/icons/phone.png"
                    variant="btn_dark_green"
                    action="https://wa.me/+351910533646/"
                />
            </div>

            {/* Hamburger Icon for Mobile */}
            <Image
                src="/icons/menu.svg"
                alt="menu"
                width={24}
                height={24}
                className="inline-block cursor-pointer lg:hidden"
                onClick={toggleMenu} // Toggle mobile menu on click
            />

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden z-20">
                    <ul className="flex flex-col items-start gap-6 p-6">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    href={link.href}
                                    key={link.key}
                                    className={`regular-16 text-grey-50 cursor-pointer pb-1.5 transition-all hover:text-cyan-600
                                        ${isActive ? "underline underline-offset-8 text-cyan-600" : ""}`}
                                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
