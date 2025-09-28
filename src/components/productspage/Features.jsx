export const Features = () => {
    return (
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-8 md:mb-12">
                    <span className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-lg shadow-yellow-500/20">
                        ✦ Keunggulan Produk ✦
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                        Mengapa Memilih <span className="gold-gradient bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Ahoer Cool</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Produk skincare khusus pria dengan kualitas premium dan formula terbaik untuk kulit sehat dan percaya diri
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-600/5 rounded-2xl transform group-hover:scale-105 transition-all duration-500"></div>
                        <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-black/50 border border-gray-700/50 group-hover:border-yellow-500/30 transition-all duration-300 h-full backdrop-blur-sm">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/20">
                                <i className="fa-solid fa-shield text-black text-lg md:text-2xl"></i>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-3 text-center group-hover:text-yellow-400 transition-colors">BPOM Terdaftar</h3>
                            <p className="text-gray-300 text-center text-sm md:text-base leading-relaxed">Produk telah terdaftar resmi di Badan POM RI, menjamin keamanan, kualitas, dan kehalalan bahan baku</p>
                            <div className="mt-4 flex justify-center">
                                <span className="text-yellow-500 text-xs font-medium bg-yellow-500/10 px-2 py-1 rounded-full">Terjamin Keamanannya</span>
                            </div>
                        </div>
                    </div> 

                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-600/5 rounded-2xl transform group-hover:scale-105 transition-all duration-500"></div>
                        <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-black/50 border border-gray-700/50 group-hover:border-yellow-500/30 transition-all duration-300 h-full backdrop-blur-sm">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/20">
                                <i className="fa-solid fa-user-tie text-black text-2xl"></i>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-3 text-center group-hover:text-yellow-400 transition-colors">Formula Khusus Pria</h3>
                            <p className="text-gray-300 text-center text-sm md:text-base leading-relaxed">Dikembangkan khusus untuk kebutuhan kulit pria Indonesia dengan bahan aktif yang efektif dan cepat meresap</p>
                            <div className="mt-4 flex justify-center">
                                <span className="text-yellow-500 text-xs font-medium bg-yellow-500/10 px-2 py-1 rounded-full">Optimal untuk Kulit Pria</span>
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-600/5 rounded-2xl transform group-hover:scale-105 transition-all duration-500"></div>
                        <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-black/50 border border-gray-700/50 group-hover:border-yellow-500/30 transition-all duration-300 h-full backdrop-blur-sm">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/20">
                                <i className="fa-solid fa-gem text-black text-2xl"></i>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-3 text-center group-hover:text-yellow-400 transition-colors">Premium Quality</h3>
                            <p className="text-gray-300 text-center text-sm md:text-base leading-relaxed">Menggunakan bahan-bahan pilihan berkualitas tinggi dengan hasil maksimal untuk penampilan yang lebih percaya diri</p>
                            <div className="mt-4 flex justify-center">
                                <span className="text-yellow-500 text-xs font-medium bg-yellow-500/10 px-2 py-1 rounded-full">Kualitas Terbaik</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}