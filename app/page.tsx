import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import TeamMembers from "@/components/TeamMembers";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <WhyUs />
            <TeamMembers />
            <PhotoGallery />
        </>
    );
}
