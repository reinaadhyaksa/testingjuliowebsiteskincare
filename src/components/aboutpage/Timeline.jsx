export const TimeLine = () => {
    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-10 w-32 md:w-64 h-32 md:h-64 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-10 w-40 md:w-80 h-40 md:h-80 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                            <div className="w-6 md:w-8 h-px bg-yellow-500"></div>
                            <span className="text-yellow-500 text-xs md:text-sm font-semibold uppercase tracking-wider">Our Journey</span>
                            <div className="w-6 md:w-8 h-px bg-yellow-500"></div>
                        </div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                            Perjalanan{' '}
                            <span className="gold-gradient bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                                Premium
                            </span>
                        </h2>
                        <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 md:mb-8"></div>
                        <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed md:leading-loose">
                            Langkah-langkah penting dalam perjalanan Ahoer Cool menghadirkan yang terbaik untuk kulit pria Indonesia
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line - hidden on mobile, visible on desktop */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-500 via-yellow-400 to-yellow-500 h-full opacity-60"></div>

                        <div className="space-y-12 md:space-y-20">
                            {/* Item 1 */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                {/* Timeline dot */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                                    <div className="relative group">
                                        <div className="w-4 h-4 md:w-6 md:h-6 bg-yellow-500 rounded-full border-4 border-black shadow-lg shadow-yellow-500/50"></div>
                                        <div className="absolute inset-0 w-4 h-4 md:w-6 md:h-6 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                    </div>
                                </div>

                                {/* Content left - visible on desktop, hidden on mobile */}
                                <div className="w-full md:w-2/5 pr-0 md:pr-8 text-left md:text-right mb-4 md:mb-0 md:block hidden">
                                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 md:p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                                        <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
                                            <i className="fas fa-rocket text-yellow-500 text-xs md:text-sm"></i>
                                            <span className="text-yellow-500 text-xs md:text-sm font-semibold">2024 - Launch</span>
                                        </div>
                                        <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Peluncuran Produk Pertama</h4>
                                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                            Meluncurkan dua produk unggulan: Facial Wash dengan Charcoal dan DNA Salmon Brightening Moisturizer dengan respon pasar yang sangat positif
                                        </p>
                                    </div>
                                </div>

                                {/* Icon center - hidden on mobile */}
                                <div className="hidden md:block w-1/5 text-center">
                                    <div className="w-12 h-12 md:w-20 md:h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto">
                                        <i className="fas fa-star text-yellow-500 text-lg md:text-2xl"></i>
                                    </div>
                                </div>

                                {/* Content right - visible on mobile and desktop */}
                                <div className="w-full md:w-2/5 pl-8 md:pl-8 text-left md:text-left">
                                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 md:p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 md:hidden">
                                        <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
                                            <i className="fas fa-rocket text-yellow-500 text-xs md:text-sm"></i>
                                            <span className="text-yellow-500 text-xs md:text-sm font-semibold">2024 - Launch</span>
                                        </div>
                                        <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Peluncuran Produk Pertama</h4>
                                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                            Meluncurkan dua produk unggulan: Facial Wash dengan Charcoal dan DNA Salmon Brightening Moisturizer dengan respon pasar yang sangat positif
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                {/* Timeline dot */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                                    <div className="relative group">
                                        <div className="w-4 h-4 md:w-6 md:h-6 bg-yellow-500 rounded-full border-4 border-black shadow-lg shadow-yellow-500/50"></div>
                                        <div className="absolute inset-0 w-4 h-4 md:w-6 md:h-6 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                    </div>
                                </div>

                                {/* Content left - hidden on mobile */}
                                <div className="w-full md:w-2/5 pr-0 md:pr-8 text-left md:text-right mb-4 md:mb-0 hidden md:block">
                                </div>

                                {/* Icon center - hidden on mobile */}
                                <div className="hidden md:block w-1/5 text-center">
                                    <div className="w-12 h-12 md:w-20 md:h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto">
                                        <i className="fas fa-expand text-yellow-500 text-lg md:text-2xl"></i>
                                    </div>
                                </div>

                                {/* Content right - visible on mobile and desktop */}
                                <div className="w-full md:w-2/5 pl-8 md:pl-8 text-left md:text-left">
                                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 md:p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                                        <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
                                            <i className="fas fa-layer-group text-yellow-500 text-xs md:text-sm"></i>
                                            <span className="text-yellow-500 text-xs md:text-sm font-semibold">2024 - Expansion</span>
                                        </div>
                                        <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Ekspansi Rangkaian Produk</h4>
                                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                            Menghadirkan rangkaian lengkap termasuk toner, serum, dan sun protection untuk perawatan menyeluruh pria modern
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                {/* Timeline dot */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                                    <div className="relative group">
                                        <div className="w-4 h-4 md:w-6 md:h-6 bg-yellow-500 rounded-full border-4 border-black shadow-lg shadow-yellow-500/50"></div>
                                        <div className="absolute inset-0 w-4 h-4 md:w-6 md:h-6 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                    </div>
                                </div>

                                {/* Content left - visible on desktop, hidden on mobile */}
                                <div className="w-full md:w-2/5 pr-0 md:pr-8 text-left md:text-right mb-4 md:mb-0 hidden md:block">
                                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 md:p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                                        <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
                                            <i className="fas fa-certificate text-yellow-500 text-xs md:text-sm"></i>
                                            <span className="text-yellow-500 text-xs md:text-sm font-semibold">2025 - Certification</span>
                                        </div>
                                        <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Sertifikasi BPOM</h4>
                                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                            <span className="text-yellow-400 font-semibold">2 September 2025</span> - Semua produk resmi mendapatkan sertifikasi BPOM, menjamin keamanan dan kualitas tertinggi
                                        </p>
                                        <div className="mt-2 md:mt-3 inline-flex items-center gap-1 bg-yellow-500/20 px-2 py-1 md:px-3 md:py-1 rounded-full">
                                            <i className="fas fa-shield-check text-yellow-500 text-xs"></i>
                                            <span className="text-yellow-500 text-xs font-semibold">Quality Guaranteed</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Icon center - hidden on mobile */}
                                <div className="hidden md:block w-1/5 text-center">
                                    <div className="w-12 h-12 md:w-20 md:h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto">
                                        <i className="fas fa-award text-yellow-500 text-lg md:text-2xl"></i>
                                    </div>
                                </div>

                                {/* Content right - visible on mobile */}
                                <div className="w-full md:w-2/5 pl-8 md:pl-8 text-left md:text-left">
                                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 md:p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 md:hidden">
                                        <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
                                            <i className="fas fa-certificate text-yellow-500 text-xs md:text-sm"></i>
                                            <span className="text-yellow-500 text-xs md:text-sm font-semibold">2025 - Certification</span>
                                        </div>
                                        <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Sertifikasi BPOM</h4>
                                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                            <span className="text-yellow-400 font-semibold">2 September 2025</span> - Semua produk resmi mendapatkan sertifikasi BPOM, menjamin keamanan dan kualitas tertinggi
                                        </p>
                                        <div className="mt-2 md:mt-3 inline-flex items-center gap-1 bg-yellow-500/20 px-2 py-1 md:px-3 md:py-1 rounded-full">
                                            <i className="fas fa-shield-check text-yellow-500 text-xs"></i>
                                            <span className="text-yellow-500 text-xs font-semibold">Quality Guaranteed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Item 4 */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                {/* Timeline dot */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                                    <div className="relative group">
                                        <div className="w-4 h-4 md:w-6 md:h-6 bg-yellow-500 rounded-full border-4 border-black shadow-lg shadow-yellow-500/50"></div>
                                        <div className="absolute inset-0 w-4 h-4 md:w-6 md:h-6 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                    </div>
                                </div>

                                {/* Content left - hidden on mobile */}
                                <div className="w-full md:w-2/5 pr-0 md:pr-8 text-left md:text-right mb-4 md:mb-0 hidden md:block">
                                </div>

                                {/* Icon center - hidden on mobile */}
                                <div className="hidden md:block w-1/5 text-center">
                                    <div className="w-12 h-12 md:w-20 md:h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto">
                                        <i className="fas fa-infinity text-yellow-500 text-lg md:text-2xl"></i>
                                    </div>
                                </div>

                                {/* Content right - visible on mobile and desktop */}
                                <div className="w-full md:w-2/5 pl-8 md:pl-8 text-left md:text-left">
                                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 md:p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                                        <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
                                            <i className="fas fa-flask text-yellow-500 text-xs md:text-sm"></i>
                                            <span className="text-yellow-500 text-xs md:text-sm font-semibold">Future - Innovation</span>
                                        </div>
                                        <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Inovasi Terus Menerus</h4>
                                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                            Terus berkomitmen menghadirkan formula terbaru dengan teknologi terkini untuk hasil optimal dan pengalaman premium
                                        </p>
                                        <div className="mt-2 md:mt-3 inline-flex items-center gap-1 bg-yellow-500/20 px-2 py-1 md:px-3 md:py-1 rounded-full">
                                            <i className="fas fa-trending-up text-yellow-500 text-xs"></i>
                                            <span className="text-yellow-500 text-xs font-semibold">Ongoing Research</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Continue indicator */}
                        <div className="relative mt-12 md:mt-20 flex justify-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50">
                                <i className="fas fa-arrow-down text-white text-xs md:text-sm"></i>
                            </div>
                            <div className="absolute top-6 md:top-8 text-center">
                                <span className="text-yellow-500 text-xs md:text-sm font-semibold">Journey Continues...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}