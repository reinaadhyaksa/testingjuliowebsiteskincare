export const Instructions = () => {
    return ( 
        <section className="py-16 md:py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-32 md:w-48 h-32 md:h-48 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 md:w-56 h-40 md:h-56 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-yellow-500/20">
                        ✦ Simple & Effective ✦
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                        Rutinitas <span className="gold-gradient bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Sempurna</span> dalam 2 Langkah
                    </h2>
                    <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4"></div>
                    <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                        Tidak perlu ribet. Cukup 2 produk untuk hasil maksimal. Cocok untuk pria sibuk yang ingin tampil optimal setiap hari.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                        <div className="relative bg-gradient-to-br from-gray-800/50 to-black/70 rounded-2xl p-6 md:p-8 border border-gray-700/50 group-hover:border-yellow-500/30 transition-all duration-300 h-full backdrop-blur-sm">
                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="relative">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-base md:text-lg shadow-lg shadow-yellow-500/30">
                                        1
                                    </div>
                                    <div className="absolute -inset-2 bg-yellow-500/20 rounded-full blur-md"></div>
                                </div>
                                <div className="ml-3 md:ml-4">
                                    <span className="text-yellow-500 text-xs md:text-sm font-semibold uppercase tracking-wider">Step 1</span>
                                    <h3 className="text-lg md:text-xl font-bold text-white">Facial Wash with Charcoal</h3>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                                Gunakan pagi dan malam untuk membersihkan wajah secara mendalam dari kotoran, minyak berlebih, dan polusi dengan charcoal aktif.
                            </p>

                            <div className="bg-black/30 rounded-xl p-3 md:p-4 mb-4 md:mb-6 border border-gray-700/50">
                                <h4 className="text-yellow-500 font-semibold mb-2 md:mb-3 flex items-center text-sm md:text-base">
                                    <i className="fas fa-clock mr-2"></i>
                                    Waktu Penggunaan:
                                </h4>
                                <ul className="space-y-2 md:space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-4 h-4 md:w-5 md:h-5 bg-yellow-500/20 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                                            <svg className="w-2 h-2 md:w-3 md:h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 text-xs md:text-sm">Pagi hari setelah bangun tidur untuk memulai hari dengan segar</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-4 h-4 md:w-5 md:h-5 bg-yellow-500/20 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                                            <svg className="w-2 h-2 md:w-3 md:h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 text-xs md:text-sm">Malam hari setelah beraktivitas untuk mengangkat kotoran seharian</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-1 md:gap-2">
                                <span className="bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full text-xs font-medium">Deep Cleansing</span>
                                <span className="bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full text-xs font-medium">Charcoal Active</span>
                                <span className="bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full text-xs font-medium">Oil Control</span>
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                        <div className="relative bg-gradient-to-br from-gray-800/50 to-black/70 rounded-2xl p-6 md:p-8 border border-gray-700/50 group-hover:border-yellow-500/30 transition-all duration-300 h-full backdrop-blur-sm">
                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="relative">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-base md:text-lg shadow-lg shadow-yellow-500/30">
                                        2
                                    </div>
                                    <div className="absolute -inset-2 bg-yellow-500/20 rounded-full blur-md"></div>
                                </div>
                                <div className="ml-3 md:ml-4">
                                    <span className="text-yellow-500 text-xs md:text-sm font-semibold uppercase tracking-wider">Step 2</span>
                                    <h3 className="text-lg md:text-xl font-bold text-white">DNA Salmon Brightening Moisturizer</h3>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                                Aplikasikan setelah facial wash untuk melembapkan, mencerahkan, dan melindungi kulit dengan teknologi DNA Salmon yang revolusioner.
                            </p>

                            <div className="bg-black/30 rounded-xl p-3 md:p-4 mb-4 md:mb-6 border border-gray-700/50">
                                <h4 className="text-yellow-500 font-semibold mb-2 md:mb-3 flex items-center text-sm md:text-base">
                                    <i className="fas fa-clock mr-2"></i>
                                    Waktu Penggunaan:
                                </h4>
                                <ul className="space-y-2 md:space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-4 h-4 md:w-5 md:h-5 bg-yellow-500/20 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                                            <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 text-xs md:text-sm">Pagi hari sebelum beraktivitas untuk perlindungan sepanjang hari</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-4 h-4 md:w-5 md:h-5 bg-yellow-500/20 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                                            <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 text-xs md:text-sm">Malam hari sebelum tidur untuk regenerasi kulit optimal</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-1 md:gap-2">
                                <span className="bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full text-xs font-medium">Brightening</span>
                                <span className="bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full text-xs font-medium">DNA Salmon</span>
                                <span className="bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full text-xs font-medium">24H Moisture</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}