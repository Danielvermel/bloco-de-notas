import React, { ReactNode } from "react";
import Image from "next/image";

type Props = {};

interface ListItemProps {
    icon: string; // Assuming icon is a string (URL or path)
    children: ReactNode; // children can be any valid React node
}

const WhyUs = (props: Props) => {
    return (
        <section
            id="whyUs"
            className="max-container padding-container py-16 flex flex-col gap-12 lg:flex-row lg:gap-20"
        >
            <div className="flex-1">
                <Image
                    src="/why-us/kids-studying.jpg" // Replace with the actual path to your image
                    alt="Crianças a estudar no Bloco de Notas"
                    width={600}
                    height={400}
                    className="rounded-lg"
                />
            </div>

            <div className="flex-1 flex flex-col">
                <h2 className="text-3xl font-bold text-blue-70">Porquê Escolher o Bloco de Notas?</h2>
                <p className="regular-18 mt-4 text-gray-60">
                    No Bloco de Notas, oferecemos um ambiente de aprendizagem acolhedor e focado no desenvolvimento
                    académico dos seus filhos, sem promessas exageradas. Sabemos que cada criança aprende de forma
                    diferente, e é por isso que nos dedicamos a entender as necessidades de cada aluno, oferecendo um
                    apoio personalizado e adaptado ao ritmo de cada um.
                </p>
                <ul className="mt-6 space-y-4 list-disc ">
                    <ListItem icon="/icons/portfolio.png">
                        <strong>Professores Experientes:</strong> A nossa equipa é composta por professores
                        qualificados, que não só dominam as matérias, mas também compreendem as dificuldades comuns dos
                        alunos. Trabalhamos para explicar de forma clara e ajudar a construir uma base sólida.
                    </ListItem>
                    <ListItem icon="/icons/happiness.png">
                        <strong>Ambiente de Estudo Positivo:</strong> Criámos um espaço onde os alunos se sentem
                        motivados e confortáveis para estudar. Com grupos pequenos, conseguimos dar atenção a cada
                        aluno, garantindo que todos se sintam incluídos e ouvidos.
                    </ListItem>
                    <ListItem icon="/icons/chess.png">
                        <strong>Estratégias de Estudo Práticas:</strong> Ensinamos mais do que a matéria — mostramos
                        como estudar de forma eficiente, ajudando os alunos a desenvolver métodos que podem usar em
                        qualquer área do seu percurso académico.
                    </ListItem>
                    <ListItem icon="/icons/bullseye.png">
                        <strong>Foco em Resultados Reais:</strong> Não prometemos milagres, mas sim progresso
                        consistente. Trabalhamos com objetivos claros e alcançáveis, apoiando os alunos na superação das
                        suas dificuldades passo a passo.
                    </ListItem>
                    <ListItem icon="/icons/megaphone.png">
                        <strong>Comunicação com Pais:</strong> Mantemos os pais informados sobre o progresso dos seus
                        filhos, partilhando feedback regular para que todos estejam envolvidos no processo de
                        aprendizagem.
                    </ListItem>
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

// ListItem component to include the icon
const ListItem: React.FC<ListItemProps> = ({ icon, children }) => {
    return (
        <li className="flex items-start space-x-2">
            <Image src={icon} alt="icon" width={24} height={24} className="flex-shrink-0 mt-1" />
            <span className="text-gray-700">{children}</span>
        </li>
    );
};

export default WhyUs;
