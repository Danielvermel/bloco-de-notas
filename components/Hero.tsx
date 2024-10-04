import Image from "next/image";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="max-container padding-container flex flex-col lg:gap-20 py-10 lg:pb-32 md:gap-28 lg:py-20 xl:flex-row mt-28">
            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <h1 className="bold-52 lg:bold-84">
                    Aprender Nunca Foi Tão <span className="text-yellow-500">Simples</span>
                </h1>
                <p className="regular-18 mt-6 text-gray-30 xl:max-w-[520px]">
                    No Bloco de Notas, o teu sucesso é a nossa prioridade. Oferecemos um espaço onde cada aluno recebe
                    atenção personalizada e estratégias de estudo ajustadas às suas necessidades. Com aulas claras e
                    apoio contínuo, ajudamos-te a alcançar o melhor desempenho. Aprender pode ser uma jornada divertida
                    e cheia de conquistas!
                </p>

                <div className="flex my-11 flex-col w-full gap-3 sm:flex-row">
                    <Button type="button" title="O nosso espaço" variant="btn_blue" action="/#espaco" />
                </div>
            </div>

            <div className="relative flex flex-1 items-start">
                <Image
                    src="/banners/apple.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="studying"
                    className="rounded-3xl object-cover w-full h-auto max-w-[400px] lg:max-w-none lg:rounded-3xl hidden lg:block"
                />
            </div>
        </section>
    );
};

export default Hero;
