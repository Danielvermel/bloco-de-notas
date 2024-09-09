import Image from "next/image";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <h1 className="bold-52 lg:bold-84">Aprender Nunca Foi Tão Simples</h1>
                <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
                    No Bloco de Notas, o teu sucesso é a nossa prioridade. Oferecemos um espaço dedicado ao
                    desenvolvimento académico, onde cada aluno recebe atenção personalizada e estratégias de estudo
                    adaptadas às suas necessidades. Com aulas dinâmicas, explicações claras e apoio contínuo, estamos ao
                    teu lado para garantir que alcanças o melhor desempenho possível. Porque aprender deve ser uma
                    jornada prazerosa e cheia de conquistas."
                </p>

                <div className="flex my-11 flex-col w-full gap-3 sm:flex-row">
                    <Button type="button" title="O nosso espaço" variant="btn_green" />
                </div>
            </div>

            <div className="relative flex flex-1 items-start">
                <Image
                    src="/banners/writing.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="studying"
                    className="absolute left-[-5px] top-[-30px] w-auto rounded-3xl"
                />
            </div>
        </section>
    );
};

export default Hero;
