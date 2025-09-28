export const Hero = () => {
    return (
        <section className="relative pt-20 md:pt-10 pb-5 md:pb-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden mt-5 md:mt-20">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="mb-6 md:mb-8">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-yellow-500/25 inline-flex items-center">
                        <i className="fas fa-crown mr-2 text-sm"></i>
                        Layanan Pelanggan Premium
                        <i className="fas fa-sparkles ml-2 text-yellow-200"></i>
                    </span>
                </div>

                {/* Bagian judul yang disesuaikan */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug">
                        <span className="text-white block">HUBUNGI</span>
                        <span className="gold-gradient bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent block mt-2">
                            AHOER COOL
                        </span>
                    </h1>
                </div>

                <div className="mb-12 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mr-3"></div>
                        <div className="text-yellow-500 text-lg">
                            <i className="fas fa-asterisk"></i>
                        </div>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full ml-3"></div>
                    </div>
                    <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light">
                        Kami siap membantu Anda dengan pertanyaan, saran, atau informasi produk
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 font-semibold"> Ahoer Cool For Men</span>.
                        <br className="hidden md:block" /> Tim ahli kami siap memberikan solusi terbaik untuk perawatan kulit pria modern.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-12 md:mb-16">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <a href="https://wa.me/6281234567890" className="relative bg-gradient-to-br from-gray-900 to-black text-white px-6 py-5 rounded-xl font-bold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg flex flex-col items-center border border-green-500/20">
                            <div className="text-3xl mb-3 text-green-500 group-hover:scale-110 transition-transform">
                                <i className="fab fa-whatsapp"></i>
                            </div>
                            <span className="text-lg mb-1.5">Chat WhatsApp</span>
                            <span className="text-green-400 text-xs font-medium">Respon Cepat 24/7</span>
                        </a>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <a href="tel:+6281234567890" className="relative bg-gradient-to-br from-gray-900 to-black text-white px-6 py-5 rounded-xl font-bold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg flex flex-col items-center border border-blue-500/20">
                            <div className="text-3xl mb-3 text-blue-500 group-hover:scale-110 transition-transform">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <span className="text-lg mb-1.5">Telepon Kami</span>
                            <span className="text-blue-400 text-xs font-medium">+62 812-3456-7890</span>
                        </a>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <a href="mailto:info@ahoercool.com" className="relative bg-gradient-to-br from-gray-900 to-black text-white px-6 py-5 rounded-xl font-bold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg flex flex-col items-center border border-red-500/20">
                            <div className="text-3xl mb-3 text-red-500 group-hover:scale-110 transition-transform">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <span className="text-lg mb-1.5">Email Kami</span>
                            <span className="text-red-400 text-xs font-medium">info@ahoercool.com</span>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border-l-4 border-yellow-500 rounded-xl p-4 md:p-6 text-left backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 group hover:transform hover:-translate-y-1 shadow-lg">
                        <div className="text-yellow-500 text-2xl md:text-3xl mb-3 md:mb-4 group-hover:scale-110 transition-transform inline-flex items-center">
                            <i className="fas fa-clock mr-2 md:mr-3"></i>
                            <div className="h-px flex-1 bg-gradient-to-r from-yellow-500/50 to-transparent ml-2 md:ml-3"></div>
                        </div>
                        <h3 className="text-white font-bold text-base md:text-lg mb-2">Jam Operasional</h3>
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">Senin - Minggu: 08:00 - 22:00 WIB</p>
                        <p className="text-yellow-500/80 text-xs mt-1.5 font-medium">Layanan 7 hari seminggu</p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border-l-4 border-yellow-500 rounded-xl p-4 md:p-6 text-left backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 group hover:transform hover:-translate-y-1 shadow-lg">
                        <div className="text-yellow-500 text-2xl md:text-3xl mb-3 md:mb-4 group-hover:scale-110 transition-transform inline-flex items-center">
                            <i className="fas fa-shield-alt mr-3"></i>
                            <div className="h-px flex-1 bg-gradient-to-r from-yellow-500/50 to-transparent ml-2 md:ml-3"></div>
                        </div>
                        <h3 className="text-white font-bold text-base md:text-lg mb-2">Respon Cepat</h3>
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">Rata-rata respon dalam 5 menit</p>
                        <p className="text-yellow-500/80 text-xs mt-1.5 font-medium">Garansi respon cepat</p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border-l-4 border-yellow-500 rounded-xl p-4 md:p-6 text-left backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 group hover:transform hover:-translate-y-1 shadow-lg">
                        <div className="text-yellow-500 text-2xl md:text-3xl mb-3 md:mb-4 group-hover:scale-110 transition-transform inline-flex items-center">
                            <i className="fas fa-user-tie mr-3"></i>
                            <div className="h-px flex-1 bg-gradient-to-r from-yellow-500/50 to-transparent ml-2 md:ml-3"></div>
                        </div>
                        <h3 className="text-white font-bold text-base md:text-lg mb-2">Konsultan Ahli</h3>
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">Didukung oleh ahli skincare pria</p>
                        <p className="text-yellow-500/80 text-xs mt-1.5 font-medium">Konsultasi gratis</p>
                    </div>
                </div>

                <div className="mt-12 pt-10 border-t border-gray-800/50">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-6 flex items-center justify-center gap-2">
                        <i className="fas fa-share-alt text-yellow-500 text-base"></i>
                        Ikuti Kami di Media Sosial
                        <i className="fas fa-arrow-right text-yellow-500/70 text-xs"></i>
                    </p>

                    <div className="flex justify-center space-x-3 md:space-x-4">
                        {[
                            { platform: 'facebook', color: 'blue-500' },
                            { platform: 'instagram', color: 'pink-500' },
                            { platform: 'twitter', color: 'sky-500' },
                            { platform: 'tiktok', color: 'gray-300' }
                        ].map((item, index) => (
                            <a key={item.platform} href="#" className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 border border-${item.color}/20 shadow-md`}>
                                <i className={`fab fa-${item.platform} text-lg md:text-xl`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}