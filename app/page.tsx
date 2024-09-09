import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <WhyUs />
        </>
    );
}
