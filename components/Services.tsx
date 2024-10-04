// components/Services.js
import { SERVICES } from "@/constants";
import Image from "next/image";

const Services = () => {
    return (
        <section id="services" className="bg-blue-50 py-16">
            <div className="max-container padding-container flex flex-col gap-12">
                <h2 className="text-3xl font-bold text-blue-70 text-center mb-8">Serviços</h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {SERVICES.map(({ src, alt, title, description }) => (
                        <div className="service-card bg-white p-6 lg:p-8 rounded-lg shadow-md flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                            <Image
                                src={src} // Replace with your actual image path
                                alt={alt}
                                width={150}
                                height={150}
                                className="rounded-lg object-cover w-full max-w-[360px] sm:max-w-[420px] md:max-w-[380px] lg:max-w-[150px] h-auto lg:h-full"
                            />
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-xl font-semibold text-blue-70 mb-4">{title}</h3>
                                <p className="text-gray-700">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

{
    /* <div
    key={src}
    className="relative w-64 h-64 md:w-52 md:h-52 lg:w-58 lg:h-58 xl:w-72 xl:h-72 mb-8 rounded-3xl overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300"
>
    <Image src={src} alt={alt} fill={true} className="rounded-3xl object-cover" />
</div>; */
}

export default Services;
