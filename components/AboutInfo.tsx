// components/About.js
import Image from "next/image";
import { TEAM_MEMBERS } from "@/constants";

const AboutInfo = () => {
    return (
        <section className="flex flex-col items-center justify-center py-16 ">
            <div className="text-center max-w-2xl mb-12">
                <h2 className="text-3xl font-bold text-blue-70 mb-8">Sobre Nós</h2>
                <p className="text-lg text-gray-600">
                    O centro de estudos Bloco de Notas foi criado para apoiar crianças e jovens dos 6 aos 18 anos nas
                    suas necessidades educativas. Oferecemos atividades lúdicas e culturais, especialmente durante as
                    férias, além de acompanhamento pedagógico personalizado. Preparamos planos de estudo mensais para
                    ajudar na realização de testes e provas, e apoiamos na execução de trabalhos escolares. O nosso
                    acompanhamento é feito por profissionais qualificados que auxiliam nos trabalhos de casa e na
                    preparação para avaliações. Também fornecemos refeições (almoço e lanche) e, quando necessário,
                    transporte entre a escola, centro e casa. Para promover um desenvolvimento saudável, organizamos
                    ações de formação sobre temas atuais. O nosso espaço inclui bibliotecas, computadores com acesso à
                    internet e software educativo.
                </p>
            </div>
        </section>
    );
};

export default AboutInfo;
