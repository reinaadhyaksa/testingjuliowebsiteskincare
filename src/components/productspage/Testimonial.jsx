import { TestimonialCard } from "./Template"

export const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Rizki Pratama",
            age: 28,
            occupation: "Business Consultant",
            rating: 5,
            text: "Sebagai konsultan yang sering meeting dengan klien, penampilan sangat penting. Ahoer Cool membuat kulit saya terlihat fresh sepanjang hari. Facial Wash-nya benar-benar membersihkan tanpa membuat kulit kering.",
            products: ["Facial Wash", "Moisturizer"]
        },
        {
            id: 2,
            name: "Andi Wijaya",
            age: 32,
            occupation: "Software Engineer",
            rating: 5,
            text: "Setelah 2 minggu pakai rutin, kulit wajah lebih cerah dan bebas minyak berlebih. Moisturizer-nya ringan dan cepat meresap, cocok untuk pria yang tidak suka rasa lengket.",
            products: ["Moisturizer"]
        },
        {
            id: 3,
            name: "Budi Santoso",
            age: 25,
            occupation: "Marketing Executive",
            rating: 4,
            text: "Produknya worth banget untuk harganya. Packaging-nya elegan dan hasilnya terlihat dalam 1 minggu pemakaian. Sekarang lebih percaya diri saat presentasi ke client.",
            products: ["Facial Wash", "Moisturizer"]
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-4 md:right-10 w-32 h-32 md:w-40 md:h-40 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-xl"></div>
                <div className="absolute bottom-20 left-4 md:left-10 w-24 h-24 md:w-32 md:h-32 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-yellow-500/20">
                        ✦ Testimonial ✦
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                        Dipercaya <span className="gold-gradient bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Pria Modern</span>
                    </h2>
                    <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Bukti nyata dari mereka yang telah merasakan manfaat Ahoer Cool For Men dan mengalami transformasi kulit yang signifikan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            delay={(index + 1) * 200}
                            index={index}
                        />
                    ))}
                </div>

                <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-800/50">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 max-w-2xl mx-auto">
                        <div className="text-center group p-3 md:p-0">
                            <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform">4.9/5</div>
                            <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Rating Average</div>
                            <div className="flex justify-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fas fa-star text-yellow-500 text-xs mx-0.5"></i>
                                ))}
                            </div>
                        </div>
                        <div className="text-center group p-3 md:p-0">
                            <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform">500+</div>
                            <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Users Happy</div>
                        </div>
                        <div className="text-center group p-3 md:p-0">
                            <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform">95%</div>
                            <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Satisfaction</div>
                        </div>
                        <div className="text-center group p-3 md:p-0">
                            <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform">2K+</div>
                            <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Products Sold</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}