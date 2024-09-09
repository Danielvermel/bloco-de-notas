import React from "react";
import Image from "next/image";

type Props = {};

const WhyUs = (props: Props) => {
    return (
        <section className="max-container padding-container py-16 flex flex-col gap-12 lg:flex-row lg:gap-20">
            <div className="flex-1">
                <Image
                    src="/kids-studying.jpg" // Replace with the actual path to your image
                    alt="Crianças a estudar no Bloco de Notas"
                    width={600}
                    height={400}
                    className="rounded-lg"
                />
            </div>

            <div className="flex-1 flex flex-col justify-center">
                <h2 className="bold-36 text-blue-70">Porque Escolher o Bloco de Notas?</h2>
                <p className="regular-18 mt-4 text-gray-60">
                    No Bloco de Notas, oferecemos um ambiente de aprendizagem acolhedor e focado no desenvolvimento
                    académico dos seus filhos, sem promessas exageradas. Sabemos que cada criança aprende de forma
                    diferente, e é por isso que nos dedicamos a entender as necessidades de cada aluno, oferecendo um
                    apoio personalizado e adaptado ao ritmo de cada um.
                </p>
                <ul className="mt-6 space-y-4 list-disc pl-5">
                    <li>
                        <strong>Professores Experientes:</strong> A nossa equipa é composta por professores
                        qualificados, que não só dominam as matérias, mas também compreendem as dificuldades comuns dos
                        alunos. Trabalhamos para explicar de forma clara e ajudar a construir uma base sólida.
                    </li>
                    <li>
                        <strong>Ambiente de Estudo Positivo:</strong> Criámos um espaço onde os alunos se sentem
                        motivados e confortáveis para estudar. Com grupos pequenos, conseguimos dar atenção a cada
                        aluno, garantindo que todos se sintam incluídos e ouvidos.
                    </li>
                    <li>
                        <strong>Estratégias de Estudo Práticas:</strong> Ensinamos mais do que a matéria — mostramos
                        como estudar de forma eficiente, ajudando os alunos a desenvolver métodos que podem usar em
                        qualquer área do seu percurso académico.
                    </li>
                    <li>
                        <strong>Foco em Resultados Reais:</strong> Não prometemos milagres, mas sim progresso
                        consistente. Trabalhamos com objetivos claros e alcançáveis, apoiando os alunos na superação das
                        suas dificuldades passo a passo.
                    </li>
                    <li>
                        <strong>Comunicação com Pais:</strong> Mantemos os pais informados sobre o progresso dos seus
                        filhos, partilhando feedback regular para que todos estejam envolvidos no processo de
                        aprendizagem.
                    </li>
                </ul>
                <p className="regular-18 mt-6 text-gray-60">
                    No Bloco de Notas, o nosso compromisso é simples: ajudar os seus filhos a estudar melhor, sentir-se
                    mais confiantes e alcançar os seus objetivos escolares de forma realista e sem pressão
                    desnecessária.
                </p>
            </div>
        </section>
    );
};

export default WhyUs;
