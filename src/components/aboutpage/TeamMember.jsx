export const TeamMembers = () => {
    const teamMembers = [
        {
            name: "Andi Wijaya",
            position: "Founder & CEO",
            description: "Pemimpin visioner dengan pengalaman 10 tahun di industri kosmetik dan passion untuk menciptakan produk berkualitas tinggi khusus pria Indonesia.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            specialty: "Leadership",
            experience: 10,
            expertise: ["Business Strategy", "Product Development", "Market Analysis"],
            social: {
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Dr. Maya Sari",
            position: "Direktur R&D",
            description: "Ahli dermatologi dengan spesialisasi dalam perawatan kulit pria Asia. Berpengalaman mengembangkan formula inovatif selama 8 tahun.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2088&q=80",
            specialty: "Dermatology",
            experience: 8,
            expertise: ["Clinical Research", "Formula Development", "Skin Science"],
            social: {
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Sarah Putri",
            position: "Direktur Pemasaran",
            description: "Spesialis branding dengan track record membangun berbagai brand ternama di Indonesia. Fokus pada pengalaman konsumen yang premium.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80",
            specialty: "Marketing",
            experience: 7,
            expertise: ["Brand Strategy", "Digital Marketing", "Consumer Insight"],
            social: {
                linkedin: "#",
                instagram: "#"
            }
        }
    ];

    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 md:w-48 h-32 md:h-48 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 md:w-56 h-40 md:h-56 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-72 h-48 md:h-72 bg-yellow-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                        <div className="w-6 md:w-8 h-px bg-yellow-500"></div>
                        <span className="text-yellow-500 text-xs md:text-sm font-semibold uppercase tracking-wider">Expert Team</span>
                        <div className="w-6 md:w-8 h-px bg-yellow-500"></div>
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                        Tim{' '}
                        <span className="gold-gradient bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                            Ahli
                        </span>{' '}
                        Kami
                    </h2>
                    <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 md:mb-8"></div>
                    <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed md:leading-loose">
                        Didukung oleh tim profesional yang berdedikasi untuk menghadirkan solusi terbaik bagi kulit pria Indonesia
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 h-full overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                    <div className="absolute top-3 md:top-4 right-3 md:right-4">
                                        <span className="bg-yellow-500 text-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                                            {member.specialty}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href={member.social.linkedin} className="w-6 h-6 md:w-8 md:h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                                            <i className="fab fa-linkedin-in text-white text-xs md:text-sm"></i>
                                        </a>
                                        <a href={member.social.instagram} className="w-6 h-6 md:w-8 md:h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                                            <i className="fab fa-instagram text-white text-xs md:text-sm"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="p-4 md:p-6">
                                    <div className="text-center mb-3 md:mb-4">
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                                            {member.name}
                                        </h3>
                                        <div className="flex items-center justify-center space-x-2">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                            <p className="text-yellow-500 font-semibold text-xs md:text-sm">{member.position}</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 text-center leading-relaxed text-xs md:text-sm mb-3 md:mb-4">
                                        {member.description}
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-1 md:gap-2">
                                        {member.expertise.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full text-xs font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-800 text-center">
                                        <div className="text-yellow-500 text-xs md:text-sm font-semibold">
                                            {member.experience}+ Tahun Pengalaman
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                    <div className="text-center group">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                            {teamMembers.length}+
                        </div>
                        <div className="text-white font-semibold text-sm md:text-base mb-1">Ahli Profesional</div>
                        <div className="text-gray-400 text-xs md:text-sm">Dedikasi penuh untuk kualitas</div>
                    </div>

                    <div className="text-center group">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                            25+
                        </div>
                        <div className="text-white font-semibold text-sm md:text-base mb-1">Tahun Gabungan</div>
                        <div className="text-gray-400 text-xs md:text-sm">Pengalaman di bidang skincare</div>
                    </div>

                    <div className="text-center group">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                            500+
                        </div>
                        <div className="text-white font-semibold text-sm md:text-base mb-1">Formula Teruji</div>
                        <div className="text-gray-400 text-xs md:text-sm">Research dan development</div>
                    </div>

                    <div className="text-center group">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                            4.9/5
                        </div>
                        <div className="text-white font-semibold text-sm md:text-base mb-1">Rating Kepuasan</div>
                        <div className="text-gray-400 text-xs md:text-sm">Dari pelanggan setia</div>
                    </div>
                </div>
            </div>
        </section>
    )
}