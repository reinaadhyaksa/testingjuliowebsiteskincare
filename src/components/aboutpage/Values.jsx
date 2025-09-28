export const Values = () => {
    return (
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-1/4 w-32 md:w-48 h-32 md:h-48 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-3xl"></div>
                <div className="absolute bottom-20 right-1/4 w-40 md:w-56 h-40 md:h-56 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-yellow-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                        <div className="w-6 md:w-8 h-px bg-yellow-500"></div>
                        <span className="text-yellow-500 text-xs md:text-sm font-semibold uppercase tracking-wider">Our Values</span>
                        <div className="w-6 md:w-8 h-px bg-yellow-500"></div>
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                        Nilai{' '}
                        <span className="gold-gradient bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                            Premium
                        </span>{' '}
                        Kami
                    </h2>
                    <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-4 md:mb-6"></div>
                    <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed md:leading-loose">
                        Prinsip-prinsip yang menjadi fondasi setiap produk dan layanan Ahoer Cool untuk kulit pria Indonesia
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {/* Card 1 - Inovasi Berkelanjutan */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 md:p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 h-full">
                            <div className="text-center mb-4 md:mb-6">
                                <div className="relative inline-block">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <i className="fas fa-flask text-yellow-500 text-2xl md:text-3xl"></i>
                                    </div>
                                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                        <i className="fas fa-plus text-black text-xs"></i>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-3 md:mb-4 group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                                Inovasi Berkelanjutan
                            </h3>

                            <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                                Terus mengembangkan formula terbaru dengan penelitian mendalam dan teknologi terkini untuk hasil yang optimal bagi kulit pria modern.
                            </p>

                            <div className="flex justify-center flex-wrap gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold">Research</span>
                                <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold">Technology</span>
                                <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold">Development</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Kualitas Premium */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 md:p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 h-full">
                            <div className="text-center mb-4 md:mb-6">
                                <div className="relative inline-block">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <i className="fas fa-gem text-yellow-500 text-2xl md:text-3xl"></i>
                                    </div>
                                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                        <i className="fas fa-star text-black text-xs"></i>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-3 md:mb-4 group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                                Kualitas Premium
                            </h3>

                            <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                                Hanya menggunakan bahan-bahan terpilih dengan standar kualitas tertinggi dan proses produksi yang ketat untuk pengalaman premium.
                            </p>

                            <div className="flex justify-center flex-wrap gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold">Premium</span>
                                <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold">Quality</span>
                                <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold">Excellence</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Keamanan Terjamin */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 md:p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 h-full">
                            <div className="text-center mb-4 md:mb-6">
                                <div className="relative inline-block">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <i className="fas fa-shield-alt text-yellow-500 text-2xl md:text-3xl"></i>
                                    </div>
                                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                        <i className="fas fa-check text-black text-xs"></i>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-3 md:mb-4 group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                                Keamanan Terjamin
                            </h3>

                            <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                                Semua produk telah melalui uji klinis dan memiliki sertifikasi BPOM untuk menjamin keamanan penggunaan sehari-hari.
                            </p>

                            <div className="flex justify-center flex-wrap gap-2">
                                <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold">BPOM</span>
                                <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold">Safety</span>
                                <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold">Certified</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Features Grid */}
                <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                    <div className="text-center group">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-yellow-500/20 transition-colors duration-300">
                            <i className="fas fa-user-check text-yellow-500 text-lg md:text-xl"></i>
                        </div>
                        <h4 className="text-white font-semibold text-xs md:text-sm leading-tight">Customer Focus</h4>
                        <p className="text-gray-400 text-xs mt-1 leading-tight">Kepuasan pelanggan utama</p>
                    </div>

                    <div className="text-center group">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-yellow-500/20 transition-colors duration-300">
                            <i className="fas fa-leaf text-yellow-500 text-lg md:text-xl"></i>
                        </div>
                        <h4 className="text-white font-semibold text-xs md:text-sm leading-tight">Natural Ingredients</h4>
                        <p className="text-gray-400 text-xs mt-1 leading-tight">Bahan alami berkualitas</p>
                    </div>

                    <div className="text-center group">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-yellow-500/20 transition-colors duration-300">
                            <i className="fas fa-clock text-yellow-500 text-lg md:text-xl"></i>
                        </div>
                        <h4 className="text-white font-semibold text-xs md:text-sm leading-tight">Long Lasting</h4>
                        <p className="text-gray-400 text-xs mt-1 leading-tight">Hasil bertahan lama</p>
                    </div>

                    <div className="text-center group">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-yellow-500/20 transition-colors duration-300">
                            <i className="fas fa-heart text-yellow-500 text-lg md:text-xl"></i>
                        </div>
                        <h4 className="text-white font-semibold text-xs md:text-sm leading-tight">Skin Friendly</h4>
                        <p className="text-gray-400 text-xs mt-1 leading-tight">Ramah semua jenis kulit</p>
                    </div>
                </div>
            </div>
        </section>
    )
}