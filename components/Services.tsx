// components/Services.js
import Image from "next/image";

const Services = () => {
    return (
        <section className="bg-blue-50 py-16">
            <div className="max-container padding-container flex flex-col gap-12">
                <h2 className="text-3xl font-bold text-blue-70 text-center mb-8">
                    Serviços Oferecidos pelo Bloco de Notas
                </h2>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Apoio ao Estudo */}
                    <div className="service-card bg-white p-6 lg:p-8 rounded-lg shadow-md flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                        <Image
                            src="/services/apoio.jpg" // Replace with your actual image path
                            alt="Apoio ao Estudo"
                            width={150}
                            height={150}
                            className="rounded-lg object-cover w-full max-w-[120px] lg:max-w-[150px] h-auto lg:h-full"
                        />
                        <div className="flex-1 text-center lg:text-left">
                            <h3 className="text-xl font-semibold text-blue-70 mb-4">
                                Apoio ao Estudo (1º, 2º e 3º Ciclos)
                            </h3>
                            <p className="text-gray-700">
                                O Apoio ao estudo proporciona acompanhamento pedagógico para alunos dos 1º, 2º e 3º
                                ciclos do Ensino Básico, com pessoal qualificado e pronto para ajudar nas mais diversas
                                disciplinas.
                            </p>
                        </div>
                    </div>

                    {/* Explicações Individuais */}
                    <div className="service-card bg-white p-6 lg:p-8 rounded-lg shadow-md flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                        <Image
                            src="/services/explicacoes.jpg" // Replace with your actual image path
                            alt="Explicações Individuais"
                            width={150}
                            height={150}
                            className="rounded-lg object-cover w-full max-w-[120px] lg:max-w-[150px] h-auto lg:h-full"
                        />
                        <div className="flex-1 text-center lg:text-left">
                            <h3 className="text-xl font-semibold text-blue-70 mb-4">
                                Explicações Individuais (1º Ciclo ao Ensino Secundário)
                            </h3>
                            <p className="text-gray-700">
                                Para os alunos que necessitam de um apoio mais específico em algumas matérias. Um apoio
                                feito por profissionais devidamente qualificados, ajustado às necessidades de cada
                                aluno.
                            </p>
                        </div>
                    </div>

                    {/* Serviço de Transporte e Refeições */}
                    <div className="service-card bg-white p-6 lg:p-8 rounded-lg shadow-md flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                        <Image
                            src="/services/transporte.jpg" // Replace with your actual image path
                            alt="Serviço de Transporte e Refeições"
                            width={150}
                            height={150}
                            className="rounded-lg object-cover w-full max-w-[120px] lg:max-w-[150px] h-auto lg:h-full"
                        />
                        <div className="flex-1 text-center lg:text-left">
                            <h3 className="text-xl font-semibold text-blue-70 mb-4">
                                Serviço de Transporte e Refeições
                            </h3>
                            <p className="text-gray-700">
                                Garantimos o transporte entre a escola e o Centro de Estudos Bloco de Notas, assim como
                                asseguramos as refeições e lanche, garantindo o conforto e segurança dos alunos.
                            </p>
                        </div>
                    </div>

                    {/* Atividades de Verão */}
                    <div className="service-card bg-white p-6 lg:p-8 rounded-lg shadow-md flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                        <Image
                            src="/services/atividades.jpg" // Replace with your actual image path
                            alt="Atividades de Verão"
                            width={150}
                            height={150}
                            className="rounded-lg object-cover w-full max-w-[120px] lg:max-w-[150px] h-auto lg:h-full"
                        />
                        <div className="flex-1 text-center lg:text-left">
                            <h3 className="text-xl font-semibold text-blue-70 mb-4">Atividades de Verão</h3>
                            <p className="text-gray-700">
                                Planificação de atividades no sentido de proporcionar momentos de lazer, descontração e
                                diversão, tais como praia, passeios, piqueniques e muito mais, criando memórias
                                inesquecíveis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
