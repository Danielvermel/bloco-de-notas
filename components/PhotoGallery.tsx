// components/PhotoGallery.js
import Image from "next/image";
import { PLACE_PHOTOS } from "@/constants";

const PhotoGallery = () => {
    return (
        <section className="py-16" id="espaco">
            <div className="max-container padding-container flex flex-col gap-12">
                <h2 className="text-3xl font-bold text-blue-70 text-center mb-8">O Nosso Espaço</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
                    {PLACE_PHOTOS.map(({ src, alt }) => (
                        <div
                            key={src}
                            className="relative w-64 h-64 md:w-52 md:h-52 lg:w-58 lg:h-58 xl:w-72 xl:h-72 mb-8 rounded-3xl overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300"
                        >
                            <Image src={src} alt={alt} fill={true} className="rounded-3xl object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhotoGallery;
