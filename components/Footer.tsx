import { FOOTER_CONTACT_INFO, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer id="footer" className="flexCenter pt-8 pb-16 bg-blue-50">
            <div className="padding-container max-container flex w-full flex-col gap-14">
                {/* Google Maps Embed */}
                <div className="w-full h-64 overflow-hidden rounded-md">
                    <iframe
                        src="https://www.google.com/maps/embed/v1/place?q=Centro+de+Estudos+Bloco+de+Notas+rua+Laborim+70+Portugal&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
                        <div className="flex flex-col gap-3">
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map((link) => (
                                    <Link
                                        href={link.action}
                                        key={link.label}
                                        className="flex gap-3 md:flex-col lg:flex-row"
                                    >
                                        <p className="whitespace-nowrap">{link.label}:</p>
                                        <p className="medium-14 whitespace-nowrap text-blue-70 underline underline-offset-4  hover:text-cyan-600">
                                            {link.value}
                                        </p>
                                    </Link>
                                ))}
                            </FooterColumn>
                        </div>

                        <div className="flex flex-col gap-5">
                            <FooterColumn title={SOCIALS.title}>
                                <ul className="regular-14 flex gap-4 text-gray-30">
                                    {SOCIALS.links.map(({ icon, website }) => (
                                        <Link href={website} key={icon}>
                                            <Image
                                                src={icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                className="hover:text-cyan-600"
                                            />
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className="flex flex-col gap-3">
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    );
};

export default Footer;
