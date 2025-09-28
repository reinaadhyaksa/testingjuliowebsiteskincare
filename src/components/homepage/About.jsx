const About = () => {
    return (
        <section id="tentang" className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center max-w-5xl mx-auto">
                    <div className="space-y-4 md:space-y-5">
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                                <span className="text-white">Tentang </span>
                                <span className="gold-gradient bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                    Ahoer Cool For Men
                                </span>
                            </h2>

                            <p className="text-sm md:text-base text-gray-300 mb-3 leading-relaxed">
                                Ahoer Cool For Men adalah brand skincare pria yang menghadirkan rangkaian perawatan kulit berkualitas tinggi. Dengan sentuhan elegan dan maskulin, produk kami dirancang untuk membantu pria tampil percaya diri melalui kulit yang sehat, bersih, dan terawat.
                            </p>

                            <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                                Seluruh produk Ahoer Cool For Men telah terdaftar dan bersertifikat resmi <span className="text-yellow-500 font-semibold">BPOM sejak 2 September 2025</span>. Kami memahami pentingnya keamanan dan efektivitas, sehingga setiap produk diformulasikan dengan penelitian yang matang dan bahan pilihan.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 md:p-6 border border-gray-800">
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                <div className="flex items-center space-x-2 bg-black/50 p-2 md:p-3 rounded-lg">
                                    <div className="bg-yellow-500/10 p-1.5 rounded">
                                        <i className="fas fa-check text-yellow-500 text-xs md:text-sm"></i>
                                    </div>
                                    <span className="text-white text-xs md:text-sm">100% Original</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-black/50 p-2 md:p-3 rounded-lg">
                                    <div className="bg-yellow-500/10 p-1.5 rounded">
                                        <i className="fas fa-check text-yellow-500 text-xs md:text-sm"></i>
                                    </div>
                                    <span className="text-white text-xs md:text-sm">BPOM Certified</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-black/50 p-2 md:p-3 rounded-lg">
                                    <div className="bg-yellow-500/10 p-1.5 rounded">
                                        <i className="fas fa-check text-yellow-500 text-xs md:text-sm"></i>
                                    </div>
                                    <span className="text-white text-xs md:text-sm">Cruelty Free</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-black/50 p-2 md:p-3 rounded-lg">
                                    <div className="bg-yellow-500/10 p-1.5 rounded">
                                        <i className="fas fa-check text-yellow-500 text-xs md:text-sm"></i>
                                    </div>
                                    <span className="text-white text-xs md:text-sm">Dermatologist Tested</span>
                                </div>
                            </div>

                            <div className="mt-4 md:mt-6 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                                <p className="text-yellow-500 text-center text-xs md:text-sm">
                                    <i className="fas fa-quote-left mr-1"></i>
                                    Kami berkomitmen menghadirkan skincare pria yang aman, berkualitas, dan terpercaya untuk mendukung penampilan terbaik setiap hari.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About