export const Journey = () => {
    return (
        <section className="relative py-16 md:py-24 bg-black overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 md:mb-20">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-6 md:w-8 h-px bg-yellow-500"></div>
                            <span className="text-yellow-500 text-xs md:text-sm font-semibold uppercase tracking-wider">Brand Story</span>
                            <div className="w-6 md:w-8 h-px bg-yellow-500"></div>
                        </div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                            Cerita Dibalik{' '}
                            <span className="gold-gradient bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                                Kelegaan
                            </span>
                        </h2>
                        <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 md:mb-8"></div>
                        <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed md:leading-loose">
                            Lahir dari kebutuhan akan skincare pria yang efektif, elegan, dan sesuai dengan karakter kulit pria Indonesia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
                        <div className="order-2 lg:order-1">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 md:p-8 rounded-2xl border border-yellow-500/20">
                                    <div className="flex items-center mb-4 md:mb-6">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                                            <i className="fas fa-bullseye text-white text-lg md:text-xl"></i>
                                        </div>
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">Visi Kami</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                        Menjadi brand skincare pria terdepan yang menghadirkan solusi perawatan kulit berkualitas premium dengan pendekatan modern, ilmiah, dan memahami kebutuhan spesifik pria Indonesia.
                                    </p>
                                    <div className="mt-4 md:mt-6 flex items-center text-yellow-500">
                                        <span className="text-xs md:text-sm font-semibold">2024 Vision</span>
                                        <div className="w-6 md:w-8 h-px bg-yellow-500 ml-2 md:ml-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2">
                            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                <img
                                    src="https://res.cloudinary.com/du4wegspv/image/upload/f_auto,q_auto/v1758976066/about1_kikgp6.png"
                                    alt="Visi Ahoer Cool"
                                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                                />
                                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-20">
                                    <span className="bg-yellow-500 text-black px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                                        Innovation & Excellence
                                    </span>
                                </div>
                            </div>
                            <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-yellow-500/10 rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                <img
                                    src="https://res.cloudinary.com/du4wegspv/image/upload/f_auto,q_auto/v1758976065/about2_bgzhrq.png"
                                    alt="Misi Ahoer Cool"
                                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                                />
                                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-20">
                                    <span className="bg-yellow-500 text-black px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                                        Quality & Commitment
                                    </span>
                                </div>
                            </div>
                            <div className="absolute -top-2 md:-top-4 -left-2 md:-left-4 w-12 h-12 md:w-20 md:h-20 bg-yellow-500/10 rounded-full"></div>
                        </div>

                        <div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 md:p-8 rounded-2xl border border-yellow-500/20">
                                    <div className="flex items-center mb-4 md:mb-6">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                                            <i className="fas fa-flag text-yellow-500 text-lg md:text-xl"></i>
                                        </div>
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">Misi Kami</h3>
                                    </div>
                                    <ul className="space-y-3 md:space-y-4">
                                        <li className="flex items-start group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
                                                <span className="text-yellow-500 font-bold text-sm md:text-lg">1</span>
                                            </div>
                                            <span className="text-gray-300 leading-relaxed text-sm md:text-base flex-1">
                                                Mengembangkan produk inovatif berbasis penelitian mendalam untuk kebutuhan kulit pria Indonesia
                                            </span>
                                        </li>
                                        <li className="flex items-start group-hover:transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                                            <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
                                                <span className="text-yellow-500 font-bold text-sm md:text-lg">2</span>
                                            </div>
                                            <span className="text-gray-300 leading-relaxed text-sm md:text-base flex-1">
                                                Mengedukasi pria Indonesia tentang pentingnya rutinitas perawatan kulit yang tepat
                                            </span>
                                        </li>
                                        <li className="flex items-start group-hover:transform group-hover:translate-x-2 transition-transform duration-300 delay-200">
                                            <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
                                                <span className="text-yellow-500 font-bold text-sm md:text-lg">3</span>
                                            </div>
                                            <span className="text-gray-300 leading-relaxed text-sm md:text-base flex-1">
                                                Menjaga standar kualitas dan keamanan tertinggi dalam setiap produk
                                            </span>
                                        </li>
                                        <li className="flex items-start group-hover:transform group-hover:translate-x-2 transition-transform duration-300 delay-300">
                                            <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
                                                <span className="text-yellow-500 font-bold text-sm md:text-lg">4</span>
                                            </div>
                                            <span className="text-gray-300 leading-relaxed text-sm md:text-base flex-1">
                                                Menghadirkan pengalaman premium dari produk hingga pelayanan
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 md:mt-24 text-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
                            <div className="text-center group">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-yellow-500/20 transition-colors duration-300">
                                    <i className="fas fa-flask text-yellow-500 text-lg md:text-2xl"></i>
                                </div>
                                <h4 className="text-white font-bold mb-2 text-sm md:text-base">Scientific Approach</h4>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Formula berbasis penelitian ilmiah untuk hasil optimal</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-yellow-500/20 transition-colors duration-300">
                                    <i className="fas fa-gem text-yellow-500 text-lg md:text-2xl"></i>
                                </div>
                                <h4 className="text-white font-bold mb-2 text-sm md:text-base">Premium Quality</h4>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Standar kualitas tertinggi dengan bahan-bahan pilihan</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-yellow-500/20 transition-colors duration-300">
                                    <i className="fas fa-heart text-yellow-500 text-lg md:text-2xl"></i>
                                </div>
                                <h4 className="text-white font-bold mb-2 text-sm md:text-base">Customer Focus</h4>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Dedikasi penuh untuk kepuasan dan kepercayaan pelanggan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}