// components/About.js
import Image from "next/image";
import { TEAM_MEMBERS } from "@/constants";

const TeamMembers = () => {
    return (
        <section id="team-members" className="flex flex-col items-center justify-center py-16 bg-blue-50">
            <div className="text-center max-w-2xl mb-12">
                <h2 className="text-3xl font-bold text-blue-70 mb-8">Quem Somos?</h2>
                <p className="text-lg text-gray-600">
                    Somos uma equipa dedicada a oferecer as melhores soluções aos nossos clientes. Conhece as pessoas
                    que tornam tudo isto possível.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {TEAM_MEMBERS.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden">
                            <Image
                                src={member.image}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-gray-500">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamMembers;
